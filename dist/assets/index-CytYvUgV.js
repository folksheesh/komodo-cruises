import {
  r as m,
  w as lt,
  n as Bn,
  o as Qe,
  a as wt,
  c as Yt,
  b as o,
  d as Me,
  e as i,
  f as M,
  g as e,
  h as Q,
  i as B,
  j,
  T as xt,
  k as x,
  l as ke,
  m as Fn,
  F as V,
  p as se,
  q as be,
  t as l,
  v as yt,
  u as he,
  s as Gs,
  x as Wa,
  y as Wt,
  z as Ht,
  A as Pe,
  B as Ha,
  C as In,
  D as Nn,
  E as ds,
  G as kt,
  H as Mn,
  I as Ya,
  J as Ja,
  K as ja,
  L as Xa,
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
const vt = (S, b) => {
    const f = S.__vccOpts || S;
    for (const [C, h] of b) f[C] = h;
    return f;
  },
  Qa = { key: 0, class: "search-modal-fixed" },
  Za = { class: "modal-top" },
  eo = { class: "modal-controls" },
  to = { class: "search-modal-inner" },
  so = { class: "search-container" },
  no = { class: "input-wrapper" },
  ao = { class: "categories-container" },
  oo = {
    __name: "SearchModal",
    props: { isOpen: Boolean },
    emits: ["close"],
    setup(S, { emit: b }) {
      const f = S,
        C = b,
        h = m(null),
        g = m(null),
        v = (X) => {
          g.value === X ? (g.value = null) : (g.value = X);
        };
      lt(
        () => f.isOpen,
        (X) => {
          X
            ? ((document.body.style.overflow = "hidden"),
              Bn(() => {
                var A;
                (A = h.value) == null || A.focus();
              }))
            : ((document.body.style.overflow = ""), (g.value = null));
        }
      );
      const E = (X) => {
        X.key === "Escape" && f.isOpen && C("close");
      };
      return (
        Qe(() => {
          window.addEventListener("keydown", E);
        }),
        wt(() => {
          window.removeEventListener("keydown", E),
            (document.body.style.overflow = "");
        }),
        (X, A) => (
          o(),
          Yt(
            xt,
            { name: "fade" },
            {
              default: Me(() => [
                S.isOpen
                  ? (o(),
                    i("div", Qa, [
                      e("div", Za, [
                        A[6] ||
                          (A[6] = e(
                            "div",
                            { class: "modal-logo" },
                            "Komodo Cruises",
                            -1
                          )),
                        e("div", eo, [
                          e(
                            "button",
                            {
                              class: "close-btn",
                              onClick:
                                A[0] || (A[0] = (oe) => X.$emit("close")),
                            },
                            [
                              ...(A[5] ||
                                (A[5] = [
                                  e(
                                    "span",
                                    { class: "btn-text" },
                                    "Close Search",
                                    -1
                                  ),
                                  Q(),
                                  e("span", { class: "close-icon" }, "✕", -1),
                                ])),
                            ]
                          ),
                        ]),
                      ]),
                      e("div", to, [
                        e("div", so, [
                          e("div", no, [
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
                              512
                            ),
                            A[7] ||
                              (A[7] = e(
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
                                    ]
                                  ),
                                ],
                                -1
                              )),
                          ]),
                        ]),
                        e("div", ao, [
                          A[11] ||
                            (A[11] = e(
                              "p",
                              { class: "categories-label" },
                              "Refine your search",
                              -1
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
                                    A[1] ||
                                    (A[1] = j(
                                      (oe) => v("Destinations"),
                                      ["prevent"]
                                    )),
                                },
                                "Destinations",
                                2
                              ),
                              A[8] ||
                                (A[8] = e(
                                  "span",
                                  { class: "separator" },
                                  "•",
                                  -1
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
                                    A[2] ||
                                    (A[2] = j((oe) => v("Ships"), ["prevent"])),
                                },
                                "Ships",
                                2
                              ),
                              A[9] ||
                                (A[9] = e(
                                  "span",
                                  { class: "separator" },
                                  "•",
                                  -1
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
                                    A[3] ||
                                    (A[3] = j(
                                      (oe) => v("Cabins"),
                                      ["prevent"]
                                    )),
                                },
                                "Cabins",
                                2
                              ),
                              A[10] ||
                                (A[10] = e(
                                  "span",
                                  { class: "separator" },
                                  "•",
                                  -1
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
                                    A[4] ||
                                    (A[4] = j((oe) => v("Blog"), ["prevent"])),
                                },
                                "Blog",
                                2
                              ),
                            ],
                            2
                          ),
                        ]),
                      ]),
                    ]))
                  : M("", !0),
              ]),
              _: 1,
            }
          )
        )
      );
    },
  },
  io = vt(oo, [["__scopeId", "data-v-c3c0dc80"]]),
  lo = { key: 0, class: "menu-modal-fixed" },
  ro = { class: "modal-top" },
  co = { class: "modal-controls" },
  uo = {
    __name: "MenuModal",
    props: { isOpen: Boolean },
    emits: ["close", "open-search"],
    setup(S, { emit: b }) {
      const f = S,
        C = b;
      lt(
        () => f.isOpen,
        (g) => {
          g
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "");
        }
      );
      const h = (g) => {
        g.key === "Escape" && f.isOpen && C("close");
      };
      return (
        Qe(() => {
          window.addEventListener("keydown", h);
        }),
        wt(() => {
          window.removeEventListener("keydown", h),
            (document.body.style.overflow = "");
        }),
        (g, v) => (
          o(),
          Yt(
            xt,
            { name: "fade" },
            {
              default: Me(() => [
                S.isOpen
                  ? (o(),
                    i("div", lo, [
                      e("div", ro, [
                        v[4] ||
                          (v[4] = e(
                            "div",
                            { class: "modal-logo" },
                            "Komodo Cruises",
                            -1
                          )),
                        e("div", co, [
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
                                    -1
                                  ),
                                  e(
                                    "span",
                                    { class: "btn-text" },
                                    "Search",
                                    -1
                                  ),
                                ])),
                            ]
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
                            ]
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
                                  "Our Collection"
                                ),
                                e(
                                  "a",
                                  { href: "#", class: "main-link" },
                                  "Villa Collection"
                                ),
                                e(
                                  "a",
                                  { href: "#", class: "main-link" },
                                  "Conservation"
                                ),
                                e(
                                  "a",
                                  { href: "#", class: "main-link" },
                                  "Wildlife"
                                ),
                                e(
                                  "a",
                                  { href: "#", class: "main-link" },
                                  "About Komodo"
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
                                    ]
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
                                    ]
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
                                    ]
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
                                    ]
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
                                    ]
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
                                    "Photos & Videos"
                                  ),
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link" },
                                    "Blog"
                                  ),
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link" },
                                    "Indonesia Is..."
                                  ),
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link" },
                                    "Magazine"
                                  ),
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link" },
                                    "Rates"
                                  ),
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link" },
                                    "Exclusive Offers"
                                  ),
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link" },
                                    "Press Room"
                                  ),
                                  e(
                                    "a",
                                    { href: "#", class: "sec-link" },
                                    "Careers"
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
                                        ]
                                      ),
                                      Q(" Resource Library "),
                                    ]
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
                                        ]
                                      ),
                                      Q(" Trade Login & Rates "),
                                    ]
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
                                        ]
                                      ),
                                      Q(" Suppliers "),
                                    ]
                                  ),
                                ]),
                              ]),
                              e("div", { class: "contact-info" }, [
                                e(
                                  "p",
                                  { class: "contact-email" },
                                  "E. enquiries@komodocruises.com"
                                ),
                                e(
                                  "p",
                                  { class: "contact-phone" },
                                  "T. +62 (0) 21 683 3424"
                                ),
                                e(
                                  "a",
                                  { href: "#", class: "view-contact" },
                                  "View all contact information ›"
                                ),
                              ]),
                            ]),
                          ],
                          -1
                        )),
                    ]))
                  : M("", !0),
              ]),
              _: 1,
            }
          )
        )
      );
    },
  },
  vo = vt(uo, [["__scopeId", "data-v-d4e9a465"]]),
  po = "http://127.0.0.1:8787";
function fs(S) {
  const b = new URL(po),
    f = new URLSearchParams();
  for (const [C, h] of Object.entries(S)) h !== void 0 && f.set(C, h);
  return (b.search = f.toString()), b.toString();
}
async function hs(S) {
  if (!S.ok) throw new Error(`HTTP ${S.status}: ${S.statusText}`);
  const b = await S.json();
  if ((b == null ? void 0 : b.ok) === !1)
    throw new Error(b.error || "API error");
  return b;
}
async function mo(S, b = 3, f = 100) {
  let C = null;
  for (let h = 0; h <= b; h++)
    try {
      return await S();
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
      console.warn(
        `API request failed (attempt ${h + 1}), retrying in ${E}ms...`,
        C.message
      ),
        await new Promise((X) => setTimeout(X, E));
    }
  throw C || new Error("Unknown error");
}
const Bs = new Map(),
  Fs = new Map(),
  Vt = new Map();
let zs = null;
const Us = new Map();
async function zn() {
  if (zs) return zs;
  const S = fs({ resource: "operators" }),
    b = await fetch(S),
    f = await hs(b);
  return (zs = f), f;
}
async function En(S) {
  const b = `cabins|${S || ""}`;
  if (Bs.has(b)) return Bs.get(b);
  const f = fs({ resource: "cabins", sheet: S }),
    C = await fetch(f),
    h = await hs(C);
  return Bs.set(b, h), h;
}
async function Un() {
  const S = "shipdetail";
  if (Us.has(S)) return Us.get(S);
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
  Us.set(S, g);
  try {
    localStorage.setItem(S, JSON.stringify({ timestamp: Date.now(), data: g }));
  } catch (v) {
    console.warn("Quota exceeded or storage disabled", v);
  }
  return g;
}
async function vs(S, b) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(S))
    throw new Error("Date must be in YYYY-MM-DD format");
  const f = `${S}|${b || ""}`;
  if (Fs.has(f)) return Fs.get(f);
  if (Vt.has(f)) return Vt.get(f);
  const C = fs({ resource: "availability", date: S }),
    h = mo(() => fetch(C).then((g) => hs(g)), 3, 200)
      .then((g) => (Fs.set(f, g), Vt.delete(f), g))
      .catch((g) => {
        throw (
          (Vt.delete(f),
          console.error(`Failed to get availability for ${S}:`, g),
          g)
        );
      });
  return Vt.set(f, h), h;
}
function Gn(S) {
  const b = S.getFullYear(),
    f = String(S.getMonth() + 1).padStart(2, "0"),
    C = String(S.getDate()).padStart(2, "0");
  return `${b}-${f}-${C}`;
}
function Pt(S) {
  return new Date(S + "T00:00:00");
}
function fo() {
  return Gn(new Date());
}
const Kn = "" + new URL("left-arrow-CTppQl_n.svg", import.meta.url).href,
  Ks = "" + new URL("right-arrow-BeSe4_f_.svg", import.meta.url).href,
  at = "" + new URL("down-arrow-BfUnB_1G.svg", import.meta.url).href,
  ot = "" + new URL("up-arrow-CozmStYp.svg", import.meta.url).href,
  ho = { key: 0, class: "modal-overlay" },
  go = { class: "modal-container" },
  bo = { class: "modal-body" },
  yo = { class: "plan-wrap plan-page" },
  ko = { class: "plan-content" },
  wo = { class: "wizard-progress" },
  _o = { class: "wizard-circle" },
  Co = {
    key: 0,
    class: "wizard-check",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "3",
  },
  $o = { key: 1 },
  So = { class: "wizard-circle" },
  xo = {
    key: 0,
    class: "wizard-check",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "3",
  },
  Do = { key: 1 },
  To = { class: "wizard-circle" },
  Ao = {
    key: 0,
    class: "wizard-check",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "3",
  },
  Io = { key: 1 },
  No = { class: "wizard-circle" },
  Mo = {
    key: 0,
    class: "wizard-check",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "3",
  },
  Eo = { key: 1 },
  Ro = { class: "wizard-circle" },
  Po = {
    key: 0,
    class: "wizard-check",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "3",
  },
  Oo = { key: 1 },
  Lo = { key: 0 },
  Bo = { class: "list" },
  Fo = { class: "list-text" },
  zo = ["value", "aria-label"],
  Uo = { key: 1 },
  Go = { class: "list" },
  Ko = { key: 0, class: "muted" },
  Vo = { class: "ship-info" },
  qo = { class: "ship-details-text" },
  Wo = { class: "list-text" },
  Ho = { key: 0, class: "ship-desc" },
  Yo = ["value", "aria-label"],
  Jo = { key: 0, class: "muted" },
  jo = { key: 2 },
  Xo = { class: "date-range-display" },
  Qo = { class: "date-value" },
  Zo = { class: "date-value" },
  ei = { class: "trip-duration-section" },
  ti = { class: "trip-duration-dropdown-wrapper" },
  si = { class: "trip-duration-value" },
  ni = ["src"],
  ai = { key: 0, class: "trip-duration-menu" },
  oi = { class: "counter-row duration-counter-row" },
  ii = { class: "counter-ctrls" },
  li = ["disabled"],
  ri = { class: "count-display" },
  ci = ["disabled"],
  ui = { class: "counter-row duration-counter-row" },
  di = { class: "counter-ctrls" },
  vi = ["disabled"],
  pi = { class: "count-display" },
  mi = ["disabled"],
  fi = { key: 0, class: "trip-duration-reset" },
  hi = { class: "custom-calendar" },
  gi = { class: "calendar-header" },
  bi = { class: "calendar-title" },
  yi = { class: "calendar-grid" },
  ki = { class: "calendar-days" },
  wi = ["disabled", "onClick"],
  _i = { key: 3 },
  Ci = { class: "mode-toggle-container" },
  $i = { class: "mode-toggle" },
  Si = { class: "text-center mb-6" },
  xi = { key: 0, class: "results-note" },
  Di = { key: 1, class: "results-note" },
  Ti = { key: 0, class: "flexible-guest-card" },
  Ai = { class: "counter-row" },
  Ii = { class: "counter-ctrls" },
  Ni = ["disabled"],
  Mi = { class: "count-display" },
  Ei = { key: 1, class: "cabins-container" },
  Ri = ["onClick"],
  Pi = { class: "cabin-header-left" },
  Oi = { class: "cabin-title" },
  Li = { class: "cabin-header-right" },
  Bi = { class: "cabin-summary" },
  Fi = ["onClick"],
  zi = { key: 0, class: "cabin-body" },
  Ui = { class: "counter-row" },
  Gi = { class: "counter-ctrls" },
  Ki = ["disabled", "onClick"],
  Vi = { class: "count" },
  qi = ["disabled", "onClick"],
  Wi = { class: "counter-row" },
  Hi = { class: "counter-ctrls" },
  Yi = ["disabled", "onClick"],
  Ji = { class: "count" },
  ji = ["disabled", "onClick"],
  Xi = { class: "cabins-total" },
  Qi = { class: "total-value" },
  Zi = { key: 4 },
  el = { class: "bottom-bar" },
  tl = { class: "nav-inner-footer" },
  sl = ["src"],
  nl = ["src"],
  al = { key: 0, class: "toast-notification" },
  ol = { class: "toast-message" },
  il = "Nusa Tenggara Timur",
  bt = 30,
  ll = 4,
  ps = 4,
  rl = {
    __name: "PlanModal",
    props: { isOpen: Boolean },
    emits: ["close", "navigate-to-results"],
    setup(S, { emit: b }) {
      const f = S,
        C = b,
        h = m(1),
        g = ["Komodo National Park", "Labuan Bajo"],
        v = [],
        E = m([]),
        X = m(!1),
        A = m([]),
        oe = m([]),
        te = m(""),
        Z = m(""),
        q = m(1),
        W = m(30);
      function Se() {
        q.value > 1 && q.value--;
      }
      function Ce() {
        q.value < W.value && q.value++;
      }
      function ie() {
        W.value > q.value && W.value--;
      }
      function O() {
        W.value < bt && W.value++;
      }
      const H = m(!1);
      x(() => {
        const I = [];
        for (let c = 1; c <= bt; c++) I.push(c);
        return I;
      });
      const le = x(() =>
        q.value === 1 && W.value === bt
          ? "Any duration"
          : q.value === W.value
          ? `${q.value} ${q.value === 1 ? "day" : "days"}`
          : `${q.value} - ${W.value} days`
      );
      function ve() {
        (q.value = 1), (W.value = bt);
      }
      const F = m(!0),
        G = m(2),
        w = m([{ id: 1, adults: 2, children: 0, expanded: !0 }]),
        ge = x(() => w.value.reduce((I, c) => I + c.adults + c.children, 0)),
        fe = x(() => w.value.length < ll),
        xe = m(!1),
        qe = m("");
      let me = null;
      const Ae = m(new Date().getMonth()),
        Ze = m(new Date().getFullYear());
      function ne() {
        const I = E.value.filter((D) => oe.value.includes(D.id)),
          c = I.map((D) => D.label),
          y = I.map((D) => D.sheet),
          P = {
            region: il,
            destination: A.value[0] || "",
            destinations: A.value.slice(),
            ships: c,
            shipSheets: y,
            ship: c[0] || "",
            lodges: c.slice(),
            dateFrom: te.value,
            dateTo: Z.value,
            minTripDuration: q.value,
            maxTripDuration: W.value,
            isFlexible: F.value,
            flexibleGuests: F.value ? G.value : 0,
            cabins: F.value
              ? []
              : w.value.map((D) => ({
                  adults: D.adults,
                  children: D.children,
                  total: D.adults + D.children,
                })),
            totalCabins: F.value ? 0 : w.value.length,
            totalGuests: F.value ? G.value : ge.value,
            adults: F.value
              ? G.value
              : w.value.reduce((D, Y) => D + Y.adults, 0),
            children: F.value ? 0 : w.value.reduce((D, Y) => D + Y.children, 0),
            age3_9: 0,
            age0_2: 0,
            timestamp: Date.now(),
          };
        localStorage.setItem("komodo_search_criteria", JSON.stringify(P)),
          C("navigate-to-results");
      }
      const k = ["Destinations", "Ships", "Dates", "Guests", "Submit"],
        Ie = x(() => k[h.value - 2] || ""),
        R = x(() => (h.value < 5 ? k[h.value - 1] : "Submit"));
      x(() => fo());
      const De = x(
          () =>
            `${
              [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ][Ae.value]
            } ${Ze.value}`
        ),
        et = x(() => {
          const I = new Date(Ze.value, Ae.value, 1),
            c = new Date(Ze.value, Ae.value + 1, 0),
            y = new Date(I),
            P = new Date();
          y.setDate(y.getDate() - y.getDay());
          const D = [],
            Y = new Date(c);
          Y.setDate(Y.getDate() + (6 - c.getDay()));
          for (let ce = new Date(y); ce <= Y; ce.setDate(ce.getDate() + 1)) {
            ce.getDay();
            const mt = ce.getMonth() === Ae.value,
              ue = new Date(ce);
            ue.setHours(0, 0, 0, 0);
            const Be = new Date(P);
            Be.setHours(0, 0, 0, 0);
            const ct = ue < Be,
              jt = mt && !ct,
              zt = Gn(ce);
            let Fe = !1,
              ze = !1,
              Ue = !1;
            if (te.value && Z.value && mt) {
              const Ge = Pt(te.value),
                Ke = Pt(Z.value);
              ue >= Ge &&
                ue <= Ke &&
                ((Fe = !0),
                ue.getTime() === Ge.getTime() && (ze = !0),
                ue.getTime() === Ke.getTime() && (Ue = !0));
            }
            D.push({
              key: ce.getTime(),
              date: ce.getDate(),
              fullDate: zt,
              isCurrentMonth: mt,
              isSelectable: jt,
              isPast: ct,
              isSelected: te.value === zt || Z.value === zt,
              isInRange: Fe,
              isRangeStart: ze,
              isRangeEnd: Ue,
            });
          }
          return D;
        }),
        Ee = x(() => {
          if (!te.value || !Z.value) return bt;
          const I = Pt(te.value),
            y = Pt(Z.value).getTime() - I.getTime(),
            P = Math.ceil(y / (1e3 * 60 * 60 * 24)) + 1;
          return Math.min(P, bt);
        });
      x(() => {
        const I = Ee.value,
          c = [];
        for (let y = 1; y <= I; y++) c.push(y);
        return c;
      });
      const tt = x(() => A.value.length > 0),
        We = x(() => A.value.length > 0 && oe.value.length > 0),
        pe = x(() => A.value.length > 0 && oe.value.length > 0 && !!te.value);
      lt(A, () => {
        oe.value = [];
      }),
        lt(Ee, (I) => {
          Bn(() => {
            W.value > I && (W.value = I),
              q.value > W.value && (q.value = W.value);
          });
        });
      const He = {
        bodyOverflow: "",
        htmlOverflow: "",
        bodyPadding: "",
        htmlPadding: "",
      };
      lt(
        () => f.isOpen,
        (I) => {
          I ? pt() : Lt();
        },
        { immediate: !0 }
      ),
        Qe(() => {
          st();
        }),
        wt(() => {
          Lt();
        });
      function Re() {
        C("close");
      }
      function Le(I) {
        h.value = I;
      }
      function _t() {
        if (h.value === 1 && A.value.length === 0)
          return nt("Please select at least one destination first.");
        if (h.value === 2 && oe.value.length === 0)
          return nt("Please select at least one ship first.");
        if (h.value === 3 && !te.value)
          return nt("Please select a start date first.");
        h.value < 5 ? h.value++ : ne();
      }
      function je() {
        h.value > 1 && h.value--;
      }
      function Ct() {
        ne();
      }
      function rt() {
        ne();
      }
      async function st() {
        X.value = !0;
        try {
          let I, c;
          try {
            [I, c] = await Promise.all([
              zn(),
              Un().catch(
                (D) => (
                  console.warn(
                    "Failed to load ship details (likely quota exceeded):",
                    D
                  ),
                  null
                )
              ),
            ]);
          } catch (D) {
            console.warn("Critical failure loading operators:", D),
              (E.value = Dt(v));
            return;
          }
          const y = {};
          c != null &&
            c.ships &&
            c.ships.forEach((D) => {
              const Y = D.name ? D.name.toLowerCase().trim() : "";
              Y && (y[Y] = D);
            });
          const P = ((I == null ? void 0 : I.operators) || [])
            .map((D) => {
              var Be, ct;
              const Y = ((Be = D.operator) == null ? void 0 : Be.trim()) || "",
                ce = ((ct = D.sourceSheet) == null ? void 0 : ct.trim()) || Y,
                mt = Y.toLowerCase().trim(),
                ue = y[mt];
              return {
                id: `${Y}__${ce}`,
                label: Y,
                sheet: ce,
                image: (ue == null ? void 0 : ue.mainImage) || "",
                description: (ue == null ? void 0 : ue.description) || "",
                specs: (ue == null ? void 0 : ue.specs) || {},
              };
            })
            .filter((D) => D.label && D.sheet);
          E.value = P.length ? P : Dt(v);
        } catch (I) {
          console.warn("Failed to load operators/details:", I),
            (E.value = Dt(v));
        } finally {
          X.value = !1;
        }
      }
      function pt() {
        const I = document.body,
          c = document.documentElement;
        if (!I || !c) return;
        const y = window.innerWidth - c.clientWidth;
        if (
          ((He.bodyOverflow = I.style.overflow),
          (He.htmlOverflow = c.style.overflow),
          (He.bodyPadding = I.style.paddingRight),
          (He.htmlPadding = c.style.paddingRight),
          y > 0)
        ) {
          const P = `${y}px`;
          (I.style.paddingRight = P), (c.style.paddingRight = P);
        }
        (I.style.overflow = "hidden"), (c.style.overflow = "hidden");
      }
      function Lt() {
        const I = document.body,
          c = document.documentElement;
        !I ||
          !c ||
          ((I.style.overflow = He.bodyOverflow),
          (c.style.overflow = He.htmlOverflow),
          (I.style.paddingRight = He.bodyPadding),
          (c.style.paddingRight = He.htmlPadding));
      }
      function Dt(I) {
        return Array.isArray(I)
          ? I.map((c) => {
              var D, Y;
              const y = ((D = c.label) == null ? void 0 : D.trim()) || "",
                P = ((Y = c.sheet) == null ? void 0 : Y.trim()) || y;
              return { id: c.id || `${y}__${P}`, label: y, sheet: P };
            }).filter((c) => c.label && c.sheet)
          : [];
      }
      function we() {
        fe.value &&
          w.value.push({
            id: Date.now(),
            adults: 2,
            children: 0,
            expanded: !0,
          });
      }
      function Bt(I) {
        w.value.length > 1 && w.value.splice(I, 1);
      }
      function Ft(I) {
        w.value[I].expanded = !w.value[I].expanded;
      }
      function Tt(I, c) {
        const y = w.value[I];
        y.adults + y.children < ps && y[c]++;
      }
      function Jt(I, c) {
        const y = w.value[I];
        c === "adults" && y.adults > 1 && y.adults--,
          c === "children" && y.children > 0 && y.children--;
      }
      function nt(I) {
        (qe.value = I),
          (xe.value = !0),
          me && clearTimeout(me),
          (me = setTimeout(() => {
            xe.value = !1;
          }, 3e3));
      }
      function At() {
        Ae.value === 0 ? ((Ae.value = 11), Ze.value--) : Ae.value--;
      }
      function Ne() {
        Ae.value === 11 ? ((Ae.value = 0), Ze.value++) : Ae.value++;
      }
      function Oe(I) {
        if (I.isSelectable)
          if (!te.value || (te.value && Z.value))
            (te.value = I.fullDate), (Z.value = "");
          else {
            const c = Pt(te.value);
            Pt(I.fullDate) < c
              ? ((Z.value = te.value), (te.value = I.fullDate))
              : (Z.value = I.fullDate);
          }
      }
      return (I, c) => (
        o(),
        Yt(Fn, { to: "body" }, [
          ke(
            xt,
            { name: "modal-fade" },
            {
              default: Me(() => [
                S.isOpen
                  ? (o(),
                    i("div", ho, [
                      e("div", go, [
                        e("div", { class: "modal-header" }, [
                          e("div", { class: "modal-header-content" }, [
                            c[13] ||
                              (c[13] = e(
                                "h2",
                                { class: "modal-title" },
                                "Plan your trip",
                                -1
                              )),
                            e("button", { class: "modal-close", onClick: Re }, [
                              ...(c[12] ||
                                (c[12] = [
                                  Q(" Close ", -1),
                                  e("span", { class: "close-x" }, "✕", -1),
                                ])),
                            ]),
                          ]),
                        ]),
                        e("div", bo, [
                          e("section", yo, [
                            e("div", ko, [
                              e("div", wo, [
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
                                    onClick: c[0] || (c[0] = (y) => Le(1)),
                                  },
                                  [
                                    e("div", _o, [
                                      h.value > 1
                                        ? (o(),
                                          i("svg", Co, [
                                            ...(c[14] ||
                                              (c[14] = [
                                                e(
                                                  "polyline",
                                                  { points: "20 6 9 17 4 12" },
                                                  null,
                                                  -1
                                                ),
                                              ])),
                                          ]))
                                        : (o(), i("span", $o, "1")),
                                    ]),
                                    c[15] ||
                                      (c[15] = e(
                                        "span",
                                        { class: "wizard-label" },
                                        "Destinations",
                                        -1
                                      )),
                                  ],
                                  2
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
                                  2
                                ),
                                e(
                                  "div",
                                  {
                                    class: B([
                                      "wizard-step",
                                      {
                                        completed: h.value > 2,
                                        active: h.value === 2,
                                        disabled: !tt.value,
                                      },
                                    ]),
                                    onClick:
                                      c[1] || (c[1] = (y) => tt.value && Le(2)),
                                  },
                                  [
                                    e("div", So, [
                                      h.value > 2
                                        ? (o(),
                                          i("svg", xo, [
                                            ...(c[16] ||
                                              (c[16] = [
                                                e(
                                                  "polyline",
                                                  { points: "20 6 9 17 4 12" },
                                                  null,
                                                  -1
                                                ),
                                              ])),
                                          ]))
                                        : (o(), i("span", Do, "2")),
                                    ]),
                                    c[17] ||
                                      (c[17] = e(
                                        "span",
                                        { class: "wizard-label" },
                                        "Ships",
                                        -1
                                      )),
                                  ],
                                  2
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
                                  2
                                ),
                                e(
                                  "div",
                                  {
                                    class: B([
                                      "wizard-step",
                                      {
                                        completed: h.value > 3,
                                        active: h.value === 3,
                                        disabled: !We.value,
                                      },
                                    ]),
                                    onClick:
                                      c[2] || (c[2] = (y) => We.value && Le(3)),
                                  },
                                  [
                                    e("div", To, [
                                      h.value > 3
                                        ? (o(),
                                          i("svg", Ao, [
                                            ...(c[18] ||
                                              (c[18] = [
                                                e(
                                                  "polyline",
                                                  { points: "20 6 9 17 4 12" },
                                                  null,
                                                  -1
                                                ),
                                              ])),
                                          ]))
                                        : (o(), i("span", Io, "3")),
                                    ]),
                                    c[19] ||
                                      (c[19] = e(
                                        "span",
                                        { class: "wizard-label" },
                                        "Dates",
                                        -1
                                      )),
                                  ],
                                  2
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
                                  2
                                ),
                                e(
                                  "div",
                                  {
                                    class: B([
                                      "wizard-step",
                                      {
                                        completed: h.value > 4,
                                        active: h.value === 4,
                                        disabled: !pe.value,
                                      },
                                    ]),
                                    onClick:
                                      c[3] || (c[3] = (y) => pe.value && Le(4)),
                                  },
                                  [
                                    e("div", No, [
                                      h.value > 4
                                        ? (o(),
                                          i("svg", Mo, [
                                            ...(c[20] ||
                                              (c[20] = [
                                                e(
                                                  "polyline",
                                                  { points: "20 6 9 17 4 12" },
                                                  null,
                                                  -1
                                                ),
                                              ])),
                                          ]))
                                        : (o(), i("span", Eo, "4")),
                                    ]),
                                    c[21] ||
                                      (c[21] = e(
                                        "span",
                                        { class: "wizard-label" },
                                        "Guests",
                                        -1
                                      )),
                                  ],
                                  2
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
                                  2
                                ),
                                e(
                                  "div",
                                  {
                                    class: B([
                                      "wizard-step",
                                      {
                                        completed: h.value === 5,
                                        active: h.value === 5,
                                        disabled: !pe.value,
                                      },
                                    ]),
                                    onClick:
                                      c[4] || (c[4] = (y) => pe.value && Le(5)),
                                  },
                                  [
                                    e("div", Ro, [
                                      h.value === 5
                                        ? (o(),
                                          i("svg", Po, [
                                            ...(c[22] ||
                                              (c[22] = [
                                                e(
                                                  "polyline",
                                                  { points: "20 6 9 17 4 12" },
                                                  null,
                                                  -1
                                                ),
                                              ])),
                                          ]))
                                        : (o(), i("span", Oo, "5")),
                                    ]),
                                    c[23] ||
                                      (c[23] = e(
                                        "span",
                                        { class: "wizard-label" },
                                        "Submit",
                                        -1
                                      )),
                                  ],
                                  2
                                ),
                              ]),
                              h.value === 1
                                ? (o(),
                                  i("div", Lo, [
                                    c[25] ||
                                      (c[25] = e(
                                        "h3",
                                        { class: "step-title" },
                                        "Destinations",
                                        -1
                                      )),
                                    c[26] ||
                                      (c[26] = e(
                                        "p",
                                        { class: "results-note" },
                                        " Select the destinations you're interested in: ",
                                        -1
                                      )),
                                    e("div", Bo, [
                                      c[24] ||
                                        (c[24] = e(
                                          "div",
                                          { class: "list-heading" },
                                          "Nusa Tenggara Timur",
                                          -1
                                        )),
                                      (o(),
                                      i(
                                        V,
                                        null,
                                        se(g, (y) =>
                                          e(
                                            "div",
                                            { class: "list-row", key: y },
                                            [
                                              e("div", Fo, l(y), 1),
                                              be(
                                                e(
                                                  "input",
                                                  {
                                                    class: "check",
                                                    type: "checkbox",
                                                    value: y,
                                                    "onUpdate:modelValue":
                                                      c[5] ||
                                                      (c[5] = (P) =>
                                                        (A.value = P)),
                                                    "aria-label": `Destination ${y}`,
                                                  },
                                                  null,
                                                  8,
                                                  zo
                                                ),
                                                [[yt, A.value]]
                                              ),
                                            ]
                                          )
                                        ),
                                        64
                                      )),
                                    ]),
                                  ]))
                                : h.value === 2
                                ? (o(),
                                  i("div", Uo, [
                                    c[27] ||
                                      (c[27] = e(
                                        "h3",
                                        { class: "step-title" },
                                        "Ships",
                                        -1
                                      )),
                                    c[28] ||
                                      (c[28] = e(
                                        "p",
                                        { class: "results-note" },
                                        "Please select one or more ships:",
                                        -1
                                      )),
                                    e("div", Go, [
                                      X.value
                                        ? (o(),
                                          i("div", Ko, " Loading ships... "))
                                        : (o(),
                                          i(
                                            V,
                                            { key: 1 },
                                            [
                                              (o(!0),
                                              i(
                                                V,
                                                null,
                                                se(
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
                                                          e("div", qo, [
                                                            e(
                                                              "div",
                                                              Wo,
                                                              l(y.label),
                                                              1
                                                            ),
                                                            y.description
                                                              ? (o(),
                                                                i(
                                                                  "div",
                                                                  Ho,
                                                                  l(
                                                                    y.description
                                                                  ),
                                                                  1
                                                                ))
                                                              : M("", !0),
                                                          ]),
                                                        ]),
                                                        be(
                                                          e(
                                                            "input",
                                                            {
                                                              class: "check",
                                                              type: "checkbox",
                                                              value: y.id,
                                                              "onUpdate:modelValue":
                                                                c[6] ||
                                                                (c[6] = (P) =>
                                                                  (oe.value =
                                                                    P)),
                                                              "aria-label": `Ship ${y.label}`,
                                                            },
                                                            null,
                                                            8,
                                                            Yo
                                                          ),
                                                          [[yt, oe.value]]
                                                        ),
                                                      ],
                                                      2
                                                    )
                                                  )
                                                ),
                                                128
                                              )),
                                              E.value.length === 0
                                                ? (o(),
                                                  i(
                                                    "div",
                                                    Jo,
                                                    " No ships found from API. "
                                                  ))
                                                : M("", !0),
                                            ],
                                            64
                                          )),
                                    ]),
                                  ]))
                                : h.value === 3
                                ? (o(),
                                  i("div", jo, [
                                    c[34] ||
                                      (c[34] = e(
                                        "h3",
                                        { class: "step-title" },
                                        "Dates",
                                        -1
                                      )),
                                    c[35] ||
                                      (c[35] = e(
                                        "p",
                                        { class: "results-note" },
                                        "Select your travel dates:",
                                        -1
                                      )),
                                    e("div", Xo, [
                                      e(
                                        "span",
                                        Qo,
                                        l(te.value || "Start date"),
                                        1
                                      ),
                                      c[29] ||
                                        (c[29] = e(
                                          "span",
                                          { class: "date-arrow" },
                                          "→",
                                          -1
                                        )),
                                      e(
                                        "span",
                                        Zo,
                                        l(Z.value || "End date"),
                                        1
                                      ),
                                    ]),
                                    e("div", ei, [
                                      c[32] ||
                                        (c[32] = e(
                                          "span",
                                          { class: "trip-duration-label" },
                                          "Trip Duration",
                                          -1
                                        )),
                                      e("div", ti, [
                                        e(
                                          "button",
                                          {
                                            type: "button",
                                            class: B([
                                              "trip-duration-dropdown",
                                              { open: H.value },
                                            ]),
                                            onClick:
                                              c[7] ||
                                              (c[7] = (y) =>
                                                (H.value = !H.value)),
                                          },
                                          [
                                            e("span", si, l(le.value), 1),
                                            e(
                                              "img",
                                              {
                                                src: H.value ? he(ot) : he(at),
                                                alt: "",
                                                class: "caret-icon",
                                              },
                                              null,
                                              8,
                                              ni
                                            ),
                                          ],
                                          2
                                        ),
                                        H.value
                                          ? (o(),
                                            i("div", ai, [
                                              e("div", oi, [
                                                c[30] ||
                                                  (c[30] = e(
                                                    "div",
                                                    { class: "counter-text" },
                                                    [
                                                      e(
                                                        "div",
                                                        {
                                                          class:
                                                            "counter-title",
                                                        },
                                                        "Min"
                                                      ),
                                                    ],
                                                    -1
                                                  )),
                                                e("div", ii, [
                                                  e(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      class: "btn-icon",
                                                      disabled: q.value <= 1,
                                                      onClick: j(Se, ["stop"]),
                                                    },
                                                    " − ",
                                                    8,
                                                    li
                                                  ),
                                                  e("span", ri, l(q.value), 1),
                                                  e(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      class: "btn-icon",
                                                      disabled:
                                                        q.value >= W.value,
                                                      onClick: j(Ce, ["stop"]),
                                                    },
                                                    " + ",
                                                    8,
                                                    ci
                                                  ),
                                                ]),
                                              ]),
                                              e("div", ui, [
                                                c[31] ||
                                                  (c[31] = e(
                                                    "div",
                                                    { class: "counter-text" },
                                                    [
                                                      e(
                                                        "div",
                                                        {
                                                          class:
                                                            "counter-title",
                                                        },
                                                        "Max"
                                                      ),
                                                    ],
                                                    -1
                                                  )),
                                                e("div", di, [
                                                  e(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      class: "btn-icon",
                                                      disabled:
                                                        W.value <= q.value,
                                                      onClick: j(ie, ["stop"]),
                                                    },
                                                    " − ",
                                                    8,
                                                    vi
                                                  ),
                                                  e("span", pi, l(W.value), 1),
                                                  e(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      class: "btn-icon",
                                                      disabled: W.value >= bt,
                                                      onClick: j(O, ["stop"]),
                                                    },
                                                    " + ",
                                                    8,
                                                    mi
                                                  ),
                                                ]),
                                              ]),
                                              q.value > 1 || W.value < bt
                                                ? (o(),
                                                  i("div", fi, [
                                                    e(
                                                      "button",
                                                      {
                                                        type: "button",
                                                        class: "btn-text-reset",
                                                        onClick: j(ve, [
                                                          "stop",
                                                        ]),
                                                      },
                                                      " Reset to any duration "
                                                    ),
                                                  ]))
                                                : M("", !0),
                                            ]))
                                          : M("", !0),
                                      ]),
                                    ]),
                                    c[36] ||
                                      (c[36] = e(
                                        "p",
                                        {
                                          class:
                                            "results-note text-sm calendar-instruction",
                                        },
                                        " Click to select start date, then click again to select end date. ",
                                        -1
                                      )),
                                    e("div", hi, [
                                      e("div", gi, [
                                        e("h4", bi, l(De.value), 1),
                                        e(
                                          "div",
                                          { class: "calendar-nav-group" },
                                          [
                                            e(
                                              "button",
                                              {
                                                class: "calendar-nav",
                                                onClick: At,
                                                type: "button",
                                              },
                                              " ‹ "
                                            ),
                                            e(
                                              "button",
                                              {
                                                class: "calendar-nav",
                                                onClick: Ne,
                                                type: "button",
                                              },
                                              " › "
                                            ),
                                          ]
                                        ),
                                      ]),
                                      e("div", yi, [
                                        c[33] ||
                                          (c[33] = e(
                                            "div",
                                            { class: "calendar-weekdays" },
                                            [
                                              e(
                                                "div",
                                                { class: "weekday" },
                                                "Su"
                                              ),
                                              e(
                                                "div",
                                                { class: "weekday" },
                                                "Mo"
                                              ),
                                              e(
                                                "div",
                                                { class: "weekday" },
                                                "Tu"
                                              ),
                                              e(
                                                "div",
                                                { class: "weekday" },
                                                "We"
                                              ),
                                              e(
                                                "div",
                                                { class: "weekday" },
                                                "Th"
                                              ),
                                              e(
                                                "div",
                                                { class: "weekday" },
                                                "Fr"
                                              ),
                                              e(
                                                "div",
                                                { class: "weekday" },
                                                "Sa"
                                              ),
                                            ],
                                            -1
                                          )),
                                        e("div", ki, [
                                          (o(!0),
                                          i(
                                            V,
                                            null,
                                            se(
                                              et.value,
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
                                                        selected: y.isSelected,
                                                        disabled:
                                                          !y.isSelectable,
                                                        past: y.isPast,
                                                        "in-range": y.isInRange,
                                                        "range-start":
                                                          y.isRangeStart,
                                                        "range-end":
                                                          y.isRangeEnd,
                                                      },
                                                    ]),
                                                    disabled: !y.isSelectable,
                                                    onClick: (P) => Oe(y),
                                                    type: "button",
                                                  },
                                                  l(y.date),
                                                  11,
                                                  wi
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                        ]),
                                      ]),
                                    ]),
                                  ]))
                                : h.value === 4
                                ? (o(),
                                  i("div", _i, [
                                    c[43] ||
                                      (c[43] = e(
                                        "h3",
                                        { class: "step-title" },
                                        "Cabins & Guests",
                                        -1
                                      )),
                                    e("div", Ci, [
                                      e("div", $i, [
                                        e(
                                          "button",
                                          {
                                            type: "button",
                                            class: B([
                                              "mode-btn",
                                              { active: F.value },
                                            ]),
                                            onClick:
                                              c[8] ||
                                              (c[8] = (y) => (F.value = !0)),
                                          },
                                          " Flexible ",
                                          2
                                        ),
                                        e(
                                          "button",
                                          {
                                            type: "button",
                                            class: B([
                                              "mode-btn",
                                              { active: !F.value },
                                            ]),
                                            onClick:
                                              c[9] ||
                                              (c[9] = (y) => (F.value = !1)),
                                          },
                                          " Room Allocation ",
                                          2
                                        ),
                                      ]),
                                    ]),
                                    e("div", Si, [
                                      F.value
                                        ? (o(),
                                          i(
                                            "p",
                                            Di,
                                            " Set total guests only. You can choose specific rooms later. "
                                          ))
                                        : (o(),
                                          i(
                                            "p",
                                            xi,
                                            " Configure guests for each cabin individually. "
                                          )),
                                    ]),
                                    F.value
                                      ? (o(),
                                        i("div", Ti, [
                                          e("div", Ai, [
                                            c[37] ||
                                              (c[37] = e(
                                                "div",
                                                { class: "counter-text" },
                                                [
                                                  e(
                                                    "div",
                                                    { class: "counter-title" },
                                                    "Total Guests"
                                                  ),
                                                  e(
                                                    "div",
                                                    {
                                                      class: "counter-subtitle",
                                                    },
                                                    " We will find the best cabin combination for you "
                                                  ),
                                                ],
                                                -1
                                              )),
                                            e("div", Ii, [
                                              e(
                                                "button",
                                                {
                                                  type: "button",
                                                  class: "btn-icon",
                                                  disabled: G.value <= 1,
                                                  onClick:
                                                    c[10] ||
                                                    (c[10] = (y) => G.value--),
                                                },
                                                " − ",
                                                8,
                                                Ni
                                              ),
                                              e("span", Mi, l(G.value), 1),
                                              e(
                                                "button",
                                                {
                                                  type: "button",
                                                  class: "btn-icon",
                                                  onClick:
                                                    c[11] ||
                                                    (c[11] = (y) => G.value++),
                                                },
                                                " + "
                                              ),
                                            ]),
                                          ]),
                                        ]))
                                      : (o(),
                                        i("div", Ei, [
                                          (o(!0),
                                          i(
                                            V,
                                            null,
                                            se(
                                              w.value,
                                              (y, P) => (
                                                o(),
                                                i(
                                                  "div",
                                                  {
                                                    key: y.id,
                                                    class: "cabin-accordion",
                                                  },
                                                  [
                                                    e(
                                                      "div",
                                                      {
                                                        class: "cabin-header",
                                                        onClick: (D) => Ft(P),
                                                      },
                                                      [
                                                        e("div", Pi, [
                                                          e(
                                                            "span",
                                                            Oi,
                                                            "CABIN " + l(P + 1),
                                                            1
                                                          ),
                                                        ]),
                                                        e("div", Li, [
                                                          e(
                                                            "span",
                                                            Bi,
                                                            l(
                                                              y.adults +
                                                                y.children
                                                            ) +
                                                              " guest" +
                                                              l(
                                                                y.adults +
                                                                  y.children !==
                                                                  1
                                                                  ? "s"
                                                                  : ""
                                                              ),
                                                            1
                                                          ),
                                                          w.value.length > 1
                                                            ? (o(),
                                                              i(
                                                                "button",
                                                                {
                                                                  key: 0,
                                                                  type: "button",
                                                                  class:
                                                                    "cabin-remove-btn",
                                                                  onClick: j(
                                                                    (D) =>
                                                                      Bt(P),
                                                                    ["stop"]
                                                                  ),
                                                                  title:
                                                                    "Remove cabin",
                                                                },
                                                                [
                                                                  ...(c[38] ||
                                                                    (c[38] = [
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
                                                                            }
                                                                          ),
                                                                        ],
                                                                        -1
                                                                      ),
                                                                    ])),
                                                                ],
                                                                8,
                                                                Fi
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
                                                              ...(c[39] ||
                                                                (c[39] = [
                                                                  e(
                                                                    "polyline",
                                                                    {
                                                                      points:
                                                                        "6 9 12 15 18 9",
                                                                    },
                                                                    null,
                                                                    -1
                                                                  ),
                                                                ])),
                                                            ],
                                                            2
                                                          )),
                                                        ]),
                                                      ],
                                                      8,
                                                      Ri
                                                    ),
                                                    ke(
                                                      xt,
                                                      { name: "accordion" },
                                                      {
                                                        default: Me(() => [
                                                          y.expanded
                                                            ? (o(),
                                                              i("div", zi, [
                                                                e("div", Ui, [
                                                                  c[40] ||
                                                                    (c[40] = e(
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
                                                                          "Adults"
                                                                        ),
                                                                        e(
                                                                          "div",
                                                                          {
                                                                            class:
                                                                              "muted text-sm",
                                                                          },
                                                                          "Ages 17+"
                                                                        ),
                                                                      ],
                                                                      -1
                                                                    )),
                                                                  e("div", Gi, [
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
                                                                          (D) =>
                                                                            Jt(
                                                                              P,
                                                                              "adults"
                                                                            ),
                                                                      },
                                                                      " − ",
                                                                      8,
                                                                      Ki
                                                                    ),
                                                                    e(
                                                                      "span",
                                                                      Vi,
                                                                      l(
                                                                        y.adults
                                                                      ),
                                                                      1
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
                                                                          (D) =>
                                                                            Tt(
                                                                              P,
                                                                              "adults"
                                                                            ),
                                                                      },
                                                                      " + ",
                                                                      8,
                                                                      qi
                                                                    ),
                                                                  ]),
                                                                ]),
                                                                e("div", Wi, [
                                                                  c[41] ||
                                                                    (c[41] = e(
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
                                                                          "Children"
                                                                        ),
                                                                        e(
                                                                          "div",
                                                                          {
                                                                            class:
                                                                              "muted text-sm",
                                                                          },
                                                                          "Ages 3 - 16"
                                                                        ),
                                                                      ],
                                                                      -1
                                                                    )),
                                                                  e("div", Hi, [
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
                                                                          (D) =>
                                                                            Jt(
                                                                              P,
                                                                              "children"
                                                                            ),
                                                                      },
                                                                      " − ",
                                                                      8,
                                                                      Yi
                                                                    ),
                                                                    e(
                                                                      "span",
                                                                      Ji,
                                                                      l(
                                                                        y.children
                                                                      ),
                                                                      1
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
                                                                          (D) =>
                                                                            Tt(
                                                                              P,
                                                                              "children"
                                                                            ),
                                                                      },
                                                                      " + ",
                                                                      8,
                                                                      ji
                                                                    ),
                                                                  ]),
                                                                ]),
                                                                e(
                                                                  "div",
                                                                  {
                                                                    class:
                                                                      "cabin-note",
                                                                  },
                                                                  " Max " +
                                                                    l(ps) +
                                                                    " guests per cabin "
                                                                ),
                                                              ]))
                                                            : M("", !0),
                                                        ]),
                                                        _: 2,
                                                      },
                                                      1024
                                                    ),
                                                  ]
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                          fe.value
                                            ? (o(),
                                              i(
                                                "button",
                                                {
                                                  key: 0,
                                                  type: "button",
                                                  class: "btn-add-cabin",
                                                  onClick: we,
                                                },
                                                " + Add Another Cabin "
                                              ))
                                            : M("", !0),
                                          e("div", Xi, [
                                            c[42] ||
                                              (c[42] = e(
                                                "span",
                                                null,
                                                "Total:",
                                                -1
                                              )),
                                            e(
                                              "span",
                                              Qi,
                                              l(w.value.length) +
                                                " cabin" +
                                                l(
                                                  w.value.length !== 1
                                                    ? "s"
                                                    : ""
                                                ) +
                                                ", " +
                                                l(ge.value) +
                                                " guest" +
                                                l(ge.value !== 1 ? "s" : ""),
                                              1
                                            ),
                                          ]),
                                        ])),
                                  ]))
                                : (o(),
                                  i("div", Zi, [
                                    c[44] ||
                                      (c[44] = e(
                                        "h3",
                                        { class: "step-title" },
                                        "Check Availability",
                                        -1
                                      )),
                                    c[45] ||
                                      (c[45] = e(
                                        "p",
                                        { class: "results-note" },
                                        " To see if we have availability for your preferred criteria, please click the button below. ",
                                        -1
                                      )),
                                    e("div", { class: "mt-4" }, [
                                      e(
                                        "button",
                                        { class: "btn-primary", onClick: Ct },
                                        " Check now "
                                      ),
                                    ]),
                                    c[46] ||
                                      (c[46] = e(
                                        "div",
                                        {
                                          class: "section-divider",
                                          style: { margin: "1.5rem 0" },
                                        },
                                        null,
                                        -1
                                      )),
                                    c[47] ||
                                      (c[47] = e(
                                        "h4",
                                        { class: "section-title" },
                                        " Speak with a Komodo Cruises Travel Advisor ",
                                        -1
                                      )),
                                    c[48] ||
                                      (c[48] = e(
                                        "p",
                                        { class: "results-note" },
                                        " Need some help to plan your trip? Enquire below to contact one of our Komodo Cruises Travel Advisors. ",
                                        -1
                                      )),
                                    e("div", { class: "mt-4" }, [
                                      e(
                                        "button",
                                        { class: "btn-primary", onClick: rt },
                                        " Enquire now "
                                      ),
                                    ]),
                                  ])),
                              e("div", el, [
                                e("div", tl, [
                                  h.value > 1
                                    ? (o(),
                                      i(
                                        "button",
                                        {
                                          key: 0,
                                          class: "link-muted text-icon-btn",
                                          onClick: je,
                                        },
                                        [
                                          e(
                                            "img",
                                            {
                                              src: he(Kn),
                                              alt: "Previous",
                                              class: "nav-arrow",
                                            },
                                            null,
                                            8,
                                            sl
                                          ),
                                          Q(" " + l(Ie.value), 1),
                                        ]
                                      ))
                                    : M("", !0),
                                  e(
                                    "button",
                                    {
                                      class: "btn-primary text-icon-btn",
                                      onClick: _t,
                                    },
                                    [
                                      Q(l(R.value) + " ", 1),
                                      e(
                                        "img",
                                        {
                                          src: he(Ks),
                                          alt: "Next",
                                          class: "nav-arrow white-filter",
                                        },
                                        null,
                                        8,
                                        nl
                                      ),
                                    ]
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
            }
          ),
          ke(
            xt,
            { name: "toast-slide" },
            {
              default: Me(() => [
                xe.value
                  ? (o(),
                    i("div", al, [
                      c[49] ||
                        (c[49] = e("span", { class: "toast-icon" }, "⚠️", -1)),
                      e("span", ol, l(qe.value), 1),
                    ]))
                  : M("", !0),
              ]),
              _: 1,
            }
          ),
        ])
      );
    },
  },
  Vs = vt(rl, [["__scopeId", "data-v-8118d2af"]]),
  cl = { key: 0, class: "nav-inner plan-mode" },
  ul = { key: 1, class: "nav-inner" },
  dl = { class: "nav-left" },
  vl = { class: "nav-lang" },
  pl = {
    width: "10",
    height: "6",
    viewBox: "0 0 10 6",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "1.2",
    style: { "margin-right": "6px" },
  },
  ml = { key: 0, class: "lang-dropdown" },
  fl = ["onClick"],
  hl = { class: "nav-center" },
  gl = { class: "nav-right" },
  bl = {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "1.5",
    style: { "margin-left": "8px" },
  },
  yl = { key: 0, class: "site-footer mt-16" },
  kl = { class: "footer-inner container text-sm" },
  wl = {
    __name: "App",
    setup(S) {
      const b = Gs(),
        f = Wa(),
        C = m(!1),
        h = m(!1),
        g = m(!1),
        v = m(!1),
        E = m(!1),
        X = m("EN"),
        A = m(!1),
        oe = [
          { code: "EN", label: "English" },
          { code: "ID", label: "Indonesia" },
          { code: "ZH", label: "Chinese" },
          { code: "ES", label: "Spanish" },
          { code: "FR", label: "French" },
        ],
        te = () => {
          A.value = !A.value;
        },
        Z = (ie) => {
          (X.value = ie.code), (A.value = !1);
        },
        q = () => {
          C.value = window.scrollY > window.innerHeight * 0.8;
          const ie = document.querySelectorAll('[data-nav-theme="light"]');
          let O = !1;
          ie.forEach((H) => {
            const le = H.getBoundingClientRect();
            le.top <= 80 && le.bottom >= 80 && (O = !0);
          }),
            (E.value = O);
        },
        W = () => {
          (g.value = !1),
            setTimeout(() => {
              h.value = !0;
            }, 300);
        },
        Se = () => {
          f.path === "/results" ? b.push("/find-reservation") : (v.value = !0);
        },
        Ce = () => {
          (v.value = !1), b.push("/results");
        };
      return (
        Qe(() => {
          window.addEventListener("scroll", q);
        }),
        wt(() => {
          window.removeEventListener("scroll", q);
        }),
        (ie, O) => {
          const H = Wt("router-link"),
            le = Wt("router-view");
          return (
            o(),
            i("div", null, [
              ke(
                io,
                {
                  isOpen: h.value,
                  onClose: O[0] || (O[0] = (ve) => (h.value = !1)),
                },
                null,
                8,
                ["isOpen"]
              ),
              ke(
                Vs,
                {
                  isOpen: v.value,
                  onClose: O[1] || (O[1] = (ve) => (v.value = !1)),
                  onNavigateToResults: Ce,
                },
                null,
                8,
                ["isOpen"]
              ),
              ke(
                vo,
                {
                  isOpen: g.value,
                  onClose: O[2] || (O[2] = (ve) => (g.value = !1)),
                  onOpenSearch: W,
                },
                null,
                8,
                ["isOpen"]
              ),
              e(
                "header",
                {
                  class: B([
                    "nav-container",
                    {
                      "nav-overlay": ie.$route.path === "/",
                      "home-nav": ie.$route.path === "/",
                      scrolled: C.value,
                      "nav-light-theme": E.value,
                      "navbar-result":
                        ie.$route.path === "/results" ||
                        ie.$route.path === "/find-reservation",
                    },
                  ]),
                },
                [
                  ie.$route.meta.planHeader
                    ? (o(),
                      i("nav", cl, [
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
                                  "Plan your trip"
                                ),
                                e(
                                  "span",
                                  { class: "mobile-only" },
                                  "Plan trip"
                                ),
                              ]),
                            ],
                            -1
                          )),
                        ke(
                          H,
                          { class: "link-close close-btn-style", to: "/" },
                          {
                            default: Me(() => [
                              ...(O[5] ||
                                (O[5] = [
                                  e("span", { class: "btn-text" }, "Close", -1),
                                  e("span", { class: "close-icon" }, "âœ•", -1),
                                ])),
                            ]),
                            _: 1,
                          }
                        ),
                      ]))
                    : (o(),
                      i("nav", ul, [
                        e("div", dl, [
                          e(
                            "span",
                            {
                              class: "nav-menu",
                              onClick: O[3] || (O[3] = (ve) => (g.value = !0)),
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
                                    -1
                                  ),
                                ])),
                            ]
                          ),
                          e(
                            "div",
                            {
                              class: "nav-lang-wrapper",
                              onClick: te,
                              title: "Select Language",
                            },
                            [
                              e("span", vl, [
                                (o(),
                                i("svg", pl, [
                                  ...(O[8] ||
                                    (O[8] = [
                                      e(
                                        "path",
                                        { d: "M1 1L5 5L9 1" },
                                        null,
                                        -1
                                      ),
                                    ])),
                                ])),
                                Q(" " + l(X.value), 1),
                              ]),
                              A.value
                                ? (o(),
                                  i("div", ml, [
                                    (o(),
                                    i(
                                      V,
                                      null,
                                      se(oe, (ve) =>
                                        e(
                                          "div",
                                          {
                                            key: ve.code,
                                            class: "lang-option",
                                            onClick: j((F) => Z(ve), ["stop"]),
                                          },
                                          l(ve.label),
                                          9,
                                          fl
                                        )
                                      ),
                                      64
                                    )),
                                  ]))
                                : M("", !0),
                            ]
                          ),
                        ]),
                        e("div", hl, [
                          ke(
                            H,
                            { to: "/", class: "brand-link" },
                            {
                              default: Me(() => [
                                ...(O[9] ||
                                  (O[9] = [
                                    e(
                                      "span",
                                      { class: "brand-chip" },
                                      "KOMODO CRUISES",
                                      -1
                                    ),
                                  ])),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        e("div", gl, [
                          e(
                            "button",
                            {
                              class: "nav-text-item nav-plan-item",
                              onClick: Se,
                              style: { "white-space": "nowrap" },
                            },
                            [
                              ie.$route.path === "/results"
                                ? (o(),
                                  i(
                                    V,
                                    { key: 0 },
                                    [Q(" FIND RESERVATION ")],
                                    64
                                  ))
                                : (o(),
                                  i(
                                    V,
                                    { key: 1 },
                                    [
                                      O[10] ||
                                        (O[10] = e(
                                          "span",
                                          { class: "desktop-only" },
                                          "PLAN YOUR TRIP",
                                          -1
                                        )),
                                      O[11] ||
                                        (O[11] = e(
                                          "span",
                                          { class: "mobile-only" },
                                          "PLAN TRIP",
                                          -1
                                        )),
                                    ],
                                    64
                                  )),
                            ]
                          ),
                          O[15] ||
                            (O[15] = e(
                              "span",
                              { class: "nav-text-item" },
                              "LOGIN",
                              -1
                            )),
                          e(
                            "span",
                            {
                              class: "nav-search",
                              onClick: O[4] || (O[4] = (ve) => (h.value = !0)),
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
                                    -1
                                  ),
                                ])),
                            ]
                          ),
                          ie.$route.path !== "/" &&
                          ie.$route.path !== "/results" &&
                          ie.$route.path !== "/find-reservation"
                            ? (o(),
                              Yt(
                                H,
                                { key: 0, to: "/plan", class: "btn-book-pill" },
                                {
                                  default: Me(() => [
                                    O[14] || (O[14] = Q(" BOOK NOW ", -1)),
                                    (o(),
                                    i("svg", bl, [
                                      ...(O[13] ||
                                        (O[13] = [
                                          e(
                                            "path",
                                            {
                                              d: "M2 20h20M12 4v12m0 0l-4-4m4 4l4-4",
                                            },
                                            null,
                                            -1
                                          ),
                                        ])),
                                    ])),
                                  ]),
                                  _: 1,
                                }
                              ))
                            : M("", !0),
                        ]),
                      ])),
                ],
                2
              ),
              ke(le),
              !ie.$route.meta.planHeader &&
              ie.$route.path !== "/" &&
              ie.$route.path !== "/results"
                ? (o(),
                  i("footer", yl, [
                    e(
                      "div",
                      kl,
                      " Â© " + l(new Date().getFullYear()) + " Komodo Cruises ",
                      1
                    ),
                  ]))
                : M("", !0),
            ])
          );
        }
      );
    },
  },
  _l = "" + new URL("Komodo-siX32_CS.mp4", import.meta.url).href,
  Cl = "" + new URL("dest-komodo-BZfQdiBM.png", import.meta.url).href,
  $l = "" + new URL("dest-labuan-bajo-H07b2mBM.png", import.meta.url).href,
  Sl = "" + new URL("dest-togean-DN15mR21.png", import.meta.url).href,
  xl = { class: "destination-carousel" },
  Dl = { class: "carousel-container" },
  Tl = ["src", "alt"],
  Al = { class: "carousel-content" },
  Il = { class: "carousel-content-left" },
  Nl = { class: "carousel-location" },
  Ml = { class: "carousel-title" },
  El = { class: "carousel-content-right" },
  Rl = { class: "carousel-description" },
  Pl = ["href"],
  Ol = { class: "carousel-dots" },
  Ll = ["onClick", "aria-label"],
  Rn = 101,
  Pn = 50,
  Bl = {
    __name: "DestinationCarousel",
    setup(S) {
      const b = [
          {
            location: "INDONESIA",
            title: "Komodo National Park",
            description:
              "Home to the legendary Komodo dragons and pristine marine life. Discover ancient wilderness and untouched natural beauty.",
            ctaText: "EXPLORE THE PARK",
            ctaLink: "#",
            image: Cl,
          },
          {
            location: "INDONESIA",
            title: "Labuan Bajo",
            description:
              "Gateway to the Komodo Islands with stunning sunsets and vibrant culture. Experience the perfect blend of adventure and relaxation.",
            ctaText: "DISCOVER LABUAN BAJO",
            ctaLink: "#",
            image: $l,
          },
          {
            location: "INDONESIA",
            title: "Togean Islands",
            description:
              "Remote paradise with crystal-clear waters and untouched coral reefs. A hidden gem for those seeking true escape.",
            ctaText: "VISIT TOGEAN",
            ctaLink: "#",
            image: Sl,
          },
        ],
        f = b.length,
        C = x(() => {
          const G = [];
          for (let w = 0; w < Rn; w++)
            b.forEach((ge, fe) => {
              G.push({ ...ge, virtualKey: `set${w}-${fe}`, originalIndex: fe });
            });
          return G;
        }),
        h = Math.floor(Rn / 2) * f,
        g = m(h),
        v = m(typeof window < "u" ? window.innerWidth : 1200),
        E = x(() => ((g.value % f) + f) % f),
        X = x(() => b[E.value]),
        A = x(() =>
          v.value <= 480
            ? v.value * 0.765
            : v.value <= 768
            ? v.value * 0.675
            : Math.min(v.value * 0.5, 750)
        ),
        oe = x(() => (v.value <= 768 ? 10 : 20)),
        te = x(() => {
          const G = A.value + oe.value,
            w = v.value / 2,
            ge = A.value / 2;
          return g.value * G - w + ge;
        });
      function Z(G) {
        return G === g.value;
      }
      function q(G) {
        return G === g.value - 1 || G === g.value + 1;
      }
      function W() {
        g.value++;
      }
      function Se() {
        g.value--;
      }
      function Ce(G) {
        const w = E.value,
          ge = G - w;
        ge !== 0 && (g.value += ge);
      }
      function ie() {
        v.value = window.innerWidth;
      }
      const O = m(0),
        H = m(0);
      function le(G) {
        O.value = G.changedTouches[0].screenX;
      }
      function ve(G) {
        H.value = G.changedTouches[0].screenX;
      }
      function F() {
        const G = O.value - H.value,
          w = G > Pn,
          ge = G < -Pn;
        w ? W() : ge && Se(), (O.value = 0), (H.value = 0);
      }
      return (
        Qe(() => {
          window.addEventListener("resize", ie);
        }),
        wt(() => {
          window.removeEventListener("resize", ie);
        }),
        (G, w) => (
          o(),
          i("section", xl, [
            w[3] ||
              (w[3] = e(
                "h2",
                { class: "carousel-heading" },
                " Destinations. Where our passion meets your purpose. ",
                -1
              )),
            w[4] ||
              (w[4] = e(
                "p",
                { class: "carousel-subheading" },
                [
                  e("a", { href: "#" }, [
                    Q("WHERE NEXT: VIEW ALL DESTINATIONS "),
                    e("span", null, "→"),
                  ]),
                ],
                -1
              )),
            e("div", Dl, [
              e(
                "button",
                {
                  class: "carousel-nav carousel-nav-left",
                  onClick: Se,
                  "aria-label": "Previous destination",
                },
                [
                  ...(w[0] ||
                    (w[0] = [
                      e("img", { src: Kn, alt: "Previous" }, null, -1),
                    ])),
                ]
              ),
              e(
                "div",
                {
                  class: "carousel-viewport",
                  onTouchstart: le,
                  onTouchmove: ve,
                  onTouchend: F,
                },
                [
                  e(
                    "div",
                    {
                      class: "carousel-track",
                      style: Ht({ transform: `translateX(-${te.value}px)` }),
                    },
                    [
                      (o(!0),
                      i(
                        V,
                        null,
                        se(
                          C.value,
                          (ge, fe) => (
                            o(),
                            i(
                              "div",
                              {
                                key: ge.virtualKey,
                                class: B([
                                  "carousel-slide",
                                  {
                                    "active-slide": Z(fe),
                                    "side-slide": q(fe),
                                  },
                                ]),
                                style: Ht({
                                  width: `${A.value}px`,
                                  marginRight: `${oe.value}px`,
                                }),
                              },
                              [
                                e(
                                  "img",
                                  {
                                    src: ge.image,
                                    alt: ge.title,
                                    class: "slide-image",
                                  },
                                  null,
                                  8,
                                  Tl
                                ),
                              ],
                              6
                            )
                          )
                        ),
                        128
                      )),
                    ],
                    4
                  ),
                ],
                32
              ),
              e(
                "button",
                {
                  class: "carousel-nav carousel-nav-right",
                  onClick: W,
                  "aria-label": "Next destination",
                },
                [
                  ...(w[1] ||
                    (w[1] = [e("img", { src: Ks, alt: "Next" }, null, -1)])),
                ]
              ),
            ]),
            e("div", Al, [
              e("div", Il, [
                e("span", Nl, l(X.value.location), 1),
                e("h3", Ml, l(X.value.title), 1),
              ]),
              e("div", El, [
                e("p", Rl, l(X.value.description), 1),
                e(
                  "a",
                  { href: X.value.ctaLink, class: "carousel-cta" },
                  [
                    Q(l(X.value.ctaText) + " ", 1),
                    w[2] || (w[2] = e("span", null, "→", -1)),
                  ],
                  8,
                  Pl
                ),
              ]),
            ]),
            e("div", Ol, [
              (o(),
              i(
                V,
                null,
                se(b, (ge, fe) =>
                  e(
                    "button",
                    {
                      key: fe,
                      class: B(["carousel-dot", { active: fe === E.value }]),
                      onClick: (xe) => Ce(fe),
                      "aria-label": `Go to slide ${fe + 1}`,
                    },
                    null,
                    10,
                    Ll
                  )
                ),
                64
              )),
            ]),
          ])
        )
      );
    },
  },
  Fl = vt(Bl, [["__scopeId", "data-v-9920d604"]]),
  zl = "" + new URL("ship-phinisi-voyager-D5TceIuH.png", import.meta.url).href,
  Ul = "" + new URL("ship-ocean-explorer-Yg5A13gl.png", import.meta.url).href,
  Gl = "" + new URL("ship-coral-queen-DLsN9IeK.png", import.meta.url).href,
  Kl = "" + new URL("ship-sunset-cruiser-B6Je6v6A.png", import.meta.url).href,
  Vl = "" + new URL("ship-island-hopper-zr6jDabx.png", import.meta.url).href,
  ql = "" + new URL("ship-reef-dancer-w9AhwkP8.png", import.meta.url).href,
  Wl = { class: "ships-carousel" },
  Hl = { class: "ships-container" },
  Yl = { class: "ships-filters" },
  Jl = ["onClick"],
  jl = { class: "ships-slider-wrapper" },
  Xl = { class: "ships-slider-container" },
  Ql = ["disabled"],
  Zl = { class: "ship-image-wrapper" },
  er = ["src", "alt"],
  tr = { class: "ship-info" },
  sr = { class: "ship-location" },
  nr = { class: "ship-name" },
  ar = ["disabled"],
  On = 50,
  or = {
    __name: "ShipsCarousel",
    setup(S) {
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
            image: zl,
          },
          {
            id: 2,
            name: "Ocean Explorer",
            destination: "komodo",
            locationName: "Komodo National Park",
            image: Ul,
          },
          {
            id: 3,
            name: "Coral Queen",
            destination: "labuan-bajo",
            locationName: "Labuan Bajo",
            image: Gl,
          },
          {
            id: 4,
            name: "Sunset Cruiser",
            destination: "labuan-bajo",
            locationName: "Labuan Bajo",
            image: Kl,
          },
          {
            id: 5,
            name: "Island Hopper",
            destination: "togean",
            locationName: "Togean Islands",
            image: Vl,
          },
          {
            id: 6,
            name: "Reef Dancer",
            destination: "togean",
            locationName: "Togean Islands",
            image: ql,
          },
        ],
        C = m("all"),
        h = m(0),
        g = m(typeof window < "u" ? window.innerWidth : 1200),
        v = x(() =>
          C.value === "all" ? f : f.filter((F) => F.destination === C.value)
        ),
        E = x(() => {
          if (g.value <= 640) return g.value * 0.75;
          if (g.value <= 900) return 300;
          const F = Math.min(g.value - 80, 1400),
            G = 32 * 2;
          return (F - G) / 3;
        }),
        X = x(() => (g.value <= 640 ? 16 : 32)),
        A = x(() => h.value * (E.value + X.value)),
        oe = x(() => (g.value <= 640 ? 1 : g.value <= 900 ? 2 : 3)),
        te = x(() => v.value.length > oe.value),
        Z = x(() => Math.max(0, v.value.length - oe.value));
      function q(F) {
        (C.value = F), (h.value = 0);
      }
      function W() {
        h.value < Z.value && h.value++;
      }
      function Se() {
        h.value > 0 && h.value--;
      }
      function Ce() {
        g.value = window.innerWidth;
      }
      const ie = m(0),
        O = m(0);
      function H(F) {
        ie.value = F.changedTouches[0].screenX;
      }
      function le(F) {
        O.value = F.changedTouches[0].screenX;
      }
      function ve() {
        const F = ie.value - O.value,
          G = F > On,
          w = F < -On;
        G ? W() : w && Se(), (ie.value = 0), (O.value = 0);
      }
      return (
        Qe(() => {
          window.addEventListener("resize", Ce);
        }),
        wt(() => {
          window.removeEventListener("resize", Ce);
        }),
        (F, G) => (
          o(),
          i("section", Wl, [
            e("div", Hl, [
              G[0] ||
                (G[0] = e(
                  "div",
                  { class: "ships-header" },
                  [
                    e(
                      "h2",
                      { class: "ships-heading" },
                      "Explore our fleet collection"
                    ),
                    e(
                      "p",
                      { class: "ships-description" },
                      " Our fleet of luxury vessels are designed for intimate journeys through Indonesia's most spectacular waters. Each ship offers unique experiences, from traditional phinisi craftsmanship to modern expedition yachts, ensuring unforgettable adventures across the archipelago. "
                    ),
                  ],
                  -1
                )),
              e("div", Yl, [
                (o(),
                i(
                  V,
                  null,
                  se(b, (w) =>
                    e(
                      "button",
                      {
                        key: w.id,
                        class: B(["filter-btn", { active: C.value === w.id }]),
                        onClick: (ge) => q(w.id),
                      },
                      l(w.name),
                      11,
                      Jl
                    )
                  ),
                  64
                )),
              ]),
            ]),
            e("div", jl, [
              e("div", Xl, [
                te.value
                  ? (o(),
                    i(
                      "button",
                      {
                        key: 0,
                        class: "ships-nav ships-nav-left",
                        onClick: Se,
                        disabled: h.value === 0,
                        "aria-label": "Previous ships",
                      },
                      [
                        ...(G[1] ||
                          (G[1] = [
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
                              -1
                            ),
                          ])),
                      ],
                      8,
                      Ql
                    ))
                  : M("", !0),
                e(
                  "div",
                  {
                    class: "ships-viewport",
                    onTouchstart: H,
                    onTouchmove: le,
                    onTouchend: ve,
                  },
                  [
                    ke(
                      xt,
                      { name: "slide-up", mode: "out-in" },
                      {
                        default: Me(() => [
                          (o(),
                          i(
                            "div",
                            { class: "ships-track-wrapper", key: C.value },
                            [
                              e(
                                "div",
                                {
                                  class: "ships-track",
                                  style: Ht({
                                    transform: `translateX(-${A.value}px)`,
                                  }),
                                },
                                [
                                  (o(!0),
                                  i(
                                    V,
                                    null,
                                    se(
                                      v.value,
                                      (w) => (
                                        o(),
                                        i(
                                          "div",
                                          {
                                            key: w.id,
                                            class: "ship-card",
                                            style: Ht({
                                              width: `${E.value}px`,
                                              marginRight: `${X.value}px`,
                                            }),
                                          },
                                          [
                                            e("div", Zl, [
                                              e(
                                                "img",
                                                {
                                                  src: w.image,
                                                  alt: w.name,
                                                  class: "ship-image",
                                                },
                                                null,
                                                8,
                                                er
                                              ),
                                            ]),
                                            e("div", tr, [
                                              e(
                                                "span",
                                                sr,
                                                l(w.locationName),
                                                1
                                              ),
                                              e("h3", nr, l(w.name), 1),
                                            ]),
                                          ],
                                          4
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ],
                                4
                              ),
                            ]
                          )),
                        ]),
                        _: 1,
                      }
                    ),
                  ],
                  32
                ),
                te.value
                  ? (o(),
                    i(
                      "button",
                      {
                        key: 1,
                        class: "ships-nav ships-nav-right",
                        onClick: W,
                        disabled: h.value >= Z.value,
                        "aria-label": "Next ships",
                      },
                      [
                        ...(G[2] ||
                          (G[2] = [
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
                              -1
                            ),
                          ])),
                      ],
                      8,
                      ar
                    ))
                  : M("", !0),
              ]),
            ]),
          ])
        )
      );
    },
  },
  ir = vt(or, [["__scopeId", "data-v-82c1bf13"]]),
  lr = "" + new URL("activity-snorkeling-B8hwZN3L.png", import.meta.url).href,
  rr = "" + new URL("activity-relaxing-DX-9w-xF.png", import.meta.url).href,
  cr = "" + new URL("activity-hiking-chrel6lc.png", import.meta.url).href,
  ur = "" + new URL("activity-community-B7vG2Gb2.png", import.meta.url).href,
  dr = "" + new URL("activity-wildlife-CZn9_LiH.png", import.meta.url).href,
  vr = "" + new URL("activity-beach-oc9adSOS.png", import.meta.url).href,
  pr = "" + new URL("activity-stargazing-BA4hSomZ.png", import.meta.url).href,
  mr = { class: "activities-carousel", "data-nav-theme": "light" },
  fr = { class: "activities-slider" },
  hr = ["src", "alt"],
  gr = { class: "activity-info" },
  br = { class: "activity-title" },
  yr = { class: "activity-desc" },
  kr = { class: "activities-dots" },
  wr = ["onClick", "aria-label"],
  _r = ["disabled"],
  Cr = ["disabled"],
  Ln = 50,
  $r = {
    __name: "ActivitiesCarousel",
    setup(S) {
      const b = [
          {
            title: "Snorkeling & Diving",
            description: "Explore vibrant coral reefs and marine life",
            image: lr,
          },
          {
            title: "Relaxing & Sunbathing",
            description: "Unwind on pristine decks and secluded beaches",
            image: rr,
          },
          {
            title: "Hiking & Viewpoints",
            description: "Trek to breathtaking panoramic vistas",
            image: cr,
          },
          {
            title: "Local Community Immersion",
            description: "Connect with authentic Indonesian culture",
            image: ur,
          },
          {
            title: "Wildlife Spotting",
            description: "Encounter Komodo dragons in their habitat",
            image: dr,
          },
          {
            title: "Beach Exploration",
            description: "Discover hidden coves and pristine shores",
            image: vr,
          },
          {
            title: "Stargazing",
            description: "Marvel at the Milky Way from open waters",
            image: pr,
          },
        ],
        f = m(0),
        C = m(typeof window < "u" ? window.innerWidth : 1200),
        h = m(null),
        g = x(() => (C.value <= 768 ? C.value : C.value * 0.35)),
        v = x(() => (C.value <= 768 ? 0 : f.value * g.value)),
        E = x(() => (C.value <= 768 ? b.length - 1 : b.length - 2));
      function X() {
        f.value < E.value && f.value++;
      }
      function A() {
        f.value > 0 && f.value--;
      }
      function oe(H) {
        f.value = Math.min(H, E.value);
      }
      function te(H) {
        if (C.value <= 768 && h.value) {
          const le = C.value;
          h.value.scrollTo({ left: H * le, behavior: "smooth" });
        } else oe(H);
      }
      function Z() {
        C.value = window.innerWidth;
      }
      const q = m(0),
        W = m(0);
      function Se(H) {
        C.value > 768 && (q.value = H.changedTouches[0].screenX);
      }
      function Ce(H) {
        C.value > 768 && (W.value = H.changedTouches[0].screenX);
      }
      function ie() {
        if (C.value > 768) {
          const H = q.value - W.value,
            le = H > Ln,
            ve = H < -Ln;
          le ? X() : ve && A(), (q.value = 0), (W.value = 0);
        }
      }
      function O(H) {
        if (C.value <= 768) {
          const le = H.target.scrollLeft,
            ve = C.value,
            F = Math.round(le / ve);
          f.value = F;
        }
      }
      return (
        Qe(() => {
          window.addEventListener("resize", Z);
        }),
        wt(() => {
          window.removeEventListener("resize", Z);
        }),
        (H, le) => (
          o(),
          i("section", mr, [
            le[2] ||
              (le[2] = e(
                "div",
                { class: "activities-content" },
                [
                  e(
                    "h2",
                    { class: "activities-heading" },
                    "What to experience?"
                  ),
                  e(
                    "p",
                    { class: "activities-description" },
                    " From underwater adventures to peaceful sunsets, our carefully curated activities invite you to discover the magic of Indonesia's hidden treasures. "
                  ),
                  e(
                    "button",
                    { class: "activities-cta" },
                    "Explore activities"
                  ),
                ],
                -1
              )),
            e("div", fr, [
              e(
                "div",
                {
                  class: "activities-track",
                  ref_key: "trackRef",
                  ref: h,
                  onScroll: O,
                  onTouchstart: Se,
                  onTouchmove: Ce,
                  onTouchend: ie,
                  style: Ht({ transform: `translateX(-${v.value}px)` }),
                },
                [
                  (o(),
                  i(
                    V,
                    null,
                    se(b, (ve, F) =>
                      e(
                        "div",
                        {
                          key: F,
                          class: B([
                            "activity-slide",
                            { active: F === f.value },
                          ]),
                        },
                        [
                          e(
                            "img",
                            {
                              src: ve.image,
                              alt: ve.title,
                              class: "activity-image",
                            },
                            null,
                            8,
                            hr
                          ),
                          e("div", gr, [
                            e("h3", br, l(ve.title), 1),
                            e("p", yr, l(ve.description), 1),
                          ]),
                        ],
                        2
                      )
                    ),
                    64
                  )),
                ],
                36
              ),
            ]),
            e("div", kr, [
              (o(),
              i(
                V,
                null,
                se(b, (ve, F) =>
                  e(
                    "button",
                    {
                      key: F,
                      class: B(["activity-dot", { active: F === f.value }]),
                      onClick: (G) => te(F),
                      "aria-label": `Go to ${b[F].title}`,
                    },
                    null,
                    10,
                    wr
                  )
                ),
                64
              )),
            ]),
            le[3] ||
              (le[3] = e(
                "button",
                { class: "activities-cta mobile-only" },
                "Explore activities",
                -1
              )),
            e(
              "button",
              {
                class: "activities-nav activities-nav-left",
                onClick: A,
                disabled: f.value === 0,
              },
              [
                ...(le[0] ||
                  (le[0] = [
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
                      -1
                    ),
                  ])),
              ],
              8,
              _r
            ),
            e(
              "button",
              {
                class: "activities-nav activities-nav-right",
                onClick: X,
                disabled: f.value >= E.value,
              },
              [
                ...(le[1] ||
                  (le[1] = [
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
                      -1
                    ),
                  ])),
              ],
              8,
              Cr
            ),
          ])
        )
      );
    },
  },
  Sr = vt($r, [["__scopeId", "data-v-9abd6fc3"]]),
  xr = "" + new URL("home-landscape-wPTuluZw.png", import.meta.url).href,
  Dr = "" + new URL("home-conservation-DjIfDkiI.png", import.meta.url).href,
  Tr = "" + new URL("home-culture-DX4UewC_.png", import.meta.url).href,
  Ar = "" + new URL("home-legacy-Dkg62GSZ.png", import.meta.url).href,
  Ir = ["muted"],
  Nr = ["aria-label"],
  Mr = {
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
  Er = {
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
  Rr = { class: "komodo-section" },
  Pr = { class: "komodo-content" },
  Or = ["src"],
  Lr = { class: "komodo-section section-alt" },
  Br = { class: "komodo-content reverse" },
  Fr = ["src"],
  zr = { class: "komodo-section" },
  Ur = { class: "komodo-content" },
  Gr = ["src"],
  Kr = { class: "komodo-section section-alt" },
  Vr = { class: "komodo-content reverse" },
  qr = ["src"],
  Wr = { class: "home-footer" },
  Hr = { class: "home-footer-inner container" },
  Yr = { class: "hf-top" },
  Jr = { class: "hf-links" },
  jr = { class: "hf-bottom" },
  Xr = { class: "hf-copyright" },
  Qr = {
    __name: "Home",
    setup(S) {
      const b = Gs(),
        f = m(!1),
        C = m(!0),
        h = m(null),
        g = m(null),
        v = m(null),
        E = m(null),
        X = m(null),
        A = m(null),
        oe = m(null),
        te = m(null),
        Z = m(null),
        q = m(null);
      let W = null;
      function Se() {
        [
          { container: v.value, img: E.value },
          { container: X.value, img: A.value },
          { container: oe.value, img: te.value },
          { container: Z.value, img: q.value },
        ].forEach((w) => {
          if (!w.container || !w.img) return;
          const ge = w.container.getBoundingClientRect(),
            fe = window.innerHeight;
          if (ge.top < fe && ge.bottom > 0) {
            const xe = fe / 2 - (ge.top + ge.height / 2),
              qe = 0.15;
            w.img.style.transform = `translateY(${xe * qe}px)`;
          }
        });
      }
      let Ce = !1;
      function ie() {
        Ce ||
          (window.requestAnimationFrame(() => {
            Se(), (Ce = !1);
          }),
          (Ce = !0));
      }
      function O() {
        (C.value = !C.value),
          !C.value && h.value && h.value.play().catch(() => {});
      }
      function H(G) {
        G.forEach((w) => {
          !w.isIntersecting && !C.value && (C.value = !0);
        });
      }
      Qe(() => {
        (W = new IntersectionObserver(H, { threshold: 0.1 })),
          g.value && W.observe(g.value),
          window.addEventListener("scroll", ie),
          Se();
      }),
        wt(() => {
          window.removeEventListener("scroll", ie), W && W.disconnect();
        });
      function le() {
        f.value = !0;
      }
      function ve() {
        f.value = !1;
      }
      function F() {
        (f.value = !1), b.push("/results");
      }
      return (G, w) => (
        o(),
        i(
          V,
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
                    ...(w[0] ||
                      (w[0] = [
                        e("source", { src: _l, type: "video/mp4" }, null, -1),
                      ])),
                  ],
                  8,
                  Ir
                ),
                w[3] ||
                  (w[3] = e(
                    "div",
                    null,
                    [
                      e("h1", { class: "hero-title" }, "Shores of Wonder"),
                      e(
                        "p",
                        { class: "hero-sub" },
                        " Embark on an exclusive voyage through the Komodo Islands. "
                      ),
                    ],
                    -1
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
                        i("svg", Mr, [
                          ...(w[1] ||
                            (w[1] = [
                              e(
                                "path",
                                { d: "M11 5L6 9H2v6h4l5 4V5z" },
                                null,
                                -1
                              ),
                              e(
                                "line",
                                { x1: "23", y1: "9", x2: "17", y2: "15" },
                                null,
                                -1
                              ),
                              e(
                                "line",
                                { x1: "17", y1: "9", x2: "23", y2: "15" },
                                null,
                                -1
                              ),
                            ])),
                        ]))
                      : (o(),
                        i("svg", Er, [
                          ...(w[2] ||
                            (w[2] = [
                              e(
                                "path",
                                { d: "M11 5L6 9H2v6h4l5 4V5z" },
                                null,
                                -1
                              ),
                              e(
                                "path",
                                {
                                  d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07",
                                },
                                null,
                                -1
                              ),
                            ])),
                        ])),
                  ],
                  8,
                  Nr
                ),
              ],
              512
            ),
            ke(Fl),
            e("section", Rr, [
              e("div", Pr, [
                w[5] ||
                  (w[5] = e(
                    "div",
                    { class: "komodo-text" },
                    [
                      e(
                        "h2",
                        { class: "komodo-heading" },
                        " A golden thread throughout every Komodo Cruises experience is a deep reverence for the wild and its power to heal. "
                      ),
                      e(
                        "p",
                        { class: "komodo-paragraph" },
                        " Our phinisi vessels and curated voyages are designed to offer guests the freedom to reflect, inviting in wonder and wholeness. "
                      ),
                    ],
                    -1
                  )),
                e(
                  "div",
                  { class: "komodo-media", ref_key: "mediaRef1", ref: v },
                  [
                    e(
                      "img",
                      {
                        src: he(xr),
                        alt: "Komodo landscape",
                        loading: "lazy",
                        ref_key: "imgRef1",
                        ref: E,
                      },
                      null,
                      8,
                      Or
                    ),
                    w[4] ||
                      (w[4] = e(
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
                            [e("polygon", { points: "5,3 19,12 5,21" })]
                          ),
                        ],
                        -1
                      )),
                  ],
                  512
                ),
              ]),
            ]),
            e("section", Lr, [
              e("div", Br, [
                w[6] ||
                  (w[6] = e(
                    "div",
                    { class: "komodo-text" },
                    [
                      e(
                        "h2",
                        { class: "komodo-heading" },
                        " Dedicated to environmentally conscious hospitality and sustainable conservation since 2015. "
                      ),
                      e(
                        "p",
                        { class: "komodo-paragraph" },
                        " Join us in our love for the natural world, to be part of something meaningful and bigger than ourselves. "
                      ),
                    ],
                    -1
                  )),
                e(
                  "div",
                  { class: "komodo-media", ref_key: "mediaRef2", ref: X },
                  [
                    e(
                      "img",
                      {
                        src: he(Dr),
                        alt: "Conservation efforts",
                        loading: "lazy",
                        ref_key: "imgRef2",
                        ref: A,
                      },
                      null,
                      8,
                      Fr
                    ),
                  ],
                  512
                ),
              ]),
            ]),
            e("section", zr, [
              e("div", Ur, [
                w[7] ||
                  (w[7] = e(
                    "div",
                    { class: "komodo-text" },
                    [
                      e(
                        "h2",
                        { class: "komodo-heading" },
                        "Telling Komodo's stories."
                      ),
                      e(
                        "p",
                        { class: "komodo-subheading" },
                        ' Komodo Cruises means "Place of Dragons" in local lore. '
                      ),
                      e(
                        "p",
                        { class: "komodo-paragraph" },
                        " Our people share their passion for Indonesia's natural spaces and rich cultures, bringing you closer to both through stories and experiences. "
                      ),
                    ],
                    -1
                  )),
                e(
                  "div",
                  { class: "komodo-media", ref_key: "mediaRef3", ref: oe },
                  [
                    e(
                      "img",
                      {
                        src: he(Tr),
                        alt: "Komodo stories",
                        loading: "lazy",
                        ref_key: "imgRef3",
                        ref: te,
                      },
                      null,
                      8,
                      Gr
                    ),
                  ],
                  512
                ),
              ]),
            ]),
            e("section", Kr, [
              e("div", Vr, [
                w[8] ||
                  (w[8] = Pe(
                    '<div class="komodo-text"><p class="komodo-subheading">A legacy unfolds</p><h2 class="komodo-heading"> It started in 2015 with a simple wooden boat and a deep passion for the ocean. </h2><p class="komodo-paragraph"> A legacy unfolded over decades, inspired by family values and a purpose to offer profound wildlife encounters. </p><div style="margin-top:1.5rem;"><button class="hero-cta" style="color:#333;border:1px solid rgba(0, 0, 0, 0.2);background:transparent;padding:0.8rem 2rem;font-size:0.95rem;text-transform:uppercase;letter-spacing:0.05em;"> Our Story </button></div></div>',
                    1
                  )),
                e(
                  "div",
                  { class: "komodo-media", ref_key: "mediaRef4", ref: Z },
                  [
                    e(
                      "img",
                      {
                        src: he(Ar),
                        alt: "Our story",
                        loading: "lazy",
                        ref_key: "imgRef4",
                        ref: q,
                      },
                      null,
                      8,
                      qr
                    ),
                  ],
                  512
                ),
              ]),
            ]),
            ke(Sr),
            ke(ir),
            e("footer", Wr, [
              e("div", Hr, [
                e("div", Yr, [
                  w[12] ||
                    (w[12] = e(
                      "div",
                      { class: "hf-brand" },
                      [
                        e("div", { class: "hf-logo" }, "KOMODO CRUISES"),
                        e(
                          "div",
                          { class: "hf-copy" },
                          "Rare journeys across the Komodo Islands."
                        ),
                      ],
                      -1
                    )),
                  e("nav", Jr, [
                    e(
                      "a",
                      { href: "#", onClick: j(le, ["prevent"]) },
                      "Plan your trip"
                    ),
                    w[9] || (w[9] = e("a", { href: "#" }, "Experiences", -1)),
                    w[10] || (w[10] = e("a", { href: "#" }, "Our story", -1)),
                    w[11] || (w[11] = e("a", { href: "#" }, "Contact", -1)),
                  ]),
                  w[13] ||
                    (w[13] = Pe(
                      '<div class="hf-contact"><div class="hf-contact-title">Contact Us</div><div class="hf-contact-phone"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><a href="tel:+6285282296450">+62 852-8229-6450</a></div><div class="hf-contact-address"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>Graha Permata Pancoran, Jl. KH. Guru Amin Blok A5, Pancoran, Jakarta Selatan 12780</span></div></div>',
                      1
                    )),
                ]),
                e("div", jr, [
                  e(
                    "div",
                    Xr,
                    " © " +
                      l(new Date().getFullYear()) +
                      " Komodo Cruises | PT CANARD MONEY INDONESIA ",
                    1
                  ),
                  w[14] ||
                    (w[14] = e(
                      "div",
                      { class: "hf-disclaimer" },
                      " All voyages subject to weather and park regulations. ",
                      -1
                    )),
                ]),
              ]),
            ]),
            ke(
              Vs,
              { isOpen: f.value, onClose: ve, onNavigateToResults: F },
              null,
              8,
              ["isOpen"]
            ),
          ],
          64
        )
      );
    },
  },
  Zr = "https://komodo-cruises-production-0c52.up.railway.app";
async function ec(S) {
  try {
    const b = await fetch(`${Zr}/api/create-invoice`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: S.amount,
          payerEmail: S.payerEmail,
          description: S.description,
          customerName: S.customerName,
          customerPhone: S.customerPhone,
          items: S.items,
          successRedirectUrl:
            S.successRedirectUrl || `${window.location.origin}/payment-success`,
          failureRedirectUrl:
            S.failureRedirectUrl || `${window.location.origin}/payment-failed`,
        }),
      }),
      f = await b.json();
    if (!b.ok) throw new Error(f.message || "Failed to create invoice");
    return f;
  } catch (b) {
    throw (console.error("Error creating Xendit invoice:", b), b);
  }
}
function tc(S) {
  if (S) window.location.href = S;
  else throw new Error("Invoice URL is required");
}
function St(S) {
  if (!S) return 0;
  if (typeof S == "number") return S;
  const b = String(S)
    .replace(/[^\d.,]/g, "")
    .replace(/\./g, "")
    .replace(/,/g, "");
  return parseInt(b) || 0;
}
const sc = { class: "results-wrap" },
  nc = { key: 0, class: "simple-loader" },
  ac = { key: 1, class: "results-container" },
  oc = { class: "mobile-filter-summary" },
  ic = { class: "filter-summary-content" },
  lc = { class: "filter-summary-row" },
  rc = { class: "filter-summary-item" },
  cc = { class: "filter-summary-item" },
  uc = { class: "results-layout" },
  dc = { class: "results-main" },
  vc = { key: 0, class: "error-state" },
  pc = { class: "error-message" },
  mc = { key: 1 },
  fc = { class: "results-intro" },
  hc = { key: 0, class: "success-message" },
  gc = { key: 1, class: "no-availability" },
  bc = { key: 0, class: "results-controls" },
  yc = { class: "results-controls-left" },
  kc = ["aria-expanded"],
  wc = ["src"],
  _c = ["onClick"],
  Cc = { class: "results-controls-right" },
  $c = { class: "results-count" },
  Sc = { class: "ship-selection-container" },
  xc = { class: "ship-selection-header" },
  Dc = { class: "ship-selection-subtitle" },
  Tc = { class: "ship-selection-grid" },
  Ac = ["onClick"],
  Ic = { class: "ship-img-col" },
  Nc = ["src", "alt"],
  Mc = { class: "ship-card-content" },
  Ec = { class: "ship-card-name" },
  Rc = { key: 0, class: "ship-desc-sm" },
  Pc = { key: 1, class: "ship-card-info" },
  Oc = { class: "ship-card-capacity" },
  Lc = { key: 2, class: "ship-card-info" },
  Bc = { class: "cabin-results-section" },
  Fc = { key: 0, class: "back-to-ships-bar" },
  zc = { class: "viewing-ship-label" },
  Uc = { key: 1, class: "no-availability" },
  Gc = { key: 2, class: "lodge-results" },
  Kc = {
    class: "cabin-image",
    style: { position: "relative", overflow: "hidden" },
  },
  Vc = ["src", "alt", "onError"],
  qc = ["onClick"],
  Wc = ["onClick"],
  Hc = { class: "cabin-content" },
  Yc = { class: "cabin-title-group" },
  Jc = { class: "cabin-name" },
  jc = { class: "cabin-badge active" },
  Xc = { class: "cabin-specs" },
  Qc = { class: "cabin-overview" },
  Zc = { class: "overview-list" },
  eu = { key: 0, class: "overview-list" },
  tu = ["onClick"],
  su = { key: 0, class: "trips-section" },
  nu = { class: "trip-primary" },
  au = { class: "trip-primary-info" },
  ou = { class: "trip-primary-date" },
  iu = { class: "trip-primary-rooms" },
  lu = ["onClick"],
  ru = { key: 1, class: "more-dates-list" },
  cu = ["onClick"],
  uu = { class: "trip-alt-info" },
  du = { class: "trip-alt-date" },
  vu = { class: "trip-alt-rooms" },
  pu = { key: 0, class: "trip-reserved-label" },
  mu = { key: 1, class: "trip-select-action" },
  fu = { class: "cabin-info-section" },
  hu = { class: "cabin-info-left" },
  gu = { class: "price-main" },
  bu = { class: "price-value" },
  yu = { class: "cabin-info-right" },
  ku = ["onClick"],
  wu = { key: 3, class: "pagination" },
  _u = ["disabled"],
  Cu = { class: "pagination-pages" },
  $u = ["onClick"],
  Su = ["disabled"],
  xu = { key: 4, class: "no-results" },
  Du = { class: "sidebar-section-wrapper" },
  Tu = { class: "sidebar-section check-availability-section" },
  Au = { key: 0, class: "sidebar-skeleton" },
  Iu = ["aria-expanded"],
  Nu = { class: "caret" },
  Mu = ["src"],
  Eu = ["onClick"],
  Ru = { class: "list-text result-list-text" },
  Pu = ["value"],
  Ou = ["aria-expanded"],
  Lu = { class: "caret" },
  Bu = ["src"],
  Fu = { class: "dropdown-group-title" },
  zu = { key: 0, class: "muted" },
  Uu = ["onClick"],
  Gu = { class: "list-text result-list-text" },
  Ku = ["value"],
  Vu = { key: 0, class: "muted" },
  qu = ["aria-expanded"],
  Wu = { key: 0 },
  Hu = { key: 1 },
  Yu = { class: "caret" },
  Ju = ["src"],
  ju = { class: "sidebar-pill-container" },
  Xu = { key: 0, class: "sidebar-flexible-content" },
  Qu = { class: "sidebar-counter-row" },
  Zu = { class: "ctrls" },
  ed = ["disabled"],
  td = { class: "val" },
  sd = { key: 1, class: "cabins-container-sidebar" },
  nd = { class: "cabin-header-sidebar-static" },
  ad = { class: "cabin-header-left-sidebar" },
  od = { class: "cabin-title-sidebar" },
  id = { class: "cabin-summary-sidebar" },
  ld = { class: "cabin-header-right-sidebar" },
  rd = ["onClick"],
  cd = ["onClick"],
  ud = { key: 0, class: "cabin-body-sidebar" },
  dd = { class: "counter-row-sidebar" },
  vd = { class: "counter-ctrls-sidebar" },
  pd = ["disabled", "onClick"],
  md = { class: "count-sidebar" },
  fd = ["disabled", "onClick"],
  hd = { class: "counter-row-sidebar" },
  gd = { class: "counter-ctrls-sidebar" },
  bd = ["disabled", "onClick"],
  yd = { class: "count-sidebar" },
  kd = ["disabled", "onClick"],
  wd = ["aria-expanded"],
  _d = { class: "caret" },
  Cd = ["src"],
  $d = { class: "custom-calendar" },
  Sd = { class: "calendar-header" },
  xd = { class: "calendar-title" },
  Dd = { class: "calendar-grid" },
  Td = { class: "calendar-days" },
  Ad = ["disabled", "onClick"],
  Id = { class: "caret" },
  Nd = ["src"],
  Md = { key: 0, class: "custom-dropdown-menu" },
  Ed = { class: "trip-duration-range-content sidebar-duration" },
  Rd = { class: "counter-row duration-counter-row" },
  Pd = { class: "counter-ctrls" },
  Od = ["disabled"],
  Ld = { class: "count-display" },
  Bd = ["disabled"],
  Fd = { class: "counter-row duration-counter-row" },
  zd = { class: "counter-ctrls" },
  Ud = ["disabled"],
  Gd = { class: "count-display" },
  Kd = ["disabled"],
  Vd = { class: "duration-reset-row" },
  qd = ["disabled"],
  Wd = { key: 0, class: "sidebar-track" },
  Hd = { class: "itinerary-sticky" },
  Yd = { key: 0, class: "itinerary-empty" },
  Jd = { key: 1, class: "itinerary-list" },
  jd = { class: "itinerary-header" },
  Xd = { class: "itinerary-cabin-name" },
  Qd = ["onClick"],
  Zd = { class: "itinerary-info-row" },
  ev = { class: "itinerary-info-text" },
  tv = { class: "itinerary-info-row" },
  sv = { class: "itinerary-info-text" },
  nv = { class: "itinerary-info-row guest-row-editable" },
  av = { class: "guest-info-wrap" },
  ov = { class: "itinerary-info-text" },
  iv = ["onClick"],
  lv = { class: "itinerary-price-row" },
  rv = { class: "itinerary-price-left" },
  cv = { class: "itinerary-price-label" },
  uv = { class: "itinerary-price-value" },
  dv = { key: 2, class: "itinerary-total" },
  vv = { class: "itinerary-total-row" },
  pv = { class: "itinerary-total-right" },
  mv = { class: "itinerary-total-amount" },
  fv = { key: 3, class: "itinerary-total-note" },
  hv = { class: "modal-body modal-body-redesigned" },
  gv = { class: "modal-info-section modal-info-left" },
  bv = { class: "modal-cabin-header" },
  yv = { class: "modal-cabin-name" },
  kv = { class: "modal-cabin-specs" },
  wv = { class: "modal-cabin-quote" },
  _v = { class: "modal-overview-section" },
  Cv = { class: "modal-overview-grid" },
  $v = { class: "modal-overview-list" },
  Sv = { key: 0, class: "modal-overview-list" },
  xv = { class: "modal-amenities-section" },
  Dv = { class: "modal-amenities-grid" },
  Tv = { class: "modal-amenities-list" },
  Av = { key: 0, class: "modal-amenities-list" },
  Iv = { class: "modal-image-section modal-image-right" },
  Nv = ["src", "alt"],
  Mv = { class: "modal-image-indicator" },
  Ev = { class: "indicator-count" },
  Rv = { class: "modal-bottom-section" },
  Pv = { class: "modal-rate-info" },
  Ov = { class: "modal-price-display" },
  Lv = { class: "price-amount" },
  Bv = { key: 0, class: "price-label" },
  Fv = { class: "guest-modal-body" },
  zv = { class: "guest-counter-section" },
  Uv = { class: "guest-counter-row" },
  Gv = { class: "guest-counter-controls" },
  Kv = ["disabled"],
  Vv = { class: "guest-counter-value" },
  qv = ["disabled"],
  Wv = { class: "guest-available-note" },
  Hv = { key: 0 },
  Yv = { class: "guest-modal-actions" },
  Jv = { key: 4, class: "enquiry-modal-overlay" },
  jv = { class: "enquiry-modal-content" },
  Xv = { class: "enquiry-modal-body" },
  Qv = { class: "enquiry-form-section" },
  Zv = { class: "form-row" },
  ep = { class: "form-group form-group-small" },
  tp = { class: "form-group" },
  sp = { class: "form-group" },
  np = { class: "form-row" },
  ap = { class: "form-group" },
  op = { class: "phone-input" },
  ip = { class: "form-group" },
  lp = { class: "form-row" },
  rp = { class: "form-group" },
  cp = { class: "form-group" },
  up = { class: "form-group" },
  dp = { class: "form-group" },
  vp = { class: "form-checkboxes" },
  pp = { class: "checkbox-label" },
  mp = { class: "checkbox-label" },
  fp = ["disabled"],
  hp = { class: "enquiry-summary-section" },
  gp = { class: "summary-items" },
  bp = { class: "summary-item-header" },
  yp = { class: "summary-lodge-name" },
  kp = { class: "summary-item-details" },
  wp = { class: "summary-cabin" },
  _p = { class: "summary-guests" },
  Cp = { class: "summary-dates" },
  $p = { key: 0, class: "summary-pricing" },
  Sp = { class: "pricing-row" },
  xp = { class: "pricing-value" },
  Dp = { class: "pricing-row" },
  Tp = { class: "pricing-label" },
  Ap = { class: "pricing-value" },
  Ip = { key: 0, class: "enquiry-total-section" },
  Np = { class: "enquiry-total" },
  Mp = { class: "enquiry-total-row" },
  Ep = { class: "enquiry-total-amount" },
  Rp = { key: 1, class: "enquiry-pricing-note" },
  Pp = { class: "home-footer" },
  Op = { class: "home-footer-inner container" },
  Lp = { class: "hf-top" },
  Bp = { class: "hf-links" },
  Fp = { class: "hf-bottom" },
  zp = { class: "hf-copyright" },
  Up = { class: "mobile-filter-modal" },
  Gp = { class: "mobile-filter-modal-header" },
  Kp = { class: "mobile-filter-modal-body" },
  Vp = { class: "modal-field-group" },
  qp = ["src"],
  Wp = { key: 0, class: "modal-field-dropdown" },
  Hp = ["onClick"],
  Yp = { class: "list-text result-list-text" },
  Jp = ["value"],
  jp = { class: "modal-field-group" },
  Xp = ["src"],
  Qp = { key: 0, class: "modal-field-dropdown" },
  Zp = { class: "dropdown-group-title" },
  e1 = { key: 0, class: "muted" },
  t1 = ["onClick"],
  s1 = { class: "list-text result-list-text" },
  n1 = ["value"],
  a1 = { class: "modal-field-group" },
  o1 = { key: 0 },
  i1 = { key: 1 },
  l1 = ["src"],
  r1 = {
    key: 0,
    class: "modal-field-dropdown cabin-panel",
    style: { padding: "1rem" },
  },
  c1 = { class: "sidebar-pill-container" },
  u1 = { key: 0, class: "sidebar-flexible-content" },
  d1 = { class: "sidebar-counter-row" },
  v1 = { class: "ctrls" },
  p1 = ["disabled"],
  m1 = { class: "val" },
  f1 = { key: 1, class: "cabins-container-sidebar" },
  h1 = { class: "cabin-header-sidebar-static" },
  g1 = { class: "cabin-header-left-sidebar" },
  b1 = { class: "cabin-title-sidebar" },
  y1 = { class: "cabin-summary-sidebar" },
  k1 = { class: "cabin-header-right-sidebar" },
  w1 = ["onClick"],
  _1 = ["onClick"],
  C1 = { key: 0, class: "cabin-body-sidebar" },
  $1 = { class: "counter-row-sidebar" },
  S1 = { class: "counter-ctrls-sidebar" },
  x1 = ["disabled", "onClick"],
  D1 = { class: "count-sidebar" },
  T1 = ["disabled", "onClick"],
  A1 = { class: "counter-row-sidebar" },
  I1 = { class: "counter-ctrls-sidebar" },
  N1 = ["disabled", "onClick"],
  M1 = { class: "count-sidebar" },
  E1 = ["disabled", "onClick"],
  R1 = { class: "modal-field-group" },
  P1 = ["src"],
  O1 = { key: 0, class: "modal-field-dropdown dates-panel" },
  L1 = {
    class: "custom-calendar",
    style: { "max-width": "100%", "box-shadow": "none", border: "none" },
  },
  B1 = { class: "calendar-header" },
  F1 = { class: "calendar-title" },
  z1 = { class: "calendar-grid" },
  U1 = { class: "calendar-days" },
  G1 = ["disabled", "onClick"],
  K1 = { class: "modal-field-group" },
  V1 = { class: "trip-duration-range-content mobile-duration" },
  q1 = { class: "counter-row duration-counter-row" },
  W1 = { class: "counter-ctrls" },
  H1 = ["disabled"],
  Y1 = { class: "count-display" },
  J1 = ["disabled"],
  j1 = { class: "counter-row duration-counter-row" },
  X1 = { class: "counter-ctrls" },
  Q1 = ["disabled"],
  Z1 = { class: "count-display" },
  em = ["disabled"],
  tm = { class: "duration-reset-row" },
  sm = ["disabled"],
  Ot = "Rp",
  ms = "Nusa Tenggara Timur",
  Xe = 30,
  nm = 4,
  qt = 4,
  am = {
    __name: "Results",
    setup(S) {
      const b = m({}),
        f = m({}),
        C = m(!1),
        h = m(!1),
        g = m(!1),
        v = m(!1),
        E = m(!1),
        X = m(!1);
      lt(C, (s) => {
        s
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "");
      });
      function A() {
        me.value || (me.value = {}),
          (me.value.destinations = [...Ne.value]),
          (me.value.ships = [...Oe.value]),
          (me.value.dateFrom = c.value),
          (me.value.dateTo = y.value),
          (me.value.totalGuests = Be.value),
          (it.value = 1),
          ns();
      }
      function oe() {
        (h.value = !1),
          (g.value = !1),
          (v.value = !1),
          (E.value = !1),
          (X.value = !1),
          (C.value = !1),
          A();
      }
      function te(s, t) {
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
          u = a[r.getMonth()],
          n = r.getDate();
        if (!t) return `${u} ${n}`;
        const d = new Date(t),
          p = a[d.getMonth()],
          N = d.getDate(),
          _ = d.getFullYear();
        return u === p && r.getFullYear() === _
          ? `${u} ${n} - ${p} ${N} ${_}`
          : `${u} ${n} - ${p} ${N} ${_}`;
      }
      function Z(s) {
        if (!s || typeof s == "string") return [];
        const t = [];
        s.image_main && t.push(s.image_main),
          Array.isArray(s.images) && t.push(...s.images);
        for (let a = 1; a <= 10; a++) {
          const r = `image_${a}`;
          s[r] && t.push(s[r]);
        }
        return t.filter((a) => !!a && String(a).trim().length > 0).map(wn);
      }
      function q(s) {
        const t = Z(s.detail) || [];
        return t.length ? t : Z(s.raw) || [];
      }
      function W(s) {
        return b.value[s] || 0;
      }
      function Se(s) {
        return f.value[s] || "right";
      }
      function Ce(s, t, a, r) {
        a > 0
          ? ((b.value[s] = (t + a) % a), (f.value[s] = r))
          : ((b.value[s] = 0), (f.value[s] = "right"));
      }
      function ie(s) {
        const t = es.value.find((r) => r.key === s);
        if (!t) return;
        const a = q(t);
        Ce(s, W(s) - 1, a.length, "left");
      }
      function O(s) {
        const t = es.value.find((r) => r.key === s);
        if (!t) return;
        const a = q(t);
        Ce(s, W(s) + 1, a.length, "right");
      }
      const H = m(0);
      function le() {
        if (!pe.value) return [];
        const s = q(pe.value);
        return s.length ? s : [pe.value.image || "/src/images/cabin.jpg"];
      }
      function ve() {
        const s = le(),
          t = H.value % (s.length || 1);
        return s[t] || "/src/images/cabin.jpg";
      }
      function F() {
        const t = le().length || 1;
        H.value = (H.value - 1 + t) % t;
      }
      function G() {
        const t = le().length || 1;
        H.value = (H.value + 1) % t;
      }
      const w = (s) => {
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
      Qe(() => {
        window.addEventListener("resize", () => {
          window.innerWidth >= 640 &&
            typeof C < "u" &&
            C.value &&
            (C.value = !1);
        }),
          Ha(() => {
            try {
              console.log("DEBUG selectedCabinDetail", Ut.value),
                console.log("DEBUG selectedCabinPriceText", _s.value);
            } catch (s) {
              console.warn("DEBUG watchEffect error:", s);
            }
          });
      });
      const ge = Gs(),
        fe = m(!0),
        xe = m(""),
        qe = m(!1),
        me = m(null),
        Ae = m({}),
        Ze = m([]),
        ne = m(null),
        k = m(new Map()),
        Ie = m(new Map()),
        R = m([]),
        De = m(null),
        et = m(null),
        Ee = m(!1),
        tt = m(!1),
        We = m(!1),
        pe = m(null),
        He = m(1),
        Re = m(2),
        Le = m(!1),
        _t = m(""),
        je = m(null),
        Ct = m({}),
        rt = m({}),
        st = m("recommended"),
        pt = m(!1),
        Lt = [
          { value: "recommended", label: "Recommended" },
          { value: "price_low", label: "Lowest Price" },
          { value: "price_high", label: "Highest Price" },
        ],
        Dt = ["Komodo National Park", "Labuan Bajo"];
      function we(s) {
        if (!s) return "";
        const t = s.match(/[-\w]{25,}/);
        return t ? `https://lh3.googleusercontent.com/d/${t[0]}` : s;
      }
      const Bt = {
        "SEMESTA VOYAGES": we(
          "https://drive.google.com/file/d/1semesta_placeholder"
        ),
        "AKASSA CRUISE": we(
          "https://drive.google.com/file/d/1akassa_placeholder"
        ),
        "DERYA LIVEABOARD": we(
          "https://drive.google.com/file/d/1derya_placeholder"
        ),
        "GIONA LIVEABOARD": we(
          "https://drive.google.com/file/d/1giona_placeholder"
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
      function Ft(s) {
        if (!s) return "";
        const t = Tt(s);
        if (t && t.mainImage) return t.mainImage;
        const a = s.toUpperCase().trim();
        if (Bt[a]) return Bt[a];
        for (const [r, u] of Object.entries(Bt)) {
          const n = r.toUpperCase().trim();
          if (n.includes(a) || a.includes(n)) return u;
        }
        return "";
      }
      function Tt(s) {
        if (!s) return null;
        const t = s.toUpperCase().trim();
        if (Ie.value.has(t)) return Ie.value.get(t);
        for (const [a, r] of Ie.value.entries())
          if (a.includes(t) || t.includes(a)) return r;
        return null;
      }
      const Jt = [],
        nt = m([]),
        At = m(!1),
        Ne = m([]),
        Oe = m([]),
        I = m([]),
        c = m(""),
        y = m(""),
        P = m(1),
        D = m(30),
        Y = m([{ id: 1, adults: 2, children: 0, expanded: !0 }]),
        ce = m(!0),
        mt = m(!1),
        ue = m(2),
        Be = x(() =>
          ce.value
            ? ue.value
            : Y.value.reduce((s, t) => s + t.adults + t.children, 0)
        ),
        ct = x(() => Y.value.length < nm),
        jt = x(() => {
          if (!c.value || !y.value) return Xe;
          const s = new Date(c.value + "T00:00:00"),
            a = new Date(y.value + "T00:00:00").getTime() - s.getTime(),
            r = Math.ceil(a / (1e3 * 60 * 60 * 24)) + 1;
          return Math.min(r, Xe);
        });
      x(() => {
        const s = jt.value,
          t = [];
        for (let a = 1; a <= s; a++) t.push(a);
        return t;
      });
      const zt = x(() => {
          const s = P.value,
            t = D.value;
          return s === 1 && t === Xe
            ? "Any duration"
            : s === t
            ? `${s} ${s === 1 ? "day" : "days"}`
            : `${s} - ${t} days`;
        }),
        Fe = m(!1),
        ze = m(!1),
        Ue = m(!1),
        Ge = m(!1),
        Ke = m(!1),
        gs = m(!1),
        bs = m(!1),
        ys = m(!1),
        ks = m(!1),
        ws = m(!1),
        qs = m(null),
        Ws = m(null),
        Hs = m(null),
        Ys = m(null),
        Js = m(null),
        Vn = m(null),
        ft = m(new Date().getMonth()),
        $t = m(new Date().getFullYear());
      function qn() {
        (Fe.value = !1),
          (ze.value = !1),
          (Ue.value = !1),
          (Ge.value = !1),
          (Ke.value = !1);
      }
      function It(s) {
        s === "regions"
          ? ((Fe.value = !Fe.value),
            (ze.value = Ue.value = Ge.value = Ke.value = !1))
          : s === "ships"
          ? ((ze.value = !ze.value),
            (Fe.value = Ue.value = Ge.value = Ke.value = !1))
          : s === "guests"
          ? ((Ue.value = !Ue.value),
            (Fe.value = ze.value = Ge.value = Ke.value = !1))
          : s === "dates"
          ? ((Ge.value = !Ge.value),
            (Fe.value = ze.value = Ue.value = Ke.value = !1))
          : s === "duration" &&
            ((Ke.value = !Ke.value),
            (Fe.value = ze.value = Ue.value = Ge.value = !1));
      }
      function js(s) {
        const t = Ne.value.indexOf(s);
        t >= 0 ? Ne.value.splice(t, 1) : Ne.value.push(s);
      }
      function Xs(s) {
        const t = Oe.value.indexOf(s);
        t >= 0 ? Oe.value.splice(t, 1) : Oe.value.push(s);
      }
      function Qs() {
        ct.value &&
          Y.value.push({
            id: Date.now(),
            adults: 2,
            children: 0,
            expanded: !0,
          });
      }
      function Zs(s) {
        Y.value.length > 1 && Y.value.splice(s, 1);
      }
      function en(s) {
        Y.value[s].expanded = !Y.value[s].expanded;
      }
      function Xt(s, t) {
        const a = Y.value[s];
        a.adults + a.children < qt && a[t]++;
      }
      function Qt(s, t) {
        const a = Y.value[s];
        t === "adults" && a.adults > 1 && a.adults--,
          t === "children" && a.children > 0 && a.children--;
      }
      function tn() {
        P.value > 1 && P.value--;
      }
      function sn() {
        P.value < D.value && P.value++;
      }
      function nn() {
        D.value > P.value && D.value--;
      }
      function an() {
        D.value < Xe && D.value++;
      }
      function on() {
        (P.value = 1), (D.value = Xe);
      }
      x(() => Fa());
      const ln = x(
          () =>
            `${
              [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ][ft.value]
            } ${$t.value}`
        ),
        rn = x(() => {
          const s = new Date($t.value, ft.value, 1),
            t = new Date($t.value, ft.value + 1, 0),
            a = new Date(s),
            r = new Date();
          a.setDate(a.getDate() - a.getDay());
          const u = [],
            n = new Date(t);
          n.setDate(n.getDate() + (6 - t.getDay()));
          for (let d = new Date(a); d <= n; d.setDate(d.getDate() + 1)) {
            d.getDay();
            const p = d.getMonth() === ft.value,
              N = new Date(d);
            N.setHours(0, 0, 0, 0);
            const _ = new Date(r);
            _.setHours(0, 0, 0, 0);
            const T = N < _,
              $ = p && !T,
              U = us(d);
            let K = !1,
              L = !1,
              J = !1;
            if (c.value && y.value && p) {
              const re = new Date(c.value + "T00:00:00"),
                ae = new Date(y.value + "T00:00:00");
              N >= re &&
                N <= ae &&
                ((K = !0),
                N.getTime() === re.getTime() && (L = !0),
                N.getTime() === ae.getTime() && (J = !0));
            }
            u.push({
              key: d.getTime(),
              date: d.getDate(),
              fullDate: U,
              isCurrentMonth: p,
              isSelectable: $,
              isPast: T,
              isSelected: c.value === U || y.value === U,
              isInRange: K,
              isRangeStart: L,
              isRangeEnd: J,
            });
          }
          return u;
        });
      function cn(s) {
        let t = ft.value + s,
          a = $t.value;
        t > 11 && ((t = 0), (a += 1)),
          t < 0 && ((t = 11), (a -= 1)),
          (ft.value = t),
          ($t.value = a);
      }
      function un() {
        cn(1);
      }
      function dn() {
        cn(-1);
      }
      function vn(s) {
        if (s.isSelectable)
          if (!c.value || (c.value && y.value))
            (c.value = s.fullDate), (y.value = "");
          else {
            const t = new Date(c.value + "T00:00:00");
            new Date(s.fullDate + "T00:00:00") < t
              ? ((y.value = c.value), (c.value = s.fullDate))
              : (y.value = s.fullDate);
          }
      }
      const pn = x(() => {
        if (Ne.value.length) return Ne.value[0];
        const s = me.value;
        return Array.isArray(s == null ? void 0 : s.destinations) &&
          s.destinations.length
          ? s.destinations[0]
          : ms;
      });
      x(() => {
        var r, u, n;
        const s = me.value;
        if (!s) return [];
        const t = s.ships && s.ships.length ? s.ships : s.lodges || [],
          a = [];
        for (const d of t) {
          const p = Ae.value[d] || [];
          let N = 0,
            _ = 0;
          for (const ae of p) {
            const z = (
              ((r = ae == null ? void 0 : ae.operators) == null
                ? void 0
                : r.flatMap((de) => de.cabins || [])) || []
            ).reduce((de, Ve) => {
              const Je = String(Ve).match(/\((\d+)\)/);
              return de + (Je ? parseInt(Je[1], 10) : 0);
            }, 0);
            (N += z), (_ += z);
          }
          const T = p.length,
            $ = T > 0 ? N / T : 0,
            U = $ >= (s.totalGuests || 0),
            K = Math.max(
              1,
              s.totalGuests || (s.adults || 0) + (s.children || 0)
            ),
            L =
              p.find((ae) => (ae == null ? void 0 : ae.date) === s.dateFrom) ||
              p[0],
            re = (
              ((n =
                (u = L == null ? void 0 : L.operators) == null
                  ? void 0
                  : u[0]) == null
                ? void 0
                : n.cabins) || []
            ).reduce((ae, _e) => {
              const z = String(_e).match(/\((\d+)\)/),
                de = z ? parseInt(z[1], 10) : 0;
              return ae + (de >= K ? 1 : 0);
            }, 0);
          a.push({
            lodge: d,
            hasAvailability: U,
            availableSlots: Math.floor($),
            totalSlots: T > 0 ? Math.floor(_ / T) : 0,
            image: "/src/images/cabin.jpg",
            availableCabinsCount: re,
            dateFrom: s.dateFrom,
          });
        }
        return a;
      });
      const Wn = x(() => {
        const s = me.value;
        if (!s) return [];
        const t = s.ships && s.ships.length ? s.ships : s.lodges || [],
          a = s.dateFrom,
          r = Math.max(1, s.totalGuests || (s.adults || 0) + (s.children || 0)),
          u = [],
          n = new Set();
        for (const d of t) {
          const p = Ae.value[d] || [],
            N = p.find((T) => (T == null ? void 0 : T.date) === a) || p[0],
            _ = ((N == null ? void 0 : N.operators) || []).flatMap(
              (T) => T.cabins || []
            );
          for (const T of _) {
            const $ = as(T),
              U = dt(T),
              K = typeof T == "string" ? "" : Ns(T);
            if (U == null || U >= r) {
              const J =
                (typeof T != "string" && T != null && T.id
                  ? String(T.id).trim().toLowerCase()
                  : null) || `${ye(d)}|${gt($)}`;
              if (n.has(J)) continue;
              n.add(J),
                u.push({
                  ship: d,
                  cabinName: $,
                  capacity: U,
                  date: a,
                  image: K,
                });
            }
          }
        }
        return u;
      });
      x(() =>
        Wn.value.map((s) => ({
          cabinName: s.cabinName,
          ship: s.ship,
          date: s.date,
          capacity: s.capacity,
          image: s.image || "/src/images/cabin.jpg",
        }))
      ),
        x(() => {
          const s = me.value;
          return s
            ? Math.max(1, s.totalGuests || (s.adults || 0) + (s.children || 0))
            : 1;
        });
      const Ut = x(() => {
          const s = pe.value;
          if (!s) return null;
          const t = s.originalItem || s;
          if (t.detail) return t.detail;
          const a = k.value || new Map(),
            r = `${ye(t.shipName || t.operatorLabel || "")}|${gt(t.cabinName)}`;
          return a.get(r) || null;
        }),
        Hn = x(() => {
          const s = Ut.value;
          return (
            (
              (s == null ? void 0 : s.description) ||
              (s == null ? void 0 : s.desc) ||
              ""
            ).trim() ||
            "If you are desperate for a vacation, bring your friends or family and step away from it all."
          );
        }),
        _s = x(() => {
          const s = Ut.value,
            t =
              (s && (typeof s.price == "number" ? s.price : os(s))) ||
              os(pe.value);
          if (t == null) return "";
          const a = Es(t, Ot);
          return a ? $n(a.amount, a.currency) : "";
        }),
        Yn = x(() => {
          var a, r;
          const s = Ut.value;
          return s != null && s.capacity
            ? s.capacity
            : Ms((a = pe.value) == null ? void 0 : a.capacityText) ||
                ((r = pe.value) == null ? void 0 : r.capacity) ||
                "";
        }),
        Cs = x(() => {
          var d;
          const s = Ut.value,
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
          const u = [];
          return (
            s &&
              (s.facility_text && u.push(s.facility_text),
              s.facilities_text && u.push(s.facilities_text),
              s.api_name && u.push(s.api_name),
              s.description && u.push(s.description)),
            (d = pe.value) != null &&
              d.capacityText &&
              u.push(pe.value.capacityText),
            wa(u.join(" "))
          );
        });
      x(() => {
        const s = me.value;
        return s
          ? Array.isArray(s.destinations) && s.destinations.length
            ? s.destinations.join(", ")
            : s.destination || ""
          : "";
      });
      const Jn = x(() => {
          const s = me.value;
          if (!s) return [];
          const t = s.ships && s.ships.length ? s.ships : s.lodges || [],
            a = s.shipSheets && s.shipSheets.length ? s.shipSheets : [],
            r = new Set(),
            u = (n) => {
              const d = ye(
                String(n)
                  .replace(/normalized/gi, "")
                  .replace(/cruise schedule/gi, "")
              );
              if (!d) return;
              r.add(d);
              const p = d.split(" ")[0];
              p && r.add(p);
            };
          return t.forEach(u), a.forEach(u), Array.from(r);
        }),
        Zt = x(() => {
          const s = me.value;
          return s
            ? s.ships && s.ships.length
              ? s.ships
              : s.lodges || []
            : [];
        }),
        $s = x(() => Zt.value.length > 1 && !je.value),
        jn = x(() => {
          const s = me.value,
            t = ne.value,
            a = P.value,
            r = D.value,
            u = k.value || new Map();
          if (!s || !t || !Array.isArray(t.operators)) return [];
          const n = Zt.value,
            d = [];
          for (const p of n) {
            const N = t.operators.find((_) => {
              const T = ye(_.operator || ""),
                $ = ye(p);
              return T === $ || T.includes($) || $.includes(T);
            });
            if (N) {
              const _ = (N.cabins || []).filter((U) => {
                  const K = As(U);
                  if (K != null && K <= 0) return !1;
                  if (a > 1 || r < Xe) {
                    let L = 0;
                    if (
                      (U.trip_days
                        ? (L = parseInt(U.trip_days, 10))
                        : U.days
                        ? (L = parseInt(U.days, 10))
                        : U.raw &&
                          (U.raw.trip_days
                            ? (L = parseInt(U.raw.trip_days, 10))
                            : U.raw.days && (L = parseInt(U.raw.days, 10))),
                      !L)
                    ) {
                      const J = as(U),
                        re = gt(J),
                        ae = ye(p),
                        _e = ye(N.operator || "");
                      let z = u.get(`${ae}|${re}`);
                      if ((!z && _e && (z = u.get(`${_e}|${re}`)), !z)) {
                        const de = `|${re}`;
                        for (const [Ve, Je] of u.entries())
                          if (Ve.endsWith(de)) {
                            z = Je;
                            break;
                          }
                      }
                      if (!z) {
                        const de = ls(J);
                        de && (z = u.get(`${ae}|${de}`));
                      }
                      z && (L = parseInt(z.trip_days || z.days || 0, 10));
                    }
                    if (L > 0 && (L < a || L > r)) return !1;
                  }
                  return !0;
                }),
                T = _.length,
                $ = Tt(p);
              if (T > 0) {
                const U = _.reduce((K, L) => {
                  const J = dt(L);
                  return K + (J || 4);
                }, 0);
                d.push({
                  name: p,
                  operator: N.operator,
                  cabinsCount: T,
                  totalCapacity: U,
                  hasAvailability: !0,
                  image: ($ == null ? void 0 : $.mainImage) || Ft(p) || "",
                  description: ($ == null ? void 0 : $.description) || "",
                });
              } else
                d.push({
                  name: p,
                  operator: N.operator,
                  cabinsCount: 0,
                  totalCapacity: 0,
                  hasAvailability: !1,
                  image: ($ == null ? void 0 : $.mainImage) || Ft(p) || "",
                  description: ($ == null ? void 0 : $.description) || "",
                });
            } else {
              const _ = Tt(p);
              d.push({
                name: p,
                operator: p,
                cabinsCount: 0,
                totalCapacity: 0,
                hasAvailability: !1,
                image: (_ == null ? void 0 : _.mainImage) || Ft(p) || "",
                description: (_ == null ? void 0 : _.description) || "",
              });
            }
          }
          return d;
        });
      function Xn(s) {
        je.value = s;
      }
      function Qn() {
        je.value = null;
      }
      const es = x(() => {
          const s = me.value,
            t = ne.value;
          if (!s || !t || !Array.isArray(t.operators)) return [];
          const a = Jn.value,
            r = k.value || new Map(),
            u = new Map();
          for (const N of t.operators) {
            const _ = N.operator,
              T = N.cabins || [];
            for (const $ of T) {
              const U = As($);
              if (U != null && U <= 0) continue;
              const K = as($),
                L = yn($),
                J = os($),
                re = pa($, _);
              if (a.length && !ka(re, a)) continue;
              if (je.value) {
                const Te = ye(je.value),
                  Rt = ye(re);
                if (!Rt.includes(Te) && !Te.includes(Rt)) continue;
              }
              const ae =
                  typeof $ != "string" && $ != null && $.id
                    ? String($.id).trim().toLowerCase()
                    : null,
                _e = gt(K),
                z = (typeof $ != "string" && ($.start_date || $.date)) || "",
                de = ae || `${ye(re)}|${_e}|${z}` || `${ye(_)}|${_e}|${z}`,
                Ve = `${ye(re)}|${_e}`,
                Je = _ ? `${ye(_)}|${_e}` : null;
              let $e = r.get(Ve);
              if (
                (!$e && Je && ($e = r.get(Je)),
                !$e &&
                  r.size > 0 &&
                  Math.floor(Math.random() * 100) < 5 &&
                  console.log("Cabin detail NOT found:", {
                    shipName: re,
                    operatorLabel: _,
                    cabinKey: _e,
                    searchKey1: Ve,
                    searchKey2: Je,
                    availableKeys: Array.from(r.keys())
                      .filter((Rt) => Rt.includes(_e))
                      .slice(0, 3),
                  }),
                !$e)
              ) {
                for (const [Te, Rt] of r.entries())
                  if (Te.endsWith(`|${_e}`)) {
                    $e = Rt;
                    break;
                  }
              }
              if (!$e) {
                const Te = `${ye(re)}|${ls(K)}`;
                $e = r.get(Te);
              }
              const Os = os($e) || J,
                Ls = yn($e) || L,
                Tn = As($e),
                Kt = Tn ?? U,
                za = Ns($e) || Ns($) || "/src/images/cabin.jpg",
                Ua = typeof $ != "string" ? $.trip_days || $.days : null,
                Ga = $e ? $e.trip_days || $e.days : null,
                Ka = Ua || Ga || null,
                Va =
                  (typeof $ != "string" ? $.start_date || $.date : null) ||
                  s.dateFrom,
                An = u.get(de),
                qa = {
                  key: de,
                  operatorLabel: _,
                  shipName: re,
                  cabinName: K,
                  available: Kt,
                  availableText: Kt != null ? `${Kt} available` : "Available",
                  price: Os,
                  capacityText: Ls,
                  date: Va,
                  tripDays: Ka,
                  image: za,
                  raw: $,
                  detail: $e,
                };
              if (!An) u.set(de, qa);
              else {
                const Te = { ...An };
                Te.available == null && Kt != null && (Te.available = Kt),
                  !Te.price && Os && (Te.price = Os),
                  !Te.capacityText && Ls && (Te.capacityText = Ls),
                  (Te.availableText =
                    Te.available != null
                      ? `${Te.available} available`
                      : "Available"),
                  u.set(de, Te);
              }
            }
          }
          const n = Array.from(u.values());
          n.sort(
            (N, _) =>
              (N.operatorLabel || "").localeCompare(_.operatorLabel || "") ||
              (N.cabinName || "").localeCompare(_.cabinName || "")
          );
          const d = s.dateFrom,
            p = s.dateTo;
          return d && p
            ? n.filter((_) => {
                const T = is(_);
                return T ? ba(_.date, T, d, p) : !0;
              })
            : n;
        }),
        Zn = x(() => {
          const s = es.value,
            t = me.value || {},
            a = t.isFlexible,
            r = a ? t.flexibleGuests || 0 : t.totalGuests || 0,
            u = t.cabins || [],
            n = {};
          for (const p of s) {
            if (!p.date) continue;
            const _ = `${ye(p.shipName || p.operatorLabel || "")}|${p.date}`;
            let T = 2;
            if (typeof dt == "function") T = dt(p) || 2;
            else {
              const K = (p.capacityText || "").match(/(\d+)/);
              K && (T = parseInt(K[1]));
            }
            const $ = typeof p.available == "number" ? p.available : 1;
            n[_] = (n[_] || 0) + T * $;
          }
          const d = new Map();
          for (const p of s) {
            const N = `${p.shipName || p.operatorLabel}|${p.cabinName}`;
            d.has(N) || d.set(N, { ...p, trips: [], totalAvailable: 0 });
            const _ = d.get(N),
              T = p.date || "",
              $ = Number(p.tripDays || is(p)) || 3;
            if (!T) continue;
            const K = `${ye(p.shipName || p.operatorLabel || "")}|${T}`,
              L = n[K] || 0;
            if (r > 0 && L < r) continue;
            if (!a && u.length > 0) {
              let ae = 2;
              if (typeof dt == "function") ae = dt(p) || 2;
              else {
                const de = (p.capacityText || "").match(/(\d+)/);
                de && (ae = parseInt(de[1]));
              }
              if (!u.some((z) => ae >= (z.total || z.adults + z.children)))
                continue;
            }
            const J = new Date(T + "T00:00:00");
            let re = !1;
            for (const ae of _.trips) {
              const _e = new Date(ae.date + "T00:00:00"),
                z = Number(ae.tripDays) || 3,
                de = new Date(_e);
              if ((de.setDate(de.getDate() + z - 1), J >= _e && J <= de)) {
                re = !0;
                break;
              }
            }
            if (!re) {
              const ae = {
                date: p.date,
                tripDays: $,
                available: p.available || 1,
                key: p.key,
                originalItem: p,
              };
              _.trips.push(ae),
                (_.totalAvailable += ae.available || 1),
                p.price &&
                  (!_.price || St(p.price) < St(_.price)) &&
                  (_.price = p.price);
            }
          }
          return Array.from(d.values())
            .map((p) => {
              var _;
              const N = p.trips.sort(
                (T, $) => new Date(T.date) - new Date($.date)
              );
              return N.length === 0
                ? null
                : {
                    ...p,
                    id: p.key,
                    uniqueKey: `${p.shipName}|${p.cabinName}`,
                    title: ha(p),
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
                    date: Nt((_ = N[0]) == null ? void 0 : _.date),
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
        ut = x(() => {
          let s = [...Zn.value];
          const t = P.value,
            a = D.value;
          return (
            (t > 1 || a < Xe) &&
              (s = s
                .map((r) => {
                  const u = (r.trips || []).filter((n) => {
                    const d = Number(n.tripDays) || 0;
                    return d >= t && d <= a;
                  });
                  return u.length === 0
                    ? null
                    : { ...r, trips: u, tripsCount: u.length };
                })
                .filter((r) => r !== null)),
            st.value === "price_low"
              ? s.sort((r, u) => {
                  var p, N, _, T;
                  const n = St(
                      ((N = (p = r.prices) == null ? void 0 : p[0]) == null
                        ? void 0
                        : N.value) || "0"
                    ),
                    d = St(
                      ((T = (_ = u.prices) == null ? void 0 : _[0]) == null
                        ? void 0
                        : T.value) || "0"
                    );
                  return n - d;
                })
              : st.value === "price_high" &&
                s.sort((r, u) => {
                  var p, N, _, T;
                  const n = St(
                    ((N = (p = r.prices) == null ? void 0 : p[0]) == null
                      ? void 0
                      : N.value) || "0"
                  );
                  return (
                    St(
                      ((T = (_ = u.prices) == null ? void 0 : _[0]) == null
                        ? void 0
                        : T.value) || "0"
                    ) - n
                  );
                }),
            s
          );
        }),
        it = m(1),
        mn = m(!1);
      function Ss() {
        mn.value = window.innerWidth < 768;
      }
      Qe(() => {
        Ss(), window.addEventListener("resize", Ss);
      }),
        In(() => {
          window.removeEventListener("resize", Ss);
        });
      const xs = x(() => (mn.value ? 5 : 10)),
        ts = x(() => Math.ceil(ut.value.length / xs.value)),
        ea = x(() => {
          const s = (it.value - 1) * xs.value,
            t = s + xs.value;
          return ut.value.slice(s, t);
        });
      function Ds(s) {
        s >= 1 &&
          s <= ts.value &&
          ((it.value = s), window.scrollTo({ top: 0, behavior: "smooth" }));
      }
      function ta() {
        Ds(it.value + 1);
      }
      function sa() {
        Ds(it.value - 1);
      }
      lt(st, () => {
        it.value = 1;
      }),
        lt([P, D], () => {
          it.value = 1;
        }),
        lt(jt, (s) => {
          D.value > s && (D.value = s),
            P.value > D.value && (P.value = D.value);
        });
      const Ts = x(() => {
          const s = De.value || {},
            t = dt(s);
          if (t) return t;
          const a = Ms(s.capacityText);
          return a || 4;
        }),
        ss = x(() => {
          const s = R.value || [];
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
            const d = Es(n == null ? void 0 : n.price, t || Ot);
            if (
              !d ||
              (t || (t = d.currency), t && d.currency && t !== d.currency)
            )
              continue;
            const p = Number((n == null ? void 0 : n.guests) || 2),
              N = Number(d.amount) * (Number.isFinite(p) ? p : 2);
            (a += N), r++;
          }
          const u = r > 0;
          return {
            hasPrice: u,
            total: a,
            formattedTotal: u ? w(a) : "",
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
        const u = new Date(a);
        u.setDate(u.getDate() + r - 1);
        const n = a.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          d = u.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });
        return `${n} - ${d}`;
      }
      function hn(s) {
        return s ? Ba(s, 2) : "";
      }
      function na(s) {
        if (!s) return "";
        const t = s.trim().split(/[\s(]+/)[0];
        return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
      }
      function aa(s, t) {
        (_t.value = t.key),
          s.originalItem && (s.originalItem.selectedTrip = t),
          Ct.value[t.key] || (Ct.value[t.key] = 1);
      }
      function oa(s) {
        rt.value[s] = !rt.value[s];
      }
      function ht(s) {
        return !s.trips || s.trips.length === 0
          ? null
          : s.trips.find((a) => a.key === _t.value) || s.trips[0];
      }
      function ia(s) {
        if (!s.trips || s.trips.length <= 1) return [];
        const t = ht(s);
        return s.trips.filter((a) => a.key !== t.key);
      }
      function la(s) {
        const t = ht(s);
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
        xn(a);
      }
      async function ra() {
        At.value = !0;
        try {
          const s = await zn();
          if (
            ((nt.value = (s.operators || [])
              .map((t) => {
                var u, n;
                const a = ((u = t.operator) == null ? void 0 : u.trim()) || "",
                  r = ((n = t.sourceSheet) == null ? void 0 : n.trim()) || a;
                return { id: `${a}__${r}`, label: a, sheet: r };
              })
              .filter((t) => t.label && t.sheet)),
            !Oe.value.length && I.value.length)
          ) {
            const t = [];
            for (const a of I.value) {
              const r = nt.value.find(
                (u) => u.label === a.label && u.sheet === (a.sheet || u.sheet)
              );
              r && t.push(r.id);
            }
            Oe.value = t;
          }
        } catch (s) {
          console.warn("Failed to load operators:", s),
            (nt.value = Jt.map((t) => ({
              id: t.id || `${t.label || ""}__${t.sheet || ""}`,
              label: t.label,
              sheet: t.sheet || t.label,
            })));
        } finally {
          At.value = !1;
        }
      }
      async function gn() {
        try {
          const a = await fetch(
              "http://127.0.0.1:8787?resource=cabindetail"
            ).then((n) => n.json()),
            r = new Map(),
            u = new Set();
          a &&
            Array.isArray(a.data) &&
            a.data.forEach((n) => {
              const d = n.operator || n.shipName || "";
              u.add(d);
              const p = new Set();
              p.add(ye(d)),
                p.add(
                  ye(d.replace(/\s+(cruise|liveaboard|voyages?|boat)s?$/i, ""))
                );
              const N = d.toUpperCase().trim();
              p.add(ye(N)),
                p.add(
                  ye(N.replace(/\s+(CRUISE|LIVEABOARD|VOYAGES?|BOAT)S?$/i, ""))
                );
              const _ = as(n),
                T = gt(_);
              p.forEach((K) => {
                if (K.trim()) {
                  const L = `${K}|${T}`;
                  r.set(L, n);
                }
              });
              const $ = (n.api_name || "").toString().trim();
              if ($) {
                const K = gt($);
                p.forEach((L) => {
                  if (L.trim()) {
                    const J = `${L}|${K}`;
                    r.set(J, n);
                  }
                });
              }
              const U = ls(_);
              if (
                (U &&
                  p.forEach((K) => {
                    const L = `${K}|${U}`;
                    r.set(L, n);
                  }),
                $)
              ) {
                const K = ls($);
                K &&
                  p.forEach((L) => {
                    const J = `${L}|${K}`;
                    r.set(J, n);
                  });
              }
            }),
            (k.value = r),
            console.log(`Loaded ${r.size} cabin details from API`, {
              sampleKeys: Array.from(r.keys()).slice(0, 10),
              totalEntries: r.size,
              uniqueShipNames: Array.from(u).sort(),
            });
        } catch (s) {
          console.warn("Failed to load cabindetail API", s);
        }
      }
      async function ca() {
        try {
          const a = await fetch(
              "http://127.0.0.1:8787?resource=shipdetail"
            ).then((u) => u.json()),
            r = new Map();
          a &&
            a.ok &&
            Array.isArray(a.ships) &&
            a.ships.forEach((u) => {
              const n = (u.name || "").toUpperCase().trim();
              if (n) {
                const d = {
                  ...u,
                  mainImage: u.image_main || u.mainImage || "",
                };
                r.set(n, d);
              }
            }),
            (Ie.value = r),
            console.log(
              `Loaded ${r.size} ship details from API`,
              Array.from(r.keys())
            );
        } catch (s) {
          console.warn("Failed to load shipdetail API", s);
        }
      }
      async function ns() {
        if (me.value) {
          (fe.value = !0),
            (xe.value = ""),
            (Ae.value = {}),
            (Ze.value = []),
            (ne.value = null);
          try {
            const s = me.value,
              t = Dn(s.dateFrom, s.dateTo),
              a = s.ships && s.ships.length ? s.ships : s.lodges || [],
              r = s.shipSheets && s.shipSheets.length ? s.shipSheets : a;
            console.log("[Results] Starting data load with", t.length, "dates"),
              await Promise.all([
                (async () => {
                  try {
                    const _ = await Un();
                    if (_ && _.ships) {
                      const T = new Map();
                      _.ships.forEach(($) => {
                        const U = ($.name || "").toUpperCase().trim();
                        U &&
                          T.set(U, {
                            ...$,
                            mainImage: $.image_main || $.mainImage || "",
                          });
                      }),
                        (Ie.value = T),
                        console.log(
                          "[Results] Ship details loaded:",
                          T.size,
                          "entries"
                        );
                    }
                  } catch (_) {
                    console.warn(
                      "[Results] Failed to load ship details, continuing without:",
                      _
                    );
                  }
                })(),
                (async () => {
                  try {
                    await gn();
                  } catch (_) {
                    console.warn(
                      "[Results] Failed to load cabin details, continuing without:",
                      _
                    );
                  }
                })(),
              ]);
            let u = null;
            const n = () => (
                u || (u = En("Cruise Schedule - Normalized").catch(() => null)),
                u
              ),
              d = {};
            await Promise.all(
              r.map(async (_, T) => {
                const $ = a[T] || _;
                let U = [];
                try {
                  const K = await En(_);
                  Array.isArray(K == null ? void 0 : K.allCabins) &&
                    (U = K.allCabins.map((L) =>
                      String(L).split(" (")[0].trim()
                    ));
                } catch (K) {
                  console.warn(`Failed to get cabins for sheet ${_}:`, K);
                }
                if (U.length === 0)
                  try {
                    const K = await n();
                    if (K) {
                      const L = ye($),
                        J = (K.operators || []).find(
                          (re) => ye(re.operator) === L
                        );
                      J &&
                        Array.isArray(J.cabins) &&
                        (U = J.cabins.map((re) =>
                          String(re).split(" (")[0].trim()
                        ));
                    }
                  } catch (K) {
                    console.warn(`Failed to get global cabins for ${$}:`, K);
                  }
                d[_] = Array.from(new Set(U.map(gt)));
              })
            );
            const p = await Promise.all(
                r.map(async (_, T) => {
                  var _e;
                  const $ = a[T] || _,
                    U = d[_] || [],
                    K = t.map((z) =>
                      vs(z, _).catch(
                        (de) => (
                          console.warn(
                            `Failed to get availability for ${z} on ${_}:`,
                            de
                          ),
                          null
                        )
                      )
                    ),
                    L = await Promise.all(K),
                    J = L.map((z, de) =>
                      !z || !z.operators || z.operators.length === 0 ? de : -1
                    ).filter((z) => z >= 0);
                  let re = [];
                  if (J.length) {
                    const z = J.map((Ve) =>
                      vs(t[Ve], "Cruise Schedule - Normalized").catch(
                        (Je) => (
                          console.warn(
                            `Failed to get fallback availability for ${t[Ve]}:`,
                            Je
                          ),
                          null
                        )
                      )
                    );
                    re = (await Promise.all(z)).filter((Ve) => Ve !== null);
                  }
                  const ae = [];
                  for (let z = 0; z < t.length; z++) {
                    const de =
                      L[z] && L[z].operators && L[z].operators.length
                        ? L[z]
                        : J.includes(z) && re.length > 0
                        ? re[J.indexOf(z)]
                        : null;
                    if (de) {
                      const Ve =
                          ((_e = de.operators) == null
                            ? void 0
                            : _e.flatMap(($e) => $e.cabins || [])) || [],
                        Je = U.length
                          ? Ve.filter(($e) => U.includes(gt($e)))
                          : Ve;
                      ae.push({
                        ...de,
                        operators: [
                          { operator: $, total: Je.length, cabins: Je },
                        ],
                      });
                    }
                  }
                  return [$, ae];
                })
              ),
              N = {};
            for (const [_, T] of p) N[_] = T;
            if (
              ((Ae.value = N),
              (Ze.value = Object.values(N).flat()),
              s != null && s.dateFrom)
            )
              try {
                const T = Dn(s.dateFrom, s.dateTo || s.dateFrom).map(
                    async (L) => {
                      let J = null;
                      try {
                        J = await vs(L);
                      } catch (re) {
                        console.warn(
                          `Failed primary availability fetch for ${L}, trying fallback:`,
                          re
                        );
                      }
                      if (!J || !J.operators || J.operators.length === 0)
                        try {
                          J = await vs(L, "Cruise Schedule - Normalized");
                        } catch (re) {
                          console.warn(
                            `Failed fallback availability fetch for ${L}:`,
                            re
                          );
                        }
                      return { date: L, data: J };
                    }
                  ),
                  $ = await Promise.all(T),
                  U = new Map();
                for (const { date: L, data: J } of $)
                  if (!(!J || !J.operators))
                    for (const re of J.operators) {
                      const ae = re.operator;
                      U.has(ae) || U.set(ae, { operator: ae, cabins: [] });
                      const _e = U.get(ae);
                      for (const z of re.cabins || []) {
                        const de =
                          typeof z == "string"
                            ? { name: z, start_date: L }
                            : { ...z, start_date: z.start_date || L };
                        _e.cabins.push(de);
                      }
                    }
                const K = {
                  ok: !0,
                  operators: Array.from(U.values()),
                  total: Array.from(U.values()).reduce(
                    (L, J) => L + J.cabins.length,
                    0
                  ),
                };
                (ne.value = K),
                  console.log(
                    "[Results] Loaded global availability:",
                    K.total,
                    "total cabins"
                  );
              } catch (_) {
                console.debug("[Results] global availability error", _);
              }
            Ze.value.length === 0 &&
              (xe.value =
                "No availability data found for the selected dates and ships.");
          } catch (s) {
            (xe.value = `Failed to check availability: ${s.message}`),
              console.error("[Results] Availability check error:", s);
          } finally {
            (fe.value = !1),
              console.log("[Results] Availability check complete");
          }
        }
      }
      const ua = () => ns();
      function da() {
        try {
          const s = nt.value.filter((u) => Oe.value.includes(u.id)),
            t = s.map((u) => u.label),
            a = s.map((u) => u.sheet),
            r = {
              region: ms,
              destination: Ne.value[0] || "",
              destinations: Ne.value.slice(),
              ships: t,
              shipSheets: a,
              ship: t[0] || "",
              lodges: t.slice(),
              dateFrom: c.value,
              dateTo: y.value || c.value,
              minTripDuration: P.value,
              maxTripDuration: D.value,
              cabins: ce.value
                ? []
                : Y.value.map((u) => ({
                    adults: u.adults,
                    children: u.children,
                    total: u.adults + u.children,
                  })),
              totalCabins: ce.value ? 0 : Y.value.length,
              totalGuests: Be.value,
              isFlexible: ce.value,
              flexibleGuests: ce.value ? ue.value : 0,
              adults: ce.value
                ? ue.value
                : Y.value.reduce((u, n) => u + n.adults, 0),
              children: ce.value
                ? 0
                : Y.value.reduce((u, n) => u + n.children, 0),
              age3_9: 0,
              age0_2: 0,
              timestamp: Date.now(),
            };
          if (
            ((I.value = s.map((u) => ({ label: u.label, sheet: u.sheet }))),
            localStorage.setItem("komodo_search_criteria", JSON.stringify(r)),
            (me.value = r),
            c.value)
          ) {
            const u = new Date(c.value);
            (ft.value = u.getMonth()), ($t.value = u.getFullYear());
          }
          ns();
        } catch (s) {
          console.error("Failed to apply sidebar changes", s),
            alert("Failed to apply changes");
        }
      }
      function va(s) {
        return [qs.value, Ws.value, Hs.value, Ys.value, Js.value].some(
          (a) => a && (a === s || a.contains(s))
        );
      }
      function bn(s) {
        va(s.target) || qn();
      }
      document.addEventListener("click", bn),
        In(() => {
          document.removeEventListener("click", bn);
        }),
        Qe(async () => {
          Et();
          try {
            const s = localStorage.getItem("komodo_search_criteria");
            if (s) {
              me.value = JSON.parse(s);
              const t = me.value || {};
              (Ne.value = Array.isArray(t.destinations)
                ? t.destinations.slice()
                : t.destination
                ? [t.destination]
                : []),
                (ce.value = !!t.isFlexible),
                (ue.value = t.flexibleGuests || 2);
              const a = Array.isArray(t.ships) ? t.ships : [],
                r = Array.isArray(t.shipSheets) ? t.shipSheets : [];
              if (
                ((I.value = a.map((u, n) => ({ label: u, sheet: r[n] || "" }))),
                (c.value = t.dateFrom || ""),
                (y.value = t.dateTo || ""),
                t.minTripDuration !== void 0
                  ? (P.value = t.minTripDuration)
                  : (P.value = 1),
                t.maxTripDuration !== void 0
                  ? (D.value = t.maxTripDuration)
                  : (D.value = Xe),
                Array.isArray(t.cabins) && t.cabins.length > 0
                  ? (Y.value = t.cabins.map((u, n) => ({
                      id: n + 1,
                      adults: u.adults || 2,
                      children: u.children || 0,
                      expanded: n === 0,
                    })))
                  : (Y.value = [
                      {
                        id: 1,
                        adults: t.totalGuests || t.adults || 2,
                        children: 0,
                        expanded: !0,
                      },
                    ]),
                c.value)
              ) {
                const u = new Date(c.value);
                (ft.value = u.getMonth()), ($t.value = u.getFullYear());
              }
            }
            gn().catch((t) =>
              console.warn("Failed to load details background:", t)
            ),
              ca().catch((t) =>
                console.warn("Failed to load ship details background:", t)
              ),
              await Promise.all([ra(), ns()]);
          } catch (s) {
            console.error("Failed to load search criteria:", s),
              (xe.value = "Failed to load search criteria");
          }
        });
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
      function yn(s) {
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
      function pa(s, t) {
        return s && typeof s != "string" && s.shipname
          ? s.shipname
          : (t || "").replace(/\([^)]*\)/g, "").trim();
      }
      function Is(s) {
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
      function ma(s) {
        if (!s) return 2;
        const t = s.detail || s;
        if (typeof t.capacity == "number") return t.capacity;
        const r = (t.capacityText || s.capacityText || "").match(/(\d+)/);
        return r ? parseInt(r[1], 10) : 2;
      }
      function kn(s) {
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
      function fa(s) {
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
        (t = t.replace(/\([^)]*\)/g, " ")), (t = t.replace(/[\-–—_/]+/g, " "));
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
            .map((u) => u.trim())
            .filter((u) => u && !a.has(u))
            .map((u) => u.replace(/[^a-z0-9]/g, ""))
            .filter(Boolean);
        return r.length ? r.sort().join(" ") : "";
      }
      function ha(s) {
        const t = s && (s.detail || s),
          a =
            (t == null ? void 0 : t.cabin_name) ||
            (t == null ? void 0 : t.api_name);
        return a && String(a).trim()
          ? String(a).trim()
          : (s == null ? void 0 : s.cabinName) || "";
      }
      function ga(s, t) {
        if (!s || !t) return null;
        const a = new Date(s + "T00:00:00"),
          r = new Date(a);
        return r.setDate(r.getDate() + (Number(t) - 1)), r;
      }
      function ba(s, t, a, r) {
        if (!s || !t || !a || !r) return !0;
        const u = new Date(s + "T00:00:00"),
          n = ga(s, t),
          d = new Date(a + "T00:00:00"),
          p = new Date(r + "T00:00:00");
        return u <= p && n >= d;
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
          u = {
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
        for (const [n, d] of Object.entries(u))
          if ((r[n] && a.push(d), a.length >= 8)) break;
        return (
          a.length === 0 &&
            a.push(
              "All cabins are non-smoking",
              "Private bathroom",
              "Air conditioning",
              "Daily housekeeping",
              "Private bathroom",
              "Air conditioning"
            ),
          a
        );
      }
      function wn(s) {
        if (!s) return "";
        try {
          const t = String(s),
            a = _n(t);
          return a ? `https://lh3.googleusercontent.com/d/${a}=w1600` : t;
        } catch {
          return s;
        }
      }
      function _n(s) {
        if (!s) return "";
        const t = String(s).match(/\/d\/([^/?#]+)/),
          a = String(s).match(/[?&]id=([^&]+)/);
        return (t && t[1]) || (a && a[1]) || "";
      }
      function ya(s) {
        const t = [],
          a = String(s || ""),
          r = _n(a);
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
      function Cn(s, t) {
        const a = s == null ? void 0 : s.target;
        if (!a) return;
        const r = parseInt(a.getAttribute("data-try") || "0", 10),
          u = ya(t);
        r < u.length - 1
          ? (a.setAttribute("data-try", String(r + 1)), (a.src = u[r + 1]))
          : (a.src = "/src/images/cabin.jpg");
      }
      function Ns(s) {
        if (!s || typeof s == "string") return "";
        const t = [];
        s.image_main && t.push(s.image_main),
          Array.isArray(s.images) && t.push(...s.images);
        for (let r = 1; r <= 10; r++) {
          const u = `image_${r}`;
          s[u] && t.push(s[u]);
        }
        const a = t.find((r) => !!r && String(r).trim().length > 0) || "";
        return a ? wn(a) : "";
      }
      function dt(s) {
        if (typeof s == "string") {
          const a = s.match(/\(([^)]+)\)$/);
          if (a && a[1]) {
            const r = (a[1].match(/\d+/g) || []).map((u) => parseInt(u, 10));
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
      function gt(s) {
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
      function ka(s, t) {
        const a = ye(s);
        return t.some((r) => a.includes(r) || r.includes(a));
      }
      function wa(s) {
        if (!s) return [];
        const t = [],
          a = s.match(/\(([^)]+)\)/g);
        a && a.forEach((d) => t.push(d.replace(/[()]/g, " "))), t.push(s);
        const u = t
            .join(" | ")
            .split(/[+|,\/]/)
            .map((d) => d.replace(/\b(pax|guests?)\b/gi, "").trim())
            .filter(Boolean)
            .filter((d) => !/^\d+(\s*-\s*\d+)?$/.test(d))
            .map((d) =>
              d
                .split(" ")
                .map((p) =>
                  p ? p[0].toUpperCase() + p.slice(1).toLowerCase() : ""
                )
                .filter(Boolean)
                .join(" ")
            ),
          n = [];
        for (const d of u) {
          const p = d.toLowerCase();
          n.some((N) => N.toLowerCase() === p) || n.push(d);
        }
        return n;
      }
      function Ms(s) {
        if (!s) return null;
        const a = String(s).match(/\d+/g);
        if (!a || a.length === 0) return null;
        const r = a.map((u) => parseInt(u, 10));
        return Math.max(...r);
      }
      function Es(s, t = Ot) {
        var N, _;
        if (s == null) return null;
        if (typeof s == "number" && !Number.isNaN(s))
          return { amount: s, currency: t };
        const a = String(s).trim();
        if (!a) return null;
        const r = a.match(/([^\d]*)([\d.,\s]+)/);
        if (!r) return null;
        let u =
            ((N = r[1]) == null ? void 0 : N.replace(/from/gi, "").trim()) || t,
          n = (_ = r[2]) == null ? void 0 : _.trim();
        if (!n) return null;
        (n = n.replace(/[\s,]/g, "")),
          (n.match(/\./g) || []).length > 1 && (n = n.replace(/\./g, ""));
        const p = parseFloat(n);
        return Number.isNaN(p) ? null : { amount: p, currency: u };
      }
      function $n(s, t = Ot) {
        return Number.isFinite(s)
          ? `${t || Ot} ${Math.round(s).toLocaleString("en-US")}`
          : "";
      }
      function _a(s) {
        if (!(s != null && s.price)) return "";
        const t = Es(s.price, Ot);
        if (!t) return "";
        const a = Number((s == null ? void 0 : s.guests) || 2),
          r = t.amount * (Number.isFinite(a) ? a : 2);
        return $n(r, t.currency);
      }
      function Ca(s) {
        (pe.value = s), (Ee.value = !0), cs();
      }
      function Rs() {
        (Ee.value = !1), (pe.value = null), (He.value = 1), Ps();
      }
      function $a() {
        (We.value = !0), cs();
      }
      function Sa() {
        (We.value = !1), Ps();
      }
      function rs() {
        (tt.value = !1),
          (De.value = null),
          (Re.value = 2),
          (et.value = null),
          Ps();
      }
      function xa() {
        const s = Ts.value;
        Re.value = Math.min(s, Re.value + 1);
      }
      function Da() {
        Re.value = Math.max(1, Re.value - 1);
      }
      function Ta() {
        et.value !== null
          ? (Ia(et.value, Re.value), rs())
          : De.value && (Na(De.value, Re.value), rs());
      }
      function Aa(s, t) {
        (De.value = {
          cabinName: s.cabin,
          shipName: s.ship,
          date: s.date,
          capacityText: s.capacity || "4 guests",
          availableText: s.capacity ? `${s.capacity} capacity` : "Available",
        }),
          (et.value = t),
          (Re.value = s.guests || 2),
          (tt.value = !0),
          cs();
      }
      function Ia(s, t) {
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
      function Sn(s) {
        return R.value.some(
          (t) =>
            t.cabin === (s.title || s.cabinName) &&
            t.ship === s.shipName &&
            t.date === s.date
        );
      }
      function Gt(s, t) {
        if (!s || !t) return !1;
        const a = s.originalItem;
        if (!a) return !1;
        const r = s.title || a.cabinName;
        return R.value.some(
          (u) => u.cabin === r && u.ship === a.shipName && u.date === t.date
        );
      }
      function xn(s) {
        var t;
        if (Sn(s)) Ma(s);
        else {
          De.value = s;
          const a = Number(
            ((t = me.value) == null ? void 0 : t.totalGuests) || 2
          );
          let r = dt(s);
          !r && s.originalItem && (r = dt(s.originalItem)),
            !r && s.capacityText && (r = Ms(s.capacityText));
          const u = r || 4;
          (Re.value = Math.min(a, u)), (tt.value = !0), cs();
        }
      }
      function Na(s, t = 2) {
        try {
          const a = "komodo_itinerary",
            r = JSON.parse(localStorage.getItem(a) || "[]"),
            u = s.title || s.cabinName;
          if (
            r.some(
              (p) => p.cabin === u && p.ship === s.shipName && p.date === s.date
            )
          )
            return;
          const d = {
            operator: s.operatorLabel,
            ship: s.shipName,
            cabin: u,
            date: s.date,
            price: s.price || null,
            capacity: s.capacityText || null,
            guests: t,
            qty: 1,
            addedAt: Date.now(),
          };
          r.push(d), localStorage.setItem(a, JSON.stringify(r)), Et();
        } catch (a) {
          console.error("Failed to add to itinerary", a);
        }
      }
      function Ma(s) {
        try {
          const t = "komodo_itinerary",
            a = JSON.parse(localStorage.getItem(t) || "[]"),
            r = s.title || s.cabinName,
            u = a.filter(
              (n) =>
                !(n.cabin === r && n.ship === s.shipName && n.date === s.date)
            );
          localStorage.setItem(t, JSON.stringify(u)), Et();
        } catch (t) {
          console.error("Failed to remove from itinerary", t);
        }
      }
      function Ea() {
        qe.value = !0;
      }
      function Ra() {
        qe.value = !1;
      }
      function Pa() {
        (qe.value = !1), ge.push("/results");
      }
      function Et() {
        try {
          const t = JSON.parse(
            localStorage.getItem("komodo_itinerary") || "[]"
          );
          R.value = Array.isArray(t) ? t : [];
        } catch {
          R.value = [];
        }
      }
      function Oa(s) {
        try {
          const t = "komodo_itinerary",
            a = JSON.parse(localStorage.getItem(t) || "[]");
          a.splice(s, 1), localStorage.setItem(t, JSON.stringify(a)), Et();
        } catch (t) {
          console.error("Failed to remove item", t);
        }
      }
      const Ye = {
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
          if (Ye.count === 0) {
            const a = window.innerWidth - t.clientWidth;
            if (
              ((Ye.bodyOverflow = s.style.overflow),
              (Ye.htmlOverflow = t.style.overflow),
              (Ye.bodyPadding = s.style.paddingRight),
              (Ye.htmlPadding = t.style.paddingRight),
              a > 0)
            ) {
              const r = `${a}px`;
              (s.style.paddingRight = r), (t.style.paddingRight = r);
            }
            (s.style.overflow = "hidden"), (t.style.overflow = "hidden");
          }
          Ye.count++;
        }
      }
      function Ps() {
        const s = document.body,
          t = document.documentElement;
        !s ||
          !t ||
          (Ye.count !== 0 &&
            (Ye.count--,
            !(Ye.count > 0) &&
              ((s.style.overflow = Ye.bodyOverflow),
              (t.style.overflow = Ye.htmlOverflow),
              (s.style.paddingRight = Ye.bodyPadding),
              (t.style.paddingRight = Ye.htmlPadding))));
      }
      const ee = m({
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
      async function La() {
        if (!ee.value.firstName || !ee.value.lastName) {
          alert("Please enter your first and last name");
          return;
        }
        if (!ee.value.email || ee.value.email !== ee.value.confirmEmail) {
          alert("Please ensure email addresses match");
          return;
        }
        if (!ee.value.consentData) {
          alert("Please consent to data collection to proceed");
          return;
        }
        if (!R.value.length) {
          alert("Please add at least one cabin to your itinerary");
          return;
        }
        let s = 0;
        const t = [];
        for (const a of R.value) {
          const r = St(a.price),
            u = Number(a.guests || 2),
            n = r * u;
          (s += n),
            t.push({
              name: `${a.ship} - ${a.cabin}`,
              quantity: u,
              price: r,
              category: "Cruise Cabin",
            });
        }
        s <= 0 &&
          ((s = 1e6),
          t.push({
            name: "Komodo Cruise Booking",
            quantity: 1,
            price: s,
            category: "Cruise Booking",
          })),
          (Le.value = !0);
        try {
          const r = `Komodo Cruise Booking: ${R.value
              .map((n) => `${n.ship} - ${n.cabin}`)
              .join(", ")}`,
            u = await ec({
              amount: s,
              payerEmail: ee.value.email,
              description: r,
              customerName: `${ee.value.title ? ee.value.title + " " : ""}${
                ee.value.firstName
              } ${ee.value.lastName}`,
              customerPhone: ee.value.phoneCountry + ee.value.phoneNumber,
              items: t,
            });
          if (
            (localStorage.setItem(
              "komodo_last_enquiry",
              JSON.stringify({
                form: ee.value,
                itinerary: R.value,
                invoiceId: u.invoiceId,
                invoiceUrl: u.invoiceUrl,
                amount: s,
                createdAt: new Date().toISOString(),
              })
            ),
            u.invoiceUrl)
          )
            tc(u.invoiceUrl);
          else throw new Error("No invoice URL received");
        } catch (a) {
          console.error("Failed to create payment:", a),
            alert(`Failed to process payment: ${a.message}. Please try again.`);
        } finally {
          Le.value = !1;
        }
      }
      function Dn(s, t) {
        if (!s || !t) return s ? [s] : [];
        const a = new Date(s),
          r = new Date(t),
          u = [];
        for (let n = new Date(a); n <= r; n.setDate(n.getDate() + 1))
          u.push(us(n));
        return u;
      }
      function Ba(s, t) {
        const a = new Date(s);
        return a.setDate(a.getDate() + t), us(a);
      }
      function us(s) {
        const t = s.getFullYear(),
          a = String(s.getMonth() + 1).padStart(2, "0"),
          r = String(s.getDate()).padStart(2, "0");
        return `${t}-${a}-${r}`;
      }
      function Fa() {
        return us(new Date());
      }
      return (
        Et(),
        (s, t) => {
          var a, r, u;
          return (
            o(),
            i(
              V,
              null,
              [
                e("div", sc, [
                  fe.value
                    ? (o(), i("div", nc, "Loading"))
                    : (o(),
                      i("div", ac, [
                        e("div", oc, [
                          e("div", ic, [
                            e("div", lc, [
                              e("div", rc, [
                                t[62] ||
                                  (t[62] = e(
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
                                    -1
                                  )),
                                e(
                                  "span",
                                  null,
                                  l(Y.value.length) +
                                    " cabin" +
                                    l(Y.value.length !== 1 ? "s" : "") +
                                    ", " +
                                    l(Be.value) +
                                    " guest" +
                                    l(Be.value !== 1 ? "s" : ""),
                                  1
                                ),
                              ]),
                              e("div", cc, [
                                t[63] ||
                                  (t[63] = Pe(
                                    '<svg class="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
                                    1
                                  )),
                                e("span", null, l(te(c.value, y.value)), 1),
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
                              ...(t[64] ||
                                (t[64] = [
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
                                    -1
                                  ),
                                ])),
                            ]
                          ),
                        ]),
                        e("div", uc, [
                          e("div", dc, [
                            xe.value
                              ? (o(),
                                i("div", vc, [
                                  e("p", pc, l(xe.value), 1),
                                  e(
                                    "button",
                                    { onClick: ua, class: "btn-primary" },
                                    "Try Again"
                                  ),
                                ]))
                              : (o(),
                                i("div", mc, [
                                  t[83] ||
                                    (t[83] = e(
                                      "h2",
                                      { class: "results-title" },
                                      "Your Search Results",
                                      -1
                                    )),
                                  e("div", fc, [
                                    es.value.length &&
                                    ($s.value || ut.value.length > 0)
                                      ? (o(),
                                        i("div", hc, [
                                          ...(t[65] ||
                                            (t[65] = [
                                              e(
                                                "p",
                                                { class: "desktop-only" },
                                                [
                                                  e(
                                                    "strong",
                                                    null,
                                                    "Your preferred travel dates are available!"
                                                  ),
                                                  Q(
                                                    " We have a team of Komodo Cruises Journey Designers who are ready to plan your trip. Simply select the results that suit your preferences best and submit your enquiry. "
                                                  ),
                                                ],
                                                -1
                                              ),
                                              e(
                                                "p",
                                                { class: "mobile-only" },
                                                [
                                                  e(
                                                    "strong",
                                                    null,
                                                    "Your preferred dates are available!"
                                                  ),
                                                  Q(
                                                    " Select results below and submit your enquiry. "
                                                  ),
                                                ],
                                                -1
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
                                                    "Note:"
                                                  ),
                                                  Q(
                                                    " These results indicate availability and do not guarantee a booking. "
                                                  ),
                                                ],
                                                -1
                                              ),
                                            ])),
                                        ]))
                                      : mt.value
                                      ? M("", !0)
                                      : (o(),
                                        i("div", gc, [
                                          ...(t[66] ||
                                            (t[66] = [
                                              Pe(
                                                '<p class="desktop-only"><strong>Your preferred dates are unfortunately not available, but there is availability at other Komodo Cruises lodges or on alternate dates.</strong></p><p class="desktop-only"> We have a team of Komodo Cruises Journey Designers who are ready to plan your trip. Simply select the results that suit your preferences best and submit your enquiry. </p><p class="mobile-only"><strong>Dates not available.</strong> Check alternatives below and submit enquiry. </p><p class="results-note-muted desktop-only"><span class="semibold">Note:</span> These results indicate availability and do not guarantee a booking. </p>',
                                                4
                                              ),
                                            ])),
                                        ])),
                                  ]),
                                  ut.value.length
                                    ? (o(),
                                      i("div", bc, [
                                        e("div", yc, [
                                          e(
                                            "div",
                                            {
                                              class: "sort-dropdown",
                                              ref_key: "sortDropdownRef",
                                              ref: Vn,
                                            },
                                            [
                                              t[67] ||
                                                (t[67] = e(
                                                  "span",
                                                  { class: "sort-label" },
                                                  "SORT BY",
                                                  -1
                                                )),
                                              e(
                                                "button",
                                                {
                                                  type: "button",
                                                  class: "sort-btn",
                                                  onClick:
                                                    t[1] ||
                                                    (t[1] = (n) =>
                                                      (pt.value = !pt.value)),
                                                  "aria-expanded": pt.value,
                                                },
                                                [
                                                  e(
                                                    "span",
                                                    null,
                                                    l(
                                                      ((a = Lt.find(
                                                        (n) =>
                                                          n.value === st.value
                                                      )) == null
                                                        ? void 0
                                                        : a.label) ||
                                                        "Recommended"
                                                    ),
                                                    1
                                                  ),
                                                  e(
                                                    "img",
                                                    {
                                                      src: pt.value
                                                        ? he(ot)
                                                        : he(at),
                                                      alt: "",
                                                      class: "sort-caret",
                                                    },
                                                    null,
                                                    8,
                                                    wc
                                                  ),
                                                ],
                                                8,
                                                kc
                                              ),
                                              pt.value
                                                ? (o(),
                                                  i(
                                                    "div",
                                                    {
                                                      key: 0,
                                                      class:
                                                        "sort-dropdown-panel",
                                                      onClick:
                                                        t[2] ||
                                                        (t[2] = j(() => {}, [
                                                          "stop",
                                                        ])),
                                                    },
                                                    [
                                                      (o(),
                                                      i(
                                                        V,
                                                        null,
                                                        se(Lt, (n) =>
                                                          e(
                                                            "button",
                                                            {
                                                              key: n.value,
                                                              class: B([
                                                                "sort-option",
                                                                {
                                                                  active:
                                                                    st.value ===
                                                                    n.value,
                                                                },
                                                              ]),
                                                              onClick: (d) => {
                                                                (st.value =
                                                                  n.value),
                                                                  (pt.value =
                                                                    !1);
                                                              },
                                                            },
                                                            l(n.label),
                                                            11,
                                                            _c
                                                          )
                                                        ),
                                                        64
                                                      )),
                                                    ]
                                                  ))
                                                : M("", !0),
                                            ],
                                            512
                                          ),
                                        ]),
                                        e("div", Cc, [
                                          e(
                                            "span",
                                            $c,
                                            l(ut.value.length) +
                                              " " +
                                              l(
                                                ut.value.length === 1
                                                  ? "Cabin"
                                                  : "Cabins"
                                              ),
                                            1
                                          ),
                                        ]),
                                      ]))
                                    : M("", !0),
                                  be(
                                    e(
                                      "div",
                                      Sc,
                                      [
                                        e("div", xc, [
                                          t[68] ||
                                            (t[68] = e(
                                              "h3",
                                              { class: "ship-selection-title" },
                                              "Select a Ship",
                                              -1
                                            )),
                                          e(
                                            "p",
                                            Dc,
                                            " You selected " +
                                              l(Zt.value.length) +
                                              " ships. Please choose one to view available cabins. ",
                                            1
                                          ),
                                        ]),
                                        e("div", Tc, [
                                          (o(!0),
                                          i(
                                            V,
                                            null,
                                            se(
                                              jn.value,
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
                                                    e("div", Ic, [
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
                                                        Nc
                                                      ),
                                                    ]),
                                                    e("div", Mc, [
                                                      e("h4", Ec, l(n.name), 1),
                                                      n.description
                                                        ? (o(),
                                                          i(
                                                            "p",
                                                            Rc,
                                                            l(n.description),
                                                            1
                                                          ))
                                                        : M("", !0),
                                                      n.hasAvailability
                                                        ? (o(),
                                                          i("div", Pc, [
                                                            e(
                                                              "span",
                                                              null,
                                                              l(n.cabinsCount) +
                                                                " cabin" +
                                                                l(
                                                                  n.cabinsCount !==
                                                                    1
                                                                    ? "s"
                                                                    : ""
                                                                ) +
                                                                " available",
                                                              1
                                                            ),
                                                            e(
                                                              "span",
                                                              Oc,
                                                              "Up to " +
                                                                l(
                                                                  n.totalCapacity
                                                                ) +
                                                                " guests",
                                                              1
                                                            ),
                                                          ]))
                                                        : (o(),
                                                          i("div", Lc, [
                                                            ...(t[69] ||
                                                              (t[69] = [
                                                                e(
                                                                  "span",
                                                                  {
                                                                    class:
                                                                      "no-availability-text",
                                                                  },
                                                                  "No availability for selected dates",
                                                                  -1
                                                                ),
                                                              ])),
                                                          ])),
                                                    ]),
                                                    t[70] ||
                                                      (t[70] = e(
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
                                                            ]
                                                          ),
                                                        ],
                                                        -1
                                                      )),
                                                  ],
                                                  8,
                                                  Ac
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                        ]),
                                      ],
                                      512
                                    ),
                                    [[Nn, $s.value]]
                                  ),
                                  be(
                                    e(
                                      "div",
                                      Bc,
                                      [
                                        je.value && Zt.value.length > 1
                                          ? (o(),
                                            i("div", Fc, [
                                              e(
                                                "button",
                                                {
                                                  class: "btn-back-ships",
                                                  onClick: Qn,
                                                },
                                                [
                                                  ...(t[71] ||
                                                    (t[71] = [
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
                                                        -1
                                                      ),
                                                      Q(" Back to Ships ", -1),
                                                    ])),
                                                ]
                                              ),
                                              e("span", zc, [
                                                t[72] ||
                                                  (t[72] = Q("Viewing: ", -1)),
                                                e(
                                                  "strong",
                                                  null,
                                                  l(je.value),
                                                  1
                                                ),
                                              ]),
                                            ]))
                                          : M("", !0),
                                        ut.value.length === 0
                                          ? (o(),
                                            i("div", Uc, [
                                              ...(t[73] ||
                                                (t[73] = [
                                                  e(
                                                    "div",
                                                    { class: "desktop-only" },
                                                    [
                                                      e("p", null, [
                                                        e(
                                                          "strong",
                                                          null,
                                                          "No results found."
                                                        ),
                                                      ]),
                                                      e(
                                                        "p",
                                                        null,
                                                        " We could not find any availability matching your search. Please try adjusting your filters. "
                                                      ),
                                                    ],
                                                    -1
                                                  ),
                                                  e(
                                                    "div",
                                                    { class: "mobile-only" },
                                                    [
                                                      e("p", null, [
                                                        e(
                                                          "strong",
                                                          null,
                                                          "No results found."
                                                        ),
                                                      ]),
                                                      e(
                                                        "p",
                                                        null,
                                                        "Please try adjusting your filters."
                                                      ),
                                                    ],
                                                    -1
                                                  ),
                                                ])),
                                            ]))
                                          : M("", !0),
                                        ut.value.length
                                          ? (o(),
                                            i("div", Gc, [
                                              (o(!0),
                                              i(
                                                V,
                                                null,
                                                se(
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
                                                        e("div", Kc, [
                                                          ke(
                                                            xt,
                                                            {
                                                              name:
                                                                n.isGallery &&
                                                                Se(n.id) ===
                                                                  "left"
                                                                  ? "slide-left"
                                                                  : "slide-right",
                                                            },
                                                            {
                                                              default: Me(
                                                                () => [
                                                                  (o(),
                                                                  i(
                                                                    "img",
                                                                    {
                                                                      src: n.isGallery
                                                                        ? q(
                                                                            n.originalItem
                                                                          )[
                                                                            W(
                                                                              n.id
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
                                                                        d
                                                                      ) =>
                                                                        Cn(
                                                                          d,
                                                                          n.image
                                                                        ),
                                                                      key: n.isGallery
                                                                        ? W(
                                                                            n.id
                                                                          )
                                                                        : 0,
                                                                    },
                                                                    null,
                                                                    40,
                                                                    Vc
                                                                  )),
                                                                ]
                                                              ),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["name"]
                                                          ),
                                                          n.isGallery
                                                            ? (o(),
                                                              i(
                                                                V,
                                                                { key: 0 },
                                                                [
                                                                  e(
                                                                    "button",
                                                                    {
                                                                      class:
                                                                        "gallery-nav gallery-prev",
                                                                      onClick: (
                                                                        d
                                                                      ) =>
                                                                        ie(
                                                                          n.id
                                                                        ),
                                                                      "aria-label":
                                                                        "Previous image",
                                                                    },
                                                                    " ‹ ",
                                                                    8,
                                                                    qc
                                                                  ),
                                                                  e(
                                                                    "button",
                                                                    {
                                                                      class:
                                                                        "gallery-nav gallery-next",
                                                                      onClick: (
                                                                        d
                                                                      ) =>
                                                                        O(n.id),
                                                                      "aria-label":
                                                                        "Next image",
                                                                    },
                                                                    " › ",
                                                                    8,
                                                                    Wc
                                                                  ),
                                                                ],
                                                                64
                                                              ))
                                                            : M("", !0),
                                                        ]),
                                                        e("div", Hc, [
                                                          e("div", Yc, [
                                                            e(
                                                              "h3",
                                                              Jc,
                                                              l(n.title),
                                                              1
                                                            ),
                                                            e(
                                                              "span",
                                                              jc,
                                                              l(
                                                                Is(
                                                                  n.originalItem
                                                                )
                                                              ),
                                                              1
                                                            ),
                                                          ]),
                                                          e("div", Xc, [
                                                            e(
                                                              "span",
                                                              null,
                                                              "Sleeps " +
                                                                l(
                                                                  ma(
                                                                    n.originalItem
                                                                  ) || 2
                                                                ),
                                                              1
                                                            ),
                                                            t[75] ||
                                                              (t[75] = e(
                                                                "span",
                                                                {
                                                                  class:
                                                                    "specs-divider",
                                                                },
                                                                "|",
                                                                -1
                                                              )),
                                                            e(
                                                              "span",
                                                              null,
                                                              l(
                                                                kn(
                                                                  n.originalItem
                                                                ) || "1 King"
                                                              ),
                                                              1
                                                            ),
                                                            is(n.originalItem)
                                                              ? (o(),
                                                                i(
                                                                  V,
                                                                  { key: 0 },
                                                                  [
                                                                    t[74] ||
                                                                      (t[74] =
                                                                        e(
                                                                          "span",
                                                                          {
                                                                            class:
                                                                              "specs-divider",
                                                                          },
                                                                          "|",
                                                                          -1
                                                                        )),
                                                                    e(
                                                                      "span",
                                                                      null,
                                                                      l(
                                                                        is(
                                                                          n.originalItem
                                                                        )
                                                                      ) +
                                                                        " Days",
                                                                      1
                                                                    ),
                                                                  ],
                                                                  64
                                                                ))
                                                              : M("", !0),
                                                          ]),
                                                          e("div", Qc, [
                                                            e("ul", Zc, [
                                                              (o(!0),
                                                              i(
                                                                V,
                                                                null,
                                                                se(
                                                                  Mt(
                                                                    n.originalItem
                                                                  ).slice(0, 3),
                                                                  (d, p) => (
                                                                    o(),
                                                                    i(
                                                                      "li",
                                                                      {
                                                                        key: p,
                                                                      },
                                                                      l(d),
                                                                      1
                                                                    )
                                                                  )
                                                                ),
                                                                128
                                                              )),
                                                            ]),
                                                            Mt(n.originalItem)
                                                              .length > 3
                                                              ? (o(),
                                                                i("ul", eu, [
                                                                  (o(!0),
                                                                  i(
                                                                    V,
                                                                    null,
                                                                    se(
                                                                      Mt(
                                                                        n.originalItem
                                                                      ).slice(
                                                                        3,
                                                                        6
                                                                      ),
                                                                      (
                                                                        d,
                                                                        p
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
                                                                          1
                                                                        )
                                                                      )
                                                                    ),
                                                                    128
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
                                                                Ca(
                                                                  n.originalItem
                                                                ),
                                                            },
                                                            " CABIN DETAILS ",
                                                            8,
                                                            tu
                                                          ),
                                                          n.trips &&
                                                          n.trips.length > 0
                                                            ? (o(),
                                                              i("div", su, [
                                                                e("div", nu, [
                                                                  e("div", au, [
                                                                    e(
                                                                      "span",
                                                                      ou,
                                                                      l(
                                                                        fn(
                                                                          ht(n)
                                                                            .date,
                                                                          ht(n)
                                                                            .tripDays
                                                                        )
                                                                      ),
                                                                      1
                                                                    ),
                                                                    e(
                                                                      "span",
                                                                      iu,
                                                                      l(
                                                                        ht(n)
                                                                          .available ||
                                                                          1
                                                                      ) +
                                                                        " cabin" +
                                                                        l(
                                                                          (ht(n)
                                                                            .available ||
                                                                            1) >
                                                                            1
                                                                            ? "s"
                                                                            : ""
                                                                        ) +
                                                                        " available",
                                                                      1
                                                                    ),
                                                                  ]),
                                                                ]),
                                                                n.trips.length >
                                                                1
                                                                  ? (o(),
                                                                    i(
                                                                      "button",
                                                                      {
                                                                        key: 0,
                                                                        class:
                                                                          "more-dates-toggle",
                                                                        onClick:
                                                                          j(
                                                                            (
                                                                              d
                                                                            ) =>
                                                                              oa(
                                                                                n.uniqueKey
                                                                              ),
                                                                            [
                                                                              "stop",
                                                                            ]
                                                                          ),
                                                                      },
                                                                      [
                                                                        t[76] ||
                                                                          (t[76] =
                                                                            e(
                                                                              "span",
                                                                              null,
                                                                              "MORE DATES",
                                                                              -1
                                                                            )),
                                                                        e(
                                                                          "span",
                                                                          {
                                                                            class:
                                                                              B(
                                                                                [
                                                                                  "toggle-arrow",
                                                                                  {
                                                                                    expanded:
                                                                                      rt
                                                                                        .value[
                                                                                        n
                                                                                          .uniqueKey
                                                                                      ],
                                                                                  },
                                                                                ]
                                                                              ),
                                                                          },
                                                                          "▼",
                                                                          2
                                                                        ),
                                                                      ],
                                                                      8,
                                                                      lu
                                                                    ))
                                                                  : M("", !0),
                                                                n.trips.length >
                                                                  1 &&
                                                                rt.value[
                                                                  n.uniqueKey
                                                                ]
                                                                  ? (o(),
                                                                    i(
                                                                      "div",
                                                                      ru,
                                                                      [
                                                                        (o(!0),
                                                                        i(
                                                                          V,
                                                                          null,
                                                                          se(
                                                                            ia(
                                                                              n
                                                                            ),
                                                                            (
                                                                              d,
                                                                              p
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
                                                                                        Gt(
                                                                                          n,
                                                                                          d
                                                                                        )
                                                                                          ? "trip-reserved"
                                                                                          : "",
                                                                                      ]
                                                                                    ),
                                                                                  onClick:
                                                                                    (
                                                                                      N
                                                                                    ) =>
                                                                                      !Gt(
                                                                                        n,
                                                                                        d
                                                                                      ) &&
                                                                                      aa(
                                                                                        n,
                                                                                        d
                                                                                      ),
                                                                                },
                                                                                [
                                                                                  e(
                                                                                    "div",
                                                                                    uu,
                                                                                    [
                                                                                      e(
                                                                                        "span",
                                                                                        du,
                                                                                        l(
                                                                                          fn(
                                                                                            d.date,
                                                                                            d.tripDays
                                                                                          )
                                                                                        ),
                                                                                        1
                                                                                      ),
                                                                                      e(
                                                                                        "span",
                                                                                        vu,
                                                                                        l(
                                                                                          d.available ||
                                                                                            1
                                                                                        ) +
                                                                                          " cabin" +
                                                                                          l(
                                                                                            (d.available ||
                                                                                              1) >
                                                                                              1
                                                                                              ? "s"
                                                                                              : ""
                                                                                          ) +
                                                                                          " available",
                                                                                        1
                                                                                      ),
                                                                                    ]
                                                                                  ),
                                                                                  Gt(
                                                                                    n,
                                                                                    d
                                                                                  )
                                                                                    ? (o(),
                                                                                      i(
                                                                                        "span",
                                                                                        pu,
                                                                                        [
                                                                                          ...(t[77] ||
                                                                                            (t[77] =
                                                                                              [
                                                                                                e(
                                                                                                  "span",
                                                                                                  {
                                                                                                    class:
                                                                                                      "reserved-check-small",
                                                                                                  },
                                                                                                  "✓",
                                                                                                  -1
                                                                                                ),
                                                                                                Q(
                                                                                                  " Reserved ",
                                                                                                  -1
                                                                                                ),
                                                                                              ])),
                                                                                        ]
                                                                                      ))
                                                                                    : (o(),
                                                                                      i(
                                                                                        "span",
                                                                                        mu,
                                                                                        "Select"
                                                                                      )),
                                                                                ],
                                                                                10,
                                                                                cu
                                                                              )
                                                                            )
                                                                          ),
                                                                          128
                                                                        )),
                                                                      ]
                                                                    ))
                                                                  : M("", !0),
                                                              ]))
                                                            : M("", !0),
                                                          e("div", fu, [
                                                            e("div", hu, [
                                                              (o(!0),
                                                              i(
                                                                V,
                                                                null,
                                                                se(
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
                                                                          gu,
                                                                          [
                                                                            t[78] ||
                                                                              (t[78] =
                                                                                e(
                                                                                  "span",
                                                                                  {
                                                                                    class:
                                                                                      "price-label",
                                                                                  },
                                                                                  "From",
                                                                                  -1
                                                                                )),
                                                                            e(
                                                                              "span",
                                                                              bu,
                                                                              l(
                                                                                w(
                                                                                  d.value
                                                                                )
                                                                              ),
                                                                              1
                                                                            ),
                                                                          ]
                                                                        ),
                                                                        t[79] ||
                                                                          (t[79] =
                                                                            e(
                                                                              "p",
                                                                              {
                                                                                class:
                                                                                  "price-sub",
                                                                              },
                                                                              "per person, per night",
                                                                              -1
                                                                            )),
                                                                      ]
                                                                    )
                                                                  )
                                                                ),
                                                                128
                                                              )),
                                                            ]),
                                                            e("div", yu, [
                                                              e(
                                                                "button",
                                                                {
                                                                  class: B([
                                                                    "btn-reserve-now",
                                                                    Gt(n, ht(n))
                                                                      ? "btn-reserved"
                                                                      : "",
                                                                  ]),
                                                                  onClick: (
                                                                    d
                                                                  ) => la(n),
                                                                },
                                                                [
                                                                  Gt(n, ht(n))
                                                                    ? (o(),
                                                                      i(
                                                                        V,
                                                                        {
                                                                          key: 0,
                                                                        },
                                                                        [
                                                                          t[80] ||
                                                                            (t[80] =
                                                                              e(
                                                                                "span",
                                                                                {
                                                                                  class:
                                                                                    "reserved-check",
                                                                                },
                                                                                "✓",
                                                                                -1
                                                                              )),
                                                                          t[81] ||
                                                                            (t[81] =
                                                                              Q(
                                                                                " RESERVED ",
                                                                                -1
                                                                              )),
                                                                        ],
                                                                        64
                                                                      ))
                                                                    : (o(),
                                                                      i(
                                                                        V,
                                                                        {
                                                                          key: 1,
                                                                        },
                                                                        [
                                                                          Q(
                                                                            " RESERVE NOW "
                                                                          ),
                                                                        ],
                                                                        64
                                                                      )),
                                                                ],
                                                                10,
                                                                ku
                                                              ),
                                                            ]),
                                                          ]),
                                                        ]),
                                                      ]
                                                    )
                                                  )
                                                ),
                                                128
                                              )),
                                            ]))
                                          : M("", !0),
                                        ts.value > 1
                                          ? (o(),
                                            i("div", wu, [
                                              e(
                                                "button",
                                                {
                                                  class: "pagination-btn",
                                                  onClick: sa,
                                                  disabled: it.value === 1,
                                                },
                                                " ‹ Previous ",
                                                8,
                                                _u
                                              ),
                                              e("div", Cu, [
                                                (o(!0),
                                                i(
                                                  V,
                                                  null,
                                                  se(
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
                                                                it.value === n,
                                                            },
                                                          ]),
                                                          onClick: (d) => Ds(n),
                                                        },
                                                        l(n),
                                                        11,
                                                        $u
                                                      )
                                                    )
                                                  ),
                                                  128
                                                )),
                                              ]),
                                              e(
                                                "button",
                                                {
                                                  class: "pagination-btn",
                                                  onClick: ta,
                                                  disabled:
                                                    it.value === ts.value,
                                                },
                                                " Next › ",
                                                8,
                                                Su
                                              ),
                                            ]))
                                          : M("", !0),
                                        mt.value && !ut.value.length
                                          ? (o(),
                                            i("div", xu, [
                                              t[82] ||
                                                (t[82] = e(
                                                  "p",
                                                  null,
                                                  "No alternative options found for your criteria.",
                                                  -1
                                                )),
                                              e(
                                                "button",
                                                {
                                                  onClick: A,
                                                  class: "btn-primary",
                                                },
                                                " Search Again "
                                              ),
                                            ]))
                                          : M("", !0),
                                      ],
                                      512
                                    ),
                                    [[Nn, !$s.value]]
                                  ),
                                ])),
                          ]),
                          e("div", Du, [
                            e("div", Tu, [
                              t[98] ||
                                (t[98] = e(
                                  "h3",
                                  { class: "section-title-sidebar" },
                                  "Check Availability",
                                  -1
                                )),
                              fe.value
                                ? (o(),
                                  i("div", Au, [
                                    ...(t[84] ||
                                      (t[84] = [
                                        Pe(
                                          '<div class="skeleton-group"><div class="skeleton-label"></div><div class="skeleton-input"></div></div><div class="skeleton-group"><div class="skeleton-label"></div><div class="skeleton-input"></div></div><div class="skeleton-group"><div class="skeleton-label"></div><div class="skeleton-input"></div></div><div class="skeleton-group"><div class="skeleton-label"></div><div class="skeleton-input"></div></div><div class="skeleton-toggle"><div class="skeleton-text-lg"></div><div class="skeleton-circle"></div></div><div class="skeleton-btn"></div>',
                                          6
                                        ),
                                      ])),
                                  ]))
                                : (o(),
                                  i(
                                    V,
                                    { key: 1 },
                                    [
                                      e(
                                        "div",
                                        {
                                          class: "list dropdown",
                                          ref_key: "destDropdown",
                                          ref: qs,
                                        },
                                        [
                                          t[85] ||
                                            (t[85] = e(
                                              "div",
                                              { class: "list-heading" },
                                              "Destinations",
                                              -1
                                            )),
                                          e(
                                            "button",
                                            {
                                              type: "button",
                                              class: B([
                                                "select-summary",
                                                Fe.value || bs.value
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
                                                (t[6] = j(
                                                  (n) => It("regions"),
                                                  ["stop"]
                                                )),
                                              "aria-expanded": Fe.value
                                                ? "true"
                                                : "false",
                                            },
                                            [
                                              e(
                                                "span",
                                                null,
                                                "Destinations: " +
                                                  l(Ne.value.length),
                                                1
                                              ),
                                              e("span", Nu, [
                                                e(
                                                  "img",
                                                  {
                                                    src: Fe.value
                                                      ? he(ot)
                                                      : he(at),
                                                    alt: "",
                                                    "aria-hidden": "true",
                                                    class: "caret-icon",
                                                  },
                                                  null,
                                                  8,
                                                  Mu
                                                ),
                                              ]),
                                            ],
                                            42,
                                            Iu
                                          ),
                                          Fe.value
                                            ? (o(),
                                              i(
                                                "div",
                                                {
                                                  key: 0,
                                                  class: "dropdown-panel",
                                                  onClick:
                                                    t[9] ||
                                                    (t[9] = j(() => {}, [
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
                                                    l(ms)
                                                  ),
                                                  (o(),
                                                  i(
                                                    V,
                                                    null,
                                                    se(Dt, (n) =>
                                                      e(
                                                        "div",
                                                        {
                                                          class: "list-row",
                                                          key: n,
                                                          onClick: (d) => js(n),
                                                        },
                                                        [
                                                          e("div", Ru, l(n), 1),
                                                          be(
                                                            e(
                                                              "input",
                                                              {
                                                                class: "check",
                                                                type: "checkbox",
                                                                value: n,
                                                                "onUpdate:modelValue":
                                                                  t[7] ||
                                                                  (t[7] = (d) =>
                                                                    (Ne.value =
                                                                      d)),
                                                                onClick:
                                                                  t[8] ||
                                                                  (t[8] =
                                                                    j(() => {}, [
                                                                      "stop",
                                                                    ])),
                                                              },
                                                              null,
                                                              8,
                                                              Pu
                                                            ),
                                                            [[yt, Ne.value]]
                                                          ),
                                                        ],
                                                        8,
                                                        Eu
                                                      )
                                                    ),
                                                    64
                                                  )),
                                                ]
                                              ))
                                            : M("", !0),
                                        ],
                                        512
                                      ),
                                      e(
                                        "div",
                                        {
                                          class: "list dropdown",
                                          ref_key: "shipsDropdown",
                                          ref: Ws,
                                        },
                                        [
                                          t[86] ||
                                            (t[86] = e(
                                              "div",
                                              { class: "list-heading" },
                                              "Ships",
                                              -1
                                            )),
                                          e(
                                            "button",
                                            {
                                              type: "button",
                                              class: B([
                                                "select-summary",
                                                ze.value || gs.value
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
                                                (t[12] = j(
                                                  (n) => It("ships"),
                                                  ["stop"]
                                                )),
                                              "aria-expanded": ze.value
                                                ? "true"
                                                : "false",
                                            },
                                            [
                                              e(
                                                "span",
                                                null,
                                                "Ships: " + l(Oe.value.length),
                                                1
                                              ),
                                              e("span", Lu, [
                                                e(
                                                  "img",
                                                  {
                                                    src: ze.value
                                                      ? he(ot)
                                                      : he(at),
                                                    alt: "",
                                                    "aria-hidden": "true",
                                                    class: "caret-icon",
                                                  },
                                                  null,
                                                  8,
                                                  Bu
                                                ),
                                              ]),
                                            ],
                                            42,
                                            Ou
                                          ),
                                          ze.value
                                            ? (o(),
                                              i(
                                                "div",
                                                {
                                                  key: 0,
                                                  class: "dropdown-panel",
                                                  onClick:
                                                    t[15] ||
                                                    (t[15] = j(() => {}, [
                                                      "stop",
                                                    ])),
                                                },
                                                [
                                                  e("div", Fu, l(pn.value), 1),
                                                  At.value
                                                    ? (o(),
                                                      i(
                                                        "div",
                                                        zu,
                                                        "Loading ships..."
                                                      ))
                                                    : (o(),
                                                      i(
                                                        V,
                                                        { key: 1 },
                                                        [
                                                          (o(!0),
                                                          i(
                                                            V,
                                                            null,
                                                            se(
                                                              nt.value,
                                                              (n) => (
                                                                o(),
                                                                i(
                                                                  "div",
                                                                  {
                                                                    class:
                                                                      "list-row",
                                                                    key: n.id,
                                                                    onClick: (
                                                                      d
                                                                    ) =>
                                                                      Xs(n.id),
                                                                  },
                                                                  [
                                                                    e(
                                                                      "div",
                                                                      Gu,
                                                                      l(
                                                                        n.label
                                                                      ),
                                                                      1
                                                                    ),
                                                                    be(
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
                                                                                d
                                                                              ) =>
                                                                                (Oe.value =
                                                                                  d)),
                                                                          onClick:
                                                                            t[14] ||
                                                                            (t[14] =
                                                                              j(() => {}, [
                                                                                "stop",
                                                                              ])),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        Ku
                                                                      ),
                                                                      [
                                                                        [
                                                                          yt,
                                                                          Oe.value,
                                                                        ],
                                                                      ]
                                                                    ),
                                                                  ],
                                                                  8,
                                                                  Uu
                                                                )
                                                              )
                                                            ),
                                                            128
                                                          )),
                                                          nt.value.length === 0
                                                            ? (o(),
                                                              i(
                                                                "div",
                                                                Vu,
                                                                " No ships found from API. "
                                                              ))
                                                            : M("", !0),
                                                        ],
                                                        64
                                                      )),
                                                ]
                                              ))
                                            : M("", !0),
                                        ],
                                        512
                                      ),
                                      e(
                                        "div",
                                        {
                                          class: "list dropdown",
                                          ref_key: "guestsDropdown",
                                          ref: Hs,
                                        },
                                        [
                                          t[93] ||
                                            (t[93] = e(
                                              "div",
                                              { class: "list-heading" },
                                              "Cabins & Guests",
                                              -1
                                            )),
                                          e(
                                            "button",
                                            {
                                              type: "button",
                                              class: B([
                                                "select-summary",
                                                Ue.value || ys.value
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
                                                (t[18] = j(
                                                  (n) => It("guests"),
                                                  ["stop"]
                                                )),
                                              "aria-expanded": Ue.value
                                                ? "true"
                                                : "false",
                                            },
                                            [
                                              ce.value
                                                ? (o(),
                                                  i(
                                                    "span",
                                                    Wu,
                                                    "Flexible: " +
                                                      l(ue.value) +
                                                      " Guest" +
                                                      l(
                                                        ue.value !== 1
                                                          ? "s"
                                                          : ""
                                                      ),
                                                    1
                                                  ))
                                                : (o(),
                                                  i(
                                                    "span",
                                                    Hu,
                                                    l(Y.value.length) +
                                                      " Cabin" +
                                                      l(
                                                        Y.value.length !== 1
                                                          ? "s"
                                                          : ""
                                                      ) +
                                                      ", " +
                                                      l(Be.value) +
                                                      " Guest" +
                                                      l(
                                                        Be.value !== 1
                                                          ? "s"
                                                          : ""
                                                      ),
                                                    1
                                                  )),
                                              e("span", Yu, [
                                                e(
                                                  "img",
                                                  {
                                                    src: Ue.value
                                                      ? he(ot)
                                                      : he(at),
                                                    alt: "",
                                                    "aria-hidden": "true",
                                                    class: "caret-icon",
                                                  },
                                                  null,
                                                  8,
                                                  Ju
                                                ),
                                              ]),
                                            ],
                                            42,
                                            qu
                                          ),
                                          Ue.value
                                            ? (o(),
                                              i(
                                                "div",
                                                {
                                                  key: 0,
                                                  class:
                                                    "dropdown-panel cabin-dropdown-panel",
                                                  onClick:
                                                    t[23] ||
                                                    (t[23] = j(() => {}, [
                                                      "stop",
                                                    ])),
                                                },
                                                [
                                                  e("div", ju, [
                                                    e(
                                                      "button",
                                                      {
                                                        type: "button",
                                                        class: B([
                                                          "sidebar-pill-btn",
                                                          { active: ce.value },
                                                        ]),
                                                        onClick:
                                                          t[19] ||
                                                          (t[19] = (n) =>
                                                            (ce.value = !0)),
                                                      },
                                                      " Flexible ",
                                                      2
                                                    ),
                                                    e(
                                                      "button",
                                                      {
                                                        type: "button",
                                                        class: B([
                                                          "sidebar-pill-btn",
                                                          { active: !ce.value },
                                                        ]),
                                                        onClick:
                                                          t[20] ||
                                                          (t[20] = (n) =>
                                                            (ce.value = !1)),
                                                      },
                                                      " Structured ",
                                                      2
                                                    ),
                                                  ]),
                                                  ce.value
                                                    ? (o(),
                                                      i("div", Xu, [
                                                        e("div", Qu, [
                                                          t[87] ||
                                                            (t[87] = e(
                                                              "span",
                                                              {
                                                                class: "label",
                                                              },
                                                              "Total Guests",
                                                              -1
                                                            )),
                                                          e("div", Zu, [
                                                            e(
                                                              "button",
                                                              {
                                                                type: "button",
                                                                class:
                                                                  "btn-ctrl",
                                                                disabled:
                                                                  ue.value <= 1,
                                                                onClick:
                                                                  t[21] ||
                                                                  (t[21] = (
                                                                    n
                                                                  ) =>
                                                                    ue.value--),
                                                              },
                                                              " − ",
                                                              8,
                                                              ed
                                                            ),
                                                            e(
                                                              "span",
                                                              td,
                                                              l(ue.value),
                                                              1
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
                                                                    n
                                                                  ) =>
                                                                    ue.value++),
                                                              },
                                                              " + "
                                                            ),
                                                          ]),
                                                        ]),
                                                        t[88] ||
                                                          (t[88] = e(
                                                            "p",
                                                            {
                                                              class:
                                                                "sidebar-note",
                                                            },
                                                            " We will automatically find the best cabin combination for your group. ",
                                                            -1
                                                          )),
                                                      ]))
                                                    : (o(),
                                                      i("div", sd, [
                                                        (o(!0),
                                                        i(
                                                          V,
                                                          null,
                                                          se(
                                                            Y.value,
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
                                                                  e("div", nd, [
                                                                    e(
                                                                      "div",
                                                                      ad,
                                                                      [
                                                                        e(
                                                                          "span",
                                                                          od,
                                                                          "CABIN " +
                                                                            l(
                                                                              d +
                                                                                1
                                                                            ),
                                                                          1
                                                                        ),
                                                                        e(
                                                                          "span",
                                                                          id,
                                                                          l(
                                                                            n.adults +
                                                                              n.children
                                                                          ) +
                                                                            " guest" +
                                                                            l(
                                                                              n.adults +
                                                                                n.children !==
                                                                                1
                                                                                ? "s"
                                                                                : ""
                                                                            ),
                                                                          1
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    e(
                                                                      "div",
                                                                      ld,
                                                                      [
                                                                        Y.value
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
                                                                                  j(
                                                                                    (
                                                                                      p
                                                                                    ) =>
                                                                                      Zs(
                                                                                        d
                                                                                      ),
                                                                                    [
                                                                                      "stop",
                                                                                    ]
                                                                                  ),
                                                                                title:
                                                                                  "Remove cabin",
                                                                              },
                                                                              [
                                                                                ...(t[89] ||
                                                                                  (t[89] =
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
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                        -1
                                                                                      ),
                                                                                    ])),
                                                                              ],
                                                                              8,
                                                                              rd
                                                                            ))
                                                                          : M(
                                                                              "",
                                                                              !0
                                                                            ),
                                                                        e(
                                                                          "button",
                                                                          {
                                                                            type: "button",
                                                                            class:
                                                                              "cabin-toggle-btn-sidebar",
                                                                            onClick:
                                                                              j(
                                                                                (
                                                                                  p
                                                                                ) =>
                                                                                  en(
                                                                                    d
                                                                                  ),
                                                                                [
                                                                                  "stop",
                                                                                ]
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
                                                                                    ]
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
                                                                                ...(t[90] ||
                                                                                  (t[90] =
                                                                                    [
                                                                                      e(
                                                                                        "polyline",
                                                                                        {
                                                                                          points:
                                                                                            "6 9 12 15 18 9",
                                                                                        },
                                                                                        null,
                                                                                        -1
                                                                                      ),
                                                                                    ])),
                                                                              ],
                                                                              2
                                                                            )),
                                                                          ],
                                                                          8,
                                                                          cd
                                                                        ),
                                                                      ]
                                                                    ),
                                                                  ]),
                                                                  n.expanded
                                                                    ? (o(),
                                                                      i(
                                                                        "div",
                                                                        ud,
                                                                        [
                                                                          e(
                                                                            "div",
                                                                            dd,
                                                                            [
                                                                              t[91] ||
                                                                                (t[91] =
                                                                                  e(
                                                                                    "span",
                                                                                    {
                                                                                      class:
                                                                                        "counter-label-sidebar",
                                                                                    },
                                                                                    "Adults",
                                                                                    -1
                                                                                  )),
                                                                              e(
                                                                                "div",
                                                                                vd,
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
                                                                                          p
                                                                                        ) =>
                                                                                          Qt(
                                                                                            d,
                                                                                            "adults"
                                                                                          ),
                                                                                    },
                                                                                    " − ",
                                                                                    8,
                                                                                    pd
                                                                                  ),
                                                                                  e(
                                                                                    "span",
                                                                                    md,
                                                                                    l(
                                                                                      n.adults
                                                                                    ),
                                                                                    1
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
                                                                                        qt,
                                                                                      onClick:
                                                                                        (
                                                                                          p
                                                                                        ) =>
                                                                                          Xt(
                                                                                            d,
                                                                                            "adults"
                                                                                          ),
                                                                                    },
                                                                                    " + ",
                                                                                    8,
                                                                                    fd
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          ),
                                                                          e(
                                                                            "div",
                                                                            hd,
                                                                            [
                                                                              t[92] ||
                                                                                (t[92] =
                                                                                  e(
                                                                                    "span",
                                                                                    {
                                                                                      class:
                                                                                        "counter-label-sidebar",
                                                                                    },
                                                                                    "Children",
                                                                                    -1
                                                                                  )),
                                                                              e(
                                                                                "div",
                                                                                gd,
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
                                                                                          p
                                                                                        ) =>
                                                                                          Qt(
                                                                                            d,
                                                                                            "children"
                                                                                          ),
                                                                                    },
                                                                                    " − ",
                                                                                    8,
                                                                                    bd
                                                                                  ),
                                                                                  e(
                                                                                    "span",
                                                                                    yd,
                                                                                    l(
                                                                                      n.children
                                                                                    ),
                                                                                    1
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
                                                                                        qt,
                                                                                      onClick:
                                                                                        (
                                                                                          p
                                                                                        ) =>
                                                                                          Xt(
                                                                                            d,
                                                                                            "children"
                                                                                          ),
                                                                                    },
                                                                                    " + ",
                                                                                    8,
                                                                                    kd
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        ]
                                                                      ))
                                                                    : M("", !0),
                                                                ]
                                                              )
                                                            )
                                                          ),
                                                          128
                                                        )),
                                                        ct.value
                                                          ? (o(),
                                                            i(
                                                              "button",
                                                              {
                                                                key: 0,
                                                                type: "button",
                                                                class:
                                                                  "btn-add-cabin-sidebar",
                                                                onClick: Qs,
                                                              },
                                                              " + Add Another Cabin "
                                                            ))
                                                          : M("", !0),
                                                      ])),
                                                ]
                                              ))
                                            : M("", !0),
                                        ],
                                        512
                                      ),
                                      e(
                                        "div",
                                        {
                                          class: "list dropdown",
                                          ref_key: "datesDropdown",
                                          ref: Ys,
                                        },
                                        [
                                          t[95] ||
                                            (t[95] = e(
                                              "div",
                                              { class: "list-heading" },
                                              "Dates",
                                              -1
                                            )),
                                          e(
                                            "button",
                                            {
                                              type: "button",
                                              class: B([
                                                "select-summary",
                                                Ge.value || ks.value
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
                                                (t[26] = j(
                                                  (n) => It("dates"),
                                                  ["stop"]
                                                )),
                                              "aria-expanded": Ge.value
                                                ? "true"
                                                : "false",
                                            },
                                            [
                                              e(
                                                "span",
                                                null,
                                                l(
                                                  c.value
                                                    ? `${c.value} → ${
                                                        y.value || "..."
                                                      }`
                                                    : "Select dates"
                                                ),
                                                1
                                              ),
                                              e("span", _d, [
                                                e(
                                                  "img",
                                                  {
                                                    src: Ge.value
                                                      ? he(ot)
                                                      : he(at),
                                                    alt: "",
                                                    "aria-hidden": "true",
                                                    class: "caret-icon",
                                                  },
                                                  null,
                                                  8,
                                                  Cd
                                                ),
                                              ]),
                                            ],
                                            42,
                                            wd
                                          ),
                                          Ge.value
                                            ? (o(),
                                              i(
                                                "div",
                                                {
                                                  key: 0,
                                                  class:
                                                    "dropdown-panel date-dropdown-panel",
                                                  onClick:
                                                    t[27] ||
                                                    (t[27] = j(() => {}, [
                                                      "stop",
                                                    ])),
                                                },
                                                [
                                                  e("div", $d, [
                                                    e("div", Sd, [
                                                      e(
                                                        "h4",
                                                        xd,
                                                        l(ln.value),
                                                        1
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
                                                              onClick: dn,
                                                              type: "button",
                                                            },
                                                            " ‹ "
                                                          ),
                                                          e(
                                                            "button",
                                                            {
                                                              class:
                                                                "calendar-nav",
                                                              onClick: un,
                                                              type: "button",
                                                            },
                                                            " › "
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                    e("div", Dd, [
                                                      t[94] ||
                                                        (t[94] = Pe(
                                                          '<div class="calendar-weekdays"><div class="weekday">Su</div><div class="weekday">Mo</div><div class="weekday">Tu</div><div class="weekday">We</div><div class="weekday">Th</div><div class="weekday">Fr</div><div class="weekday">Sa</div></div>',
                                                          1
                                                        )),
                                                      e("div", Td, [
                                                        (o(!0),
                                                        i(
                                                          V,
                                                          null,
                                                          se(
                                                            rn.value,
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
                                                                    d
                                                                  ) => vn(n),
                                                                  type: "button",
                                                                },
                                                                l(n.date),
                                                                11,
                                                                Ad
                                                              )
                                                            )
                                                          ),
                                                          128
                                                        )),
                                                      ]),
                                                    ]),
                                                  ]),
                                                ]
                                              ))
                                            : M("", !0),
                                        ],
                                        512
                                      ),
                                      e(
                                        "div",
                                        {
                                          class: B([
                                            "list dropdown",
                                            { active: Ke.value },
                                          ]),
                                          onMouseenter:
                                            t[30] ||
                                            (t[30] = (n) => (ws.value = !0)),
                                          onMouseleave:
                                            t[31] ||
                                            (t[31] = (n) => (ws.value = !1)),
                                          ref_key: "durationDropdown",
                                          ref: Js,
                                        },
                                        [
                                          e(
                                            "div",
                                            {
                                              class: "list-heading",
                                              onClick:
                                                t[28] ||
                                                (t[28] = (n) => It("duration")),
                                            },
                                            " Trip Duration "
                                          ),
                                          e(
                                            "button",
                                            {
                                              type: "button",
                                              class: B([
                                                "select-summary",
                                                {
                                                  "is-filled":
                                                    Ke.value || ws.value,
                                                },
                                              ]),
                                              onClick:
                                                t[29] ||
                                                (t[29] = (n) => It("duration")),
                                            },
                                            [
                                              e("span", null, l(zt.value), 1),
                                              e("span", Id, [
                                                e(
                                                  "img",
                                                  {
                                                    src: Ke.value
                                                      ? he(ot)
                                                      : he(at),
                                                    class: "caret-icon",
                                                  },
                                                  null,
                                                  8,
                                                  Nd
                                                ),
                                              ]),
                                            ],
                                            2
                                          ),
                                          Ke.value
                                            ? (o(),
                                              i("div", Md, [
                                                e("div", Ed, [
                                                  e("div", Rd, [
                                                    t[96] ||
                                                      (t[96] = e(
                                                        "div",
                                                        {
                                                          class: "counter-text",
                                                        },
                                                        [
                                                          e(
                                                            "div",
                                                            {
                                                              class:
                                                                "counter-title",
                                                            },
                                                            "Min"
                                                          ),
                                                        ],
                                                        -1
                                                      )),
                                                    e("div", Pd, [
                                                      e(
                                                        "button",
                                                        {
                                                          type: "button",
                                                          class: "btn-icon",
                                                          disabled:
                                                            P.value <= 1,
                                                          onClick: j(tn, [
                                                            "stop",
                                                          ]),
                                                        },
                                                        " − ",
                                                        8,
                                                        Od
                                                      ),
                                                      e(
                                                        "span",
                                                        Ld,
                                                        l(P.value),
                                                        1
                                                      ),
                                                      e(
                                                        "button",
                                                        {
                                                          type: "button",
                                                          class: "btn-icon",
                                                          disabled:
                                                            P.value >= D.value,
                                                          onClick: j(sn, [
                                                            "stop",
                                                          ]),
                                                        },
                                                        " + ",
                                                        8,
                                                        Bd
                                                      ),
                                                    ]),
                                                  ]),
                                                  e("div", Fd, [
                                                    t[97] ||
                                                      (t[97] = e(
                                                        "div",
                                                        {
                                                          class: "counter-text",
                                                        },
                                                        [
                                                          e(
                                                            "div",
                                                            {
                                                              class:
                                                                "counter-title",
                                                            },
                                                            "Max"
                                                          ),
                                                        ],
                                                        -1
                                                      )),
                                                    e("div", zd, [
                                                      e(
                                                        "button",
                                                        {
                                                          type: "button",
                                                          class: "btn-icon",
                                                          disabled:
                                                            D.value <= P.value,
                                                          onClick: j(nn, [
                                                            "stop",
                                                          ]),
                                                        },
                                                        " − ",
                                                        8,
                                                        Ud
                                                      ),
                                                      e(
                                                        "span",
                                                        Gd,
                                                        l(D.value),
                                                        1
                                                      ),
                                                      e(
                                                        "button",
                                                        {
                                                          type: "button",
                                                          class: "btn-icon",
                                                          disabled:
                                                            D.value >= Xe,
                                                          onClick: j(an, [
                                                            "stop",
                                                          ]),
                                                        },
                                                        " + ",
                                                        8,
                                                        Kd
                                                      ),
                                                    ]),
                                                  ]),
                                                  e("div", Vd, [
                                                    e(
                                                      "button",
                                                      {
                                                        type: "button",
                                                        class:
                                                          "btn-reset-duration",
                                                        onClick: j(on, [
                                                          "stop",
                                                        ]),
                                                        disabled:
                                                          P.value === 1 &&
                                                          D.value === Xe,
                                                      },
                                                      " Reset to Any Duration ",
                                                      8,
                                                      qd
                                                    ),
                                                  ]),
                                                ]),
                                              ]))
                                            : M("", !0),
                                        ],
                                        34
                                      ),
                                      e("div", { class: "sidebar-actions" }, [
                                        e(
                                          "button",
                                          { class: "btn-primary", onClick: da },
                                          " Apply "
                                        ),
                                      ]),
                                    ],
                                    64
                                  )),
                            ]),
                            fe.value
                              ? M("", !0)
                              : (o(),
                                i("div", Wd, [
                                  e("div", Hd, [
                                    t[109] ||
                                      (t[109] = e(
                                        "h3",
                                        { class: "itinerary-title" },
                                        "Your Itinerary",
                                        -1
                                      )),
                                    t[110] ||
                                      (t[110] = e(
                                        "p",
                                        { class: "itinerary-description" },
                                        " This is a summary of the accommodation you have selected. After submitting your booking request, a Komodo Cruises Journey Designer will make contact to book and confirm your trip. ",
                                        -1
                                      )),
                                    t[111] ||
                                      (t[111] = e(
                                        "div",
                                        { class: "itinerary-divider" },
                                        null,
                                        -1
                                      )),
                                    R.value.length === 0
                                      ? (o(),
                                        i(
                                          "div",
                                          Yd,
                                          " You haven't selected any options yet. "
                                        ))
                                      : (o(),
                                        i("ul", Jd, [
                                          (o(!0),
                                          i(
                                            V,
                                            null,
                                            se(
                                              R.value,
                                              (n, d) => (
                                                o(),
                                                i(
                                                  "li",
                                                  {
                                                    key: n.addedAt,
                                                    class: "itinerary-item",
                                                  },
                                                  [
                                                    e("div", jd, [
                                                      e("div", null, [
                                                        t[99] ||
                                                          (t[99] = e(
                                                            "div",
                                                            {
                                                              class:
                                                                "itinerary-type",
                                                            },
                                                            "CABIN",
                                                            -1
                                                          )),
                                                        e(
                                                          "div",
                                                          Xd,
                                                          l(n.cabin),
                                                          1
                                                        ),
                                                      ]),
                                                      e(
                                                        "button",
                                                        {
                                                          class:
                                                            "itinerary-remove-btn-top",
                                                          onClick: (p) => Oa(d),
                                                          title:
                                                            "Remove from itinerary",
                                                        },
                                                        [
                                                          ...(t[100] ||
                                                            (t[100] = [
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
                                                                -1
                                                              ),
                                                            ])),
                                                        ],
                                                        8,
                                                        Qd
                                                      ),
                                                    ]),
                                                    e("div", Zd, [
                                                      t[102] ||
                                                        (t[102] = Pe(
                                                          '<svg class="itinerary-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
                                                          1
                                                        )),
                                                      e("span", ev, [
                                                        e(
                                                          "strong",
                                                          null,
                                                          l(Nt(n.date)),
                                                          1
                                                        ),
                                                        t[101] ||
                                                          (t[101] = Q(
                                                            " – ",
                                                            -1
                                                          )),
                                                        e(
                                                          "strong",
                                                          null,
                                                          l(Nt(hn(n.date))),
                                                          1
                                                        ),
                                                      ]),
                                                    ]),
                                                    e("div", tv, [
                                                      t[103] ||
                                                        (t[103] = Pe(
                                                          '<svg class="itinerary-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 15h18l-1.5 6h-15L3 15z"></path><rect x="5" y="8" width="14" height="7" rx="1"></rect><path d="M8 8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3"></path><line x1="2" y1="15" x2="22" y2="15"></line></svg>',
                                                          1
                                                        )),
                                                      e(
                                                        "span",
                                                        sv,
                                                        l(n.ship),
                                                        1
                                                      ),
                                                    ]),
                                                    e("div", nv, [
                                                      e("div", av, [
                                                        t[104] ||
                                                          (t[104] = e(
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
                                                            -1
                                                          )),
                                                        e(
                                                          "span",
                                                          ov,
                                                          l(n.guests || 2) +
                                                            " adult" +
                                                            l(
                                                              (n.guests || 2) >
                                                                1
                                                                ? "s"
                                                                : ""
                                                            ),
                                                          1
                                                        ),
                                                      ]),
                                                      e(
                                                        "button",
                                                        {
                                                          class:
                                                            "btn-edit-item",
                                                          onClick: j(
                                                            (p) => Aa(n, d),
                                                            ["stop"]
                                                          ),
                                                          title: "Edit Guests",
                                                        },
                                                        [
                                                          ...(t[105] ||
                                                            (t[105] = [
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
                                                                -1
                                                              ),
                                                            ])),
                                                        ],
                                                        8,
                                                        iv
                                                      ),
                                                    ]),
                                                    e("div", lv, [
                                                      e("div", rv, [
                                                        t[106] ||
                                                          (t[106] = e(
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
                                                            -1
                                                          )),
                                                        e(
                                                          "span",
                                                          cv,
                                                          l(n.cabin),
                                                          1
                                                        ),
                                                      ]),
                                                      e(
                                                        "span",
                                                        uv,
                                                        l(w(n.price)),
                                                        1
                                                      ),
                                                    ]),
                                                  ]
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                        ])),
                                    ss.value.hasPrice
                                      ? (o(),
                                        i("div", dv, [
                                          e("div", vv, [
                                            t[108] ||
                                              (t[108] = e(
                                                "span",
                                                {
                                                  class:
                                                    "itinerary-total-label-simple",
                                                },
                                                "EST. TOTAL",
                                                -1
                                              )),
                                            e("div", pv, [
                                              e(
                                                "span",
                                                mv,
                                                l(ss.value.formattedTotal),
                                                1
                                              ),
                                              t[107] ||
                                                (t[107] = e(
                                                  "span",
                                                  {
                                                    class: "itinerary-tax-note",
                                                  },
                                                  "(Tax Included)",
                                                  -1
                                                )),
                                            ]),
                                          ]),
                                        ]))
                                      : R.value.length
                                      ? (o(),
                                        i(
                                          "p",
                                          fv,
                                          " Pricing for the selected cabins will be confirmed by our Journey Designers. "
                                        ))
                                      : M("", !0),
                                    R.value.length
                                      ? (o(),
                                        i(
                                          "button",
                                          {
                                            key: 4,
                                            class: "btn-send-enquiry",
                                            onClick: $a,
                                          },
                                          " Send Availability Enquiry "
                                        ))
                                      : M("", !0),
                                    t[112] ||
                                      (t[112] = e(
                                        "a",
                                        {
                                          href: "#",
                                          class: "link-speak-with-us",
                                        },
                                        [
                                          Q(" Speak with us "),
                                          e("img", { src: Ks, alt: "" }),
                                        ],
                                        -1
                                      )),
                                  ]),
                                ])),
                          ]),
                        ]),
                      ])),
                  Ee.value && pe.value
                    ? (o(),
                      i(
                        "div",
                        { key: 2, class: "modal-overlay", onClick: Rs },
                        [
                          e(
                            "div",
                            {
                              class: "modal-content modal-content-redesigned",
                              onClick: t[34] || (t[34] = j(() => {}, ["stop"])),
                            },
                            [
                              e(
                                "button",
                                { class: "modal-close-details", onClick: Rs },
                                "✕"
                              ),
                              e("div", hv, [
                                e("div", gv, [
                                  e("div", bv, [
                                    e("h2", yv, l(Is(pe.value)), 1),
                                    t[113] ||
                                      (t[113] = e(
                                        "p",
                                        { class: "modal-cabin-subtitle" },
                                        "Room",
                                        -1
                                      )),
                                  ]),
                                  e(
                                    "div",
                                    kv,
                                    " Sleeps " +
                                      l(Yn.value || 2) +
                                      " | " +
                                      l(kn(pe.value)) +
                                      " | " +
                                      l(fa(pe.value)),
                                    1
                                  ),
                                  e(
                                    "blockquote",
                                    wv,
                                    ' "' + l(Hn.value) + '" ',
                                    1
                                  ),
                                  e("div", _v, [
                                    t[114] ||
                                      (t[114] = e(
                                        "h3",
                                        { class: "modal-section-title" },
                                        "OVERVIEW",
                                        -1
                                      )),
                                    e("div", Cv, [
                                      e("ul", $v, [
                                        (o(!0),
                                        i(
                                          V,
                                          null,
                                          se(
                                            Mt(pe.value).slice(0, 4),
                                            (n, d) => (
                                              o(), i("li", { key: d }, l(n), 1)
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                      Mt(pe.value).length > 4
                                        ? (o(),
                                          i("ul", Sv, [
                                            (o(!0),
                                            i(
                                              V,
                                              null,
                                              se(
                                                Mt(pe.value).slice(4, 8),
                                                (n, d) => (
                                                  o(),
                                                  i(
                                                    "li",
                                                    { key: d + 4 },
                                                    l(n),
                                                    1
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ]))
                                        : M("", !0),
                                    ]),
                                  ]),
                                  e("div", xv, [
                                    t[115] ||
                                      (t[115] = e(
                                        "h3",
                                        { class: "modal-section-title" },
                                        "AMENITIES & FEATURES",
                                        -1
                                      )),
                                    e("div", Dv, [
                                      e("ul", Tv, [
                                        (o(!0),
                                        i(
                                          V,
                                          null,
                                          se(
                                            Cs.value.slice(0, 3),
                                            (n, d) => (
                                              o(), i("li", { key: d }, l(n), 1)
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                      Cs.value.length > 3
                                        ? (o(),
                                          i("ul", Av, [
                                            (o(!0),
                                            i(
                                              V,
                                              null,
                                              se(
                                                Cs.value.slice(3, 6),
                                                (n, d) => (
                                                  o(),
                                                  i(
                                                    "li",
                                                    { key: d + 3 },
                                                    l(n),
                                                    1
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ]))
                                        : M("", !0),
                                    ]),
                                  ]),
                                ]),
                                e("div", Iv, [
                                  (o(),
                                  i(
                                    "img",
                                    {
                                      src: ve(),
                                      alt: pe.value.cabinName,
                                      referrerpolicy: "no-referrer",
                                      class: "modal-cabin-image",
                                      key: H.value,
                                      onError:
                                        t[32] ||
                                        (t[32] = (n) => Cn(n, pe.value.image)),
                                    },
                                    null,
                                    40,
                                    Nv
                                  )),
                                  e(
                                    "button",
                                    {
                                      class:
                                        "modal-gallery-nav modal-gallery-prev",
                                      onClick: F,
                                      "aria-label": "Previous",
                                    },
                                    " ‹ "
                                  ),
                                  e(
                                    "button",
                                    {
                                      class:
                                        "modal-gallery-nav modal-gallery-next",
                                      onClick: G,
                                      "aria-label": "Next",
                                    },
                                    " › "
                                  ),
                                  e("div", Mv, [
                                    Q(l(Is(pe.value)) + " ", 1),
                                    e(
                                      "span",
                                      Ev,
                                      l(H.value + 1) +
                                        " of " +
                                        l(le().length || 1),
                                      1
                                    ),
                                  ]),
                                ]),
                              ]),
                              e("div", Rv, [
                                e("div", Pv, [
                                  e("div", Ov, [
                                    e(
                                      "span",
                                      Lv,
                                      l(_s.value || "Price on request"),
                                      1
                                    ),
                                    _s.value
                                      ? (o(), i("span", Bv, "/Night"))
                                      : M("", !0),
                                  ]),
                                  t[116] ||
                                    (t[116] = e(
                                      "span",
                                      { class: "price-note" },
                                      "Excluding taxes and fees",
                                      -1
                                    )),
                                ]),
                                e(
                                  "button",
                                  {
                                    class: "modal-book-btn",
                                    onClick:
                                      t[33] ||
                                      (t[33] = (n) => {
                                        xn(pe.value), Rs();
                                      }),
                                  },
                                  l(
                                    Sn(pe.value)
                                      ? "Remove from itinerary"
                                      : "RESERVE NOW"
                                  ),
                                  1
                                ),
                              ]),
                            ]
                          ),
                        ]
                      ))
                    : M("", !0),
                  tt.value
                    ? (o(),
                      i(
                        "div",
                        { key: 3, class: "guest-modal-overlay", onClick: rs },
                        [
                          e(
                            "div",
                            {
                              class: "guest-modal-content",
                              onClick: t[35] || (t[35] = j(() => {}, ["stop"])),
                            },
                            [
                              e(
                                "button",
                                { class: "guest-modal-close", onClick: rs },
                                "✕"
                              ),
                              t[119] ||
                                (t[119] = e(
                                  "div",
                                  { class: "guest-modal-header" },
                                  [
                                    e(
                                      "h3",
                                      { class: "guest-modal-title" },
                                      "Number of Guests"
                                    ),
                                  ],
                                  -1
                                )),
                              e("div", Fv, [
                                t[118] ||
                                  (t[118] = e(
                                    "p",
                                    { class: "guest-modal-description" },
                                    " Please indicate how many guests will be accommodated: ",
                                    -1
                                  )),
                                e("div", zv, [
                                  e("div", Uv, [
                                    t[117] ||
                                      (t[117] = e(
                                        "div",
                                        { class: "guest-counter-label" },
                                        "Guests",
                                        -1
                                      )),
                                    e("div", Gv, [
                                      e(
                                        "button",
                                        {
                                          type: "button",
                                          class: "guest-counter-btn",
                                          onClick: Da,
                                          disabled: Re.value <= 1,
                                        },
                                        " − ",
                                        8,
                                        Kv
                                      ),
                                      e("span", Vv, l(Re.value), 1),
                                      e(
                                        "button",
                                        {
                                          type: "button",
                                          class: "guest-counter-btn",
                                          onClick: xa,
                                          disabled: Re.value >= Ts.value,
                                        },
                                        " + ",
                                        8,
                                        qv
                                      ),
                                    ]),
                                  ]),
                                  e("div", Wv, [
                                    Q(
                                      l(
                                        ((r = De.value) == null
                                          ? void 0
                                          : r.availableText) || "1 available"
                                      ) + " ",
                                      1
                                    ),
                                    (u = De.value) != null && u.capacityText
                                      ? (o(),
                                        i(
                                          "span",
                                          Hv,
                                          " • Max " + l(Ts.value) + " guests",
                                          1
                                        ))
                                      : M("", !0),
                                  ]),
                                ]),
                                e("div", Yv, [
                                  e(
                                    "button",
                                    { class: "btn-submit-guest", onClick: Ta },
                                    l(
                                      et.value !== null
                                        ? "Update Itinerary"
                                        : "Add to Itinerary"
                                    ),
                                    1
                                  ),
                                ]),
                              ]),
                            ]
                          ),
                        ]
                      ))
                    : M("", !0),
                  We.value
                    ? (o(),
                      i("div", Jv, [
                        e("div", jv, [
                          e("div", { class: "enquiry-modal-header" }, [
                            t[120] ||
                              (t[120] = e(
                                "h2",
                                { class: "enquiry-modal-title" },
                                "Plan your Trip",
                                -1
                              )),
                            e(
                              "button",
                              { class: "enquiry-modal-close", onClick: Sa },
                              " Close ✕ "
                            ),
                          ]),
                          e("div", Xv, [
                            e("div", Qv, [
                              t[138] ||
                                (t[138] = e(
                                  "p",
                                  { class: "enquiry-intro" },
                                  " Please complete the form below and one of our Journey Designers will contact you shortly to plan your trip. ",
                                  -1
                                )),
                              e(
                                "form",
                                {
                                  class: "enquiry-form",
                                  onSubmit: j(La, ["prevent"]),
                                },
                                [
                                  e("div", Zv, [
                                    e("div", ep, [
                                      t[122] ||
                                        (t[122] = e(
                                          "label",
                                          { class: "form-label" },
                                          "Title",
                                          -1
                                        )),
                                      be(
                                        e(
                                          "select",
                                          {
                                            class: "form-control",
                                            "onUpdate:modelValue":
                                              t[36] ||
                                              (t[36] = (n) =>
                                                (ee.value.title = n)),
                                          },
                                          [
                                            ...(t[121] ||
                                              (t[121] = [
                                                Pe(
                                                  '<option value="">Select</option><option value="Mr">Mr</option><option value="Mrs">Mrs</option><option value="Ms">Ms</option><option value="Dr">Dr</option>',
                                                  5
                                                ),
                                              ])),
                                          ],
                                          512
                                        ),
                                        [[ds, ee.value.title]]
                                      ),
                                    ]),
                                    e("div", tp, [
                                      t[123] ||
                                        (t[123] = e(
                                          "label",
                                          { class: "form-label" },
                                          "First Name",
                                          -1
                                        )),
                                      be(
                                        e(
                                          "input",
                                          {
                                            type: "text",
                                            class: "form-control",
                                            "onUpdate:modelValue":
                                              t[37] ||
                                              (t[37] = (n) =>
                                                (ee.value.firstName = n)),
                                            required: "",
                                          },
                                          null,
                                          512
                                        ),
                                        [[kt, ee.value.firstName]]
                                      ),
                                    ]),
                                    e("div", sp, [
                                      t[124] ||
                                        (t[124] = e(
                                          "label",
                                          { class: "form-label" },
                                          "Last Name",
                                          -1
                                        )),
                                      be(
                                        e(
                                          "input",
                                          {
                                            type: "text",
                                            class: "form-control",
                                            "onUpdate:modelValue":
                                              t[38] ||
                                              (t[38] = (n) =>
                                                (ee.value.lastName = n)),
                                            required: "",
                                          },
                                          null,
                                          512
                                        ),
                                        [[kt, ee.value.lastName]]
                                      ),
                                    ]),
                                  ]),
                                  e("div", np, [
                                    e("div", ap, [
                                      t[126] ||
                                        (t[126] = e(
                                          "label",
                                          { class: "form-label" },
                                          "Contact Number",
                                          -1
                                        )),
                                      e("div", op, [
                                        be(
                                          e(
                                            "select",
                                            {
                                              class: "phone-country",
                                              "onUpdate:modelValue":
                                                t[39] ||
                                                (t[39] = (n) =>
                                                  (ee.value.phoneCountry = n)),
                                            },
                                            [
                                              ...(t[125] ||
                                                (t[125] = [
                                                  Pe(
                                                    '<option value="+62">🇮🇩 +62</option><option value="+1">🇺🇸 +1</option><option value="+44">🇬🇧 +44</option><option value="+61">🇦🇺 +61</option><option value="+65">🇸🇬 +65</option><option value="+60">🇲🇾 +60</option>',
                                                    6
                                                  ),
                                                ])),
                                            ],
                                            512
                                          ),
                                          [[ds, ee.value.phoneCountry]]
                                        ),
                                        be(
                                          e(
                                            "input",
                                            {
                                              type: "tel",
                                              class: "form-control",
                                              "onUpdate:modelValue":
                                                t[40] ||
                                                (t[40] = (n) =>
                                                  (ee.value.phoneNumber = n)),
                                              placeholder: "812345678",
                                            },
                                            null,
                                            512
                                          ),
                                          [[kt, ee.value.phoneNumber]]
                                        ),
                                      ]),
                                    ]),
                                    e("div", ip, [
                                      t[128] ||
                                        (t[128] = e(
                                          "label",
                                          { class: "form-label" },
                                          "Country",
                                          -1
                                        )),
                                      be(
                                        e(
                                          "select",
                                          {
                                            class: "form-control",
                                            "onUpdate:modelValue":
                                              t[41] ||
                                              (t[41] = (n) =>
                                                (ee.value.country = n)),
                                          },
                                          [
                                            ...(t[127] ||
                                              (t[127] = [
                                                Pe(
                                                  '<option value="">Select Country</option><option value="Indonesia">Indonesia</option><option value="United States">United States</option><option value="United Kingdom">United Kingdom</option><option value="Australia">Australia</option><option value="Singapore">Singapore</option><option value="Malaysia">Malaysia</option>',
                                                  7
                                                ),
                                              ])),
                                          ],
                                          512
                                        ),
                                        [[ds, ee.value.country]]
                                      ),
                                    ]),
                                  ]),
                                  e("div", lp, [
                                    e("div", rp, [
                                      t[129] ||
                                        (t[129] = e(
                                          "label",
                                          { class: "form-label" },
                                          "Email",
                                          -1
                                        )),
                                      be(
                                        e(
                                          "input",
                                          {
                                            type: "email",
                                            class: "form-control",
                                            "onUpdate:modelValue":
                                              t[42] ||
                                              (t[42] = (n) =>
                                                (ee.value.email = n)),
                                            required: "",
                                          },
                                          null,
                                          512
                                        ),
                                        [[kt, ee.value.email]]
                                      ),
                                    ]),
                                    e("div", cp, [
                                      t[130] ||
                                        (t[130] = e(
                                          "label",
                                          { class: "form-label" },
                                          "Confirm Email Address",
                                          -1
                                        )),
                                      be(
                                        e(
                                          "input",
                                          {
                                            type: "email",
                                            class: "form-control",
                                            "onUpdate:modelValue":
                                              t[43] ||
                                              (t[43] = (n) =>
                                                (ee.value.confirmEmail = n)),
                                            required: "",
                                          },
                                          null,
                                          512
                                        ),
                                        [[kt, ee.value.confirmEmail]]
                                      ),
                                    ]),
                                  ]),
                                  e("div", up, [
                                    t[132] ||
                                      (t[132] = e(
                                        "label",
                                        { class: "form-label" },
                                        "I am a:",
                                        -1
                                      )),
                                    be(
                                      e(
                                        "select",
                                        {
                                          class: "form-control",
                                          "onUpdate:modelValue":
                                            t[44] ||
                                            (t[44] = (n) =>
                                              (ee.value.userType = n)),
                                        },
                                        [
                                          ...(t[131] ||
                                            (t[131] = [
                                              e(
                                                "option",
                                                { value: "" },
                                                "Select",
                                                -1
                                              ),
                                              e(
                                                "option",
                                                { value: "guest" },
                                                "Guest",
                                                -1
                                              ),
                                              e(
                                                "option",
                                                { value: "agent" },
                                                "Travel Agent",
                                                -1
                                              ),
                                            ])),
                                        ],
                                        512
                                      ),
                                      [[ds, ee.value.userType]]
                                    ),
                                  ]),
                                  e("div", dp, [
                                    t[133] ||
                                      (t[133] = e(
                                        "label",
                                        { class: "form-label" },
                                        "Is there anything else you'd like to let us know?",
                                        -1
                                      )),
                                    be(
                                      e(
                                        "textarea",
                                        {
                                          class: "form-control form-textarea",
                                          rows: "4",
                                          "onUpdate:modelValue":
                                            t[45] ||
                                            (t[45] = (n) =>
                                              (ee.value.notes = n)),
                                        },
                                        null,
                                        512
                                      ),
                                      [[kt, ee.value.notes]]
                                    ),
                                  ]),
                                  e("div", vp, [
                                    e("label", pp, [
                                      be(
                                        e(
                                          "input",
                                          {
                                            type: "checkbox",
                                            "onUpdate:modelValue":
                                              t[46] ||
                                              (t[46] = (n) =>
                                                (ee.value.subscribeNews = n)),
                                          },
                                          null,
                                          512
                                        ),
                                        [[yt, ee.value.subscribeNews]]
                                      ),
                                      t[134] ||
                                        (t[134] = e(
                                          "span",
                                          null,
                                          "Sign up to receive news and blog posts from Komodo Cruises",
                                          -1
                                        )),
                                    ]),
                                    e("label", mp, [
                                      be(
                                        e(
                                          "input",
                                          {
                                            type: "checkbox",
                                            "onUpdate:modelValue":
                                              t[47] ||
                                              (t[47] = (n) =>
                                                (ee.value.consentData = n)),
                                            required: "",
                                          },
                                          null,
                                          512
                                        ),
                                        [[yt, ee.value.consentData]]
                                      ),
                                      t[135] ||
                                        (t[135] = e(
                                          "span",
                                          null,
                                          "I consent to my submitted data being collected and stored",
                                          -1
                                        )),
                                    ]),
                                  ]),
                                  t[136] ||
                                    (t[136] = e(
                                      "p",
                                      { class: "form-note" },
                                      [
                                        e("strong", null, "PLEASE NOTE:"),
                                        Q(
                                          " These results indicate availability and do not guarantee a booking. One of our Journey Designers will contact you shortly to plan your trip. "
                                        ),
                                      ],
                                      -1
                                    )),
                                  e(
                                    "button",
                                    {
                                      type: "submit",
                                      class: "btn-submit-enquiry",
                                      disabled: Le.value,
                                    },
                                    l(
                                      Le.value
                                        ? "PROCESSING..."
                                        : "PROCEED TO PAYMENT"
                                    ),
                                    9,
                                    fp
                                  ),
                                  t[137] ||
                                    (t[137] = e(
                                      "p",
                                      { class: "form-recaptcha" },
                                      " This form is protected by reCAPTCHA Enterprise and the Google Privacy Policy and Terms of Service apply. ",
                                      -1
                                    )),
                                ],
                                32
                              ),
                            ]),
                            e("div", hp, [
                              t[142] ||
                                (t[142] = e(
                                  "h3",
                                  { class: "summary-title" },
                                  "Your Itinerary",
                                  -1
                                )),
                              t[143] ||
                                (t[143] = e(
                                  "p",
                                  { class: "summary-description" },
                                  " This is a summary of the accommodation you've selected. One of our Komodo Cruises Journey Designers will contact you shortly to plan your trip. ",
                                  -1
                                )),
                              e("div", gp, [
                                (o(!0),
                                i(
                                  V,
                                  null,
                                  se(
                                    R.value,
                                    (n, d) => (
                                      o(),
                                      i(
                                        "div",
                                        { key: d, class: "summary-item" },
                                        [
                                          e("div", bp, [
                                            e("h4", yp, l(n.ship), 1),
                                          ]),
                                          e("div", kp, [
                                            e("p", wp, l(n.cabin), 1),
                                            e(
                                              "p",
                                              _p,
                                              l(n.guests || 2) +
                                                " Guest" +
                                                l(
                                                  (n.guests || 2) > 1 ? "s" : ""
                                                ),
                                              1
                                            ),
                                            e(
                                              "p",
                                              Cp,
                                              l(Nt(n.date)) +
                                                " → " +
                                                l(Nt(hn(n.date))),
                                              1
                                            ),
                                          ]),
                                          n.price
                                            ? (o(),
                                              i("div", $p, [
                                                e("div", Sp, [
                                                  t[139] ||
                                                    (t[139] = e(
                                                      "span",
                                                      {
                                                        class: "pricing-label",
                                                      },
                                                      "Price per cabin",
                                                      -1
                                                    )),
                                                  e("span", xp, l(n.price), 1),
                                                ]),
                                                e("div", Dp, [
                                                  e(
                                                    "span",
                                                    Tp,
                                                    "× " +
                                                      l(n.guests || 2) +
                                                      " guest" +
                                                      l(
                                                        (n.guests || 2) > 1
                                                          ? "s"
                                                          : ""
                                                      ),
                                                    1
                                                  ),
                                                  e("span", Ap, l(_a(n)), 1),
                                                ]),
                                              ]))
                                            : M("", !0),
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]),
                              ss.value.hasPrice
                                ? (o(),
                                  i("div", Ip, [
                                    t[141] ||
                                      (t[141] = e(
                                        "div",
                                        { class: "enquiry-total-divider" },
                                        null,
                                        -1
                                      )),
                                    e("div", Np, [
                                      e("div", Mp, [
                                        t[140] ||
                                          (t[140] = e(
                                            "span",
                                            { class: "enquiry-total-label" },
                                            "Total Price",
                                            -1
                                          )),
                                        e(
                                          "span",
                                          Ep,
                                          l(ss.value.formattedTotal),
                                          1
                                        ),
                                      ]),
                                    ]),
                                  ]))
                                : R.value.length
                                ? (o(),
                                  i(
                                    "p",
                                    Rp,
                                    " Pricing for the selected cabins will be confirmed by our Journey Designers. "
                                  ))
                                : M("", !0),
                            ]),
                          ]),
                        ]),
                      ]))
                    : M("", !0),
                  e("footer", Pp, [
                    e("div", Op, [
                      e("div", Lp, [
                        t[147] ||
                          (t[147] = e(
                            "div",
                            { class: "hf-brand" },
                            [
                              e("div", { class: "hf-logo" }, "KOMODO CRUISES"),
                              e(
                                "div",
                                { class: "hf-copy" },
                                "Rare journeys across the Komodo Islands."
                              ),
                            ],
                            -1
                          )),
                        e("nav", Bp, [
                          e(
                            "a",
                            { href: "#", onClick: j(Ea, ["prevent"]) },
                            "Plan your trip"
                          ),
                          t[144] ||
                            (t[144] = e("a", { href: "#" }, "Experiences", -1)),
                          t[145] ||
                            (t[145] = e("a", { href: "#" }, "Our story", -1)),
                          t[146] ||
                            (t[146] = e("a", { href: "#" }, "Contact", -1)),
                        ]),
                        t[148] ||
                          (t[148] = Pe(
                            '<div class="hf-contact"><div class="hf-contact-title">Contact Us</div><div class="hf-contact-phone"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><a href="tel:+6285282296450">+62 852-8229-6450</a></div><div class="hf-contact-address"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>Graha Permata Pancoran, Jl. KH. Guru Amin Blok A5, Pancoran, Jakarta Selatan 12780</span></div></div>',
                            1
                          )),
                      ]),
                      e("div", Fp, [
                        e(
                          "div",
                          zp,
                          " © " +
                            l(new Date().getFullYear()) +
                            " Komodo Cruises | PT CANARD MONEY INDONESIA ",
                          1
                        ),
                        t[149] ||
                          (t[149] = e(
                            "div",
                            { class: "hf-disclaimer" },
                            " All voyages subject to weather and park regulations. ",
                            -1
                          )),
                      ]),
                    ]),
                  ]),
                ]),
                (o(),
                Yt(Fn, { to: "body" }, [
                  C.value
                    ? (o(),
                      i(
                        "div",
                        {
                          key: 0,
                          class: "mobile-filter-modal-overlay",
                          onClick:
                            t[61] ||
                            (t[61] = j((n) => (C.value = !1), ["self"])),
                        },
                        [
                          e("div", Up, [
                            e("div", Gp, [
                              t[151] ||
                                (t[151] = e(
                                  "h3",
                                  null,
                                  "Check Availability",
                                  -1
                                )),
                              e(
                                "button",
                                {
                                  class: "modal-close-btn",
                                  onClick:
                                    t[48] || (t[48] = (n) => (C.value = !1)),
                                },
                                [
                                  ...(t[150] ||
                                    (t[150] = [
                                      e("span", null, "Close", -1),
                                      Q(" ✕ ", -1),
                                    ])),
                                ]
                              ),
                            ]),
                            e("div", Kp, [
                              e("div", Vp, [
                                t[152] ||
                                  (t[152] = e(
                                    "div",
                                    { class: "modal-field-label" },
                                    "Destinations",
                                    -1
                                  )),
                                e(
                                  "button",
                                  {
                                    type: "button",
                                    class: "modal-field-btn",
                                    onClick:
                                      t[49] ||
                                      (t[49] = (n) => (h.value = !h.value)),
                                  },
                                  [
                                    e(
                                      "span",
                                      null,
                                      "Destinations: " + l(Ne.value.length),
                                      1
                                    ),
                                    e(
                                      "img",
                                      {
                                        src: h.value ? he(ot) : he(at),
                                        alt: "",
                                        class: "caret-icon",
                                      },
                                      null,
                                      8,
                                      qp
                                    ),
                                  ]
                                ),
                                h.value
                                  ? (o(),
                                    i("div", Wp, [
                                      e(
                                        "div",
                                        { class: "dropdown-group-title" },
                                        l(ms)
                                      ),
                                      (o(),
                                      i(
                                        V,
                                        null,
                                        se(Dt, (n) =>
                                          e(
                                            "div",
                                            {
                                              class: "list-row",
                                              key: n,
                                              onClick: (d) => js(n),
                                            },
                                            [
                                              e("div", Yp, l(n), 1),
                                              be(
                                                e(
                                                  "input",
                                                  {
                                                    class: "check",
                                                    type: "checkbox",
                                                    value: n,
                                                    "onUpdate:modelValue":
                                                      t[50] ||
                                                      (t[50] = (d) =>
                                                        (Ne.value = d)),
                                                    onClick:
                                                      t[51] ||
                                                      (t[51] = j(() => {}, [
                                                        "stop",
                                                      ])),
                                                  },
                                                  null,
                                                  8,
                                                  Jp
                                                ),
                                                [[yt, Ne.value]]
                                              ),
                                            ],
                                            8,
                                            Hp
                                          )
                                        ),
                                        64
                                      )),
                                    ]))
                                  : M("", !0),
                              ]),
                              e("div", jp, [
                                t[153] ||
                                  (t[153] = e(
                                    "div",
                                    { class: "modal-field-label" },
                                    "Ships",
                                    -1
                                  )),
                                e(
                                  "button",
                                  {
                                    type: "button",
                                    class: "modal-field-btn",
                                    onClick:
                                      t[52] ||
                                      (t[52] = (n) => (g.value = !g.value)),
                                  },
                                  [
                                    e(
                                      "span",
                                      null,
                                      "Ships: " + l(Oe.value.length),
                                      1
                                    ),
                                    e(
                                      "img",
                                      {
                                        src: g.value ? he(ot) : he(at),
                                        alt: "",
                                        class: "caret-icon",
                                      },
                                      null,
                                      8,
                                      Xp
                                    ),
                                  ]
                                ),
                                g.value
                                  ? (o(),
                                    i("div", Qp, [
                                      e("div", Zp, l(pn.value), 1),
                                      At.value
                                        ? (o(),
                                          i("div", e1, "Loading ships..."))
                                        : (o(!0),
                                          i(
                                            V,
                                            { key: 1 },
                                            se(
                                              nt.value,
                                              (n) => (
                                                o(),
                                                i(
                                                  "div",
                                                  {
                                                    class: "list-row",
                                                    key: n.id,
                                                    onClick: (d) => Xs(n.id),
                                                  },
                                                  [
                                                    e("div", s1, l(n.label), 1),
                                                    be(
                                                      e(
                                                        "input",
                                                        {
                                                          class: "check",
                                                          type: "checkbox",
                                                          value: n.id,
                                                          "onUpdate:modelValue":
                                                            t[53] ||
                                                            (t[53] = (d) =>
                                                              (Oe.value = d)),
                                                          onClick:
                                                            t[54] ||
                                                            (t[54] =
                                                              j(() => {}, [
                                                                "stop",
                                                              ])),
                                                        },
                                                        null,
                                                        8,
                                                        n1
                                                      ),
                                                      [[yt, Oe.value]]
                                                    ),
                                                  ],
                                                  8,
                                                  t1
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                    ]))
                                  : M("", !0),
                              ]),
                              e("div", a1, [
                                t[160] ||
                                  (t[160] = e(
                                    "div",
                                    { class: "modal-field-label" },
                                    "Cabins & Guests",
                                    -1
                                  )),
                                e(
                                  "button",
                                  {
                                    type: "button",
                                    class: "modal-field-btn",
                                    onClick:
                                      t[55] ||
                                      (t[55] = (n) => (v.value = !v.value)),
                                  },
                                  [
                                    ce.value
                                      ? (o(),
                                        i(
                                          "span",
                                          o1,
                                          "Flexible: " +
                                            l(ue.value) +
                                            " Guest" +
                                            l(ue.value !== 1 ? "s" : ""),
                                          1
                                        ))
                                      : (o(),
                                        i(
                                          "span",
                                          i1,
                                          l(Y.value.length) +
                                            " Cabin" +
                                            l(Y.value.length !== 1 ? "s" : "") +
                                            ", " +
                                            l(Be.value) +
                                            " Guest" +
                                            l(Be.value !== 1 ? "s" : ""),
                                          1
                                        )),
                                    e(
                                      "img",
                                      {
                                        src: v.value ? he(ot) : he(at),
                                        alt: "",
                                        class: "caret-icon",
                                      },
                                      null,
                                      8,
                                      l1
                                    ),
                                  ]
                                ),
                                v.value
                                  ? (o(),
                                    i("div", r1, [
                                      e("div", c1, [
                                        e(
                                          "button",
                                          {
                                            type: "button",
                                            class: B([
                                              "sidebar-pill-btn",
                                              { active: ce.value },
                                            ]),
                                            onClick:
                                              t[56] ||
                                              (t[56] = (n) => (ce.value = !0)),
                                          },
                                          " Flexible ",
                                          2
                                        ),
                                        e(
                                          "button",
                                          {
                                            type: "button",
                                            class: B([
                                              "sidebar-pill-btn",
                                              { active: !ce.value },
                                            ]),
                                            onClick:
                                              t[57] ||
                                              (t[57] = (n) => (ce.value = !1)),
                                          },
                                          " Structured ",
                                          2
                                        ),
                                      ]),
                                      ce.value
                                        ? (o(),
                                          i("div", u1, [
                                            e("div", d1, [
                                              t[154] ||
                                                (t[154] = e(
                                                  "span",
                                                  { class: "label" },
                                                  "Total Guests",
                                                  -1
                                                )),
                                              e("div", v1, [
                                                e(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    class: "btn-ctrl",
                                                    disabled: ue.value <= 1,
                                                    onClick:
                                                      t[58] ||
                                                      (t[58] = (n) =>
                                                        ue.value--),
                                                  },
                                                  " − ",
                                                  8,
                                                  p1
                                                ),
                                                e("span", m1, l(ue.value), 1),
                                                e(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    class: "btn-ctrl",
                                                    onClick:
                                                      t[59] ||
                                                      (t[59] = (n) =>
                                                        ue.value++),
                                                  },
                                                  " + "
                                                ),
                                              ]),
                                            ]),
                                            t[155] ||
                                              (t[155] = e(
                                                "p",
                                                { class: "sidebar-note" },
                                                " We will automatically find the best cabin combination for your group. ",
                                                -1
                                              )),
                                          ]))
                                        : (o(),
                                          i("div", f1, [
                                            (o(!0),
                                            i(
                                              V,
                                              null,
                                              se(
                                                Y.value,
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
                                                      e("div", h1, [
                                                        e("div", g1, [
                                                          e(
                                                            "span",
                                                            b1,
                                                            "CABIN " + l(d + 1),
                                                            1
                                                          ),
                                                          e(
                                                            "span",
                                                            y1,
                                                            l(
                                                              n.adults +
                                                                n.children
                                                            ) +
                                                              " guest" +
                                                              l(
                                                                n.adults +
                                                                  n.children !==
                                                                  1
                                                                  ? "s"
                                                                  : ""
                                                              ),
                                                            1
                                                          ),
                                                        ]),
                                                        e("div", k1, [
                                                          Y.value.length > 1
                                                            ? (o(),
                                                              i(
                                                                "button",
                                                                {
                                                                  key: 0,
                                                                  type: "button",
                                                                  class:
                                                                    "cabin-remove-btn-sidebar",
                                                                  onClick: j(
                                                                    (p) =>
                                                                      Zs(d),
                                                                    ["stop"]
                                                                  ),
                                                                  title:
                                                                    "Remove cabin",
                                                                },
                                                                [
                                                                  ...(t[156] ||
                                                                    (t[156] = [
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
                                                                            }
                                                                          ),
                                                                        ],
                                                                        -1
                                                                      ),
                                                                    ])),
                                                                ],
                                                                8,
                                                                w1
                                                              ))
                                                            : M("", !0),
                                                          e(
                                                            "button",
                                                            {
                                                              type: "button",
                                                              class:
                                                                "cabin-toggle-btn-sidebar",
                                                              onClick: j(
                                                                (p) => en(d),
                                                                ["stop"]
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
                                                                  ...(t[157] ||
                                                                    (t[157] = [
                                                                      e(
                                                                        "polyline",
                                                                        {
                                                                          points:
                                                                            "6 9 12 15 18 9",
                                                                        },
                                                                        null,
                                                                        -1
                                                                      ),
                                                                    ])),
                                                                ],
                                                                2
                                                              )),
                                                            ],
                                                            8,
                                                            _1
                                                          ),
                                                        ]),
                                                      ]),
                                                      n.expanded
                                                        ? (o(),
                                                          i("div", C1, [
                                                            e("div", $1, [
                                                              t[158] ||
                                                                (t[158] = e(
                                                                  "span",
                                                                  {
                                                                    class:
                                                                      "counter-label-sidebar",
                                                                  },
                                                                  "Adults",
                                                                  -1
                                                                )),
                                                              e("div", S1, [
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
                                                                      p
                                                                    ) =>
                                                                      Qt(
                                                                        d,
                                                                        "adults"
                                                                      ),
                                                                  },
                                                                  " − ",
                                                                  8,
                                                                  x1
                                                                ),
                                                                e(
                                                                  "span",
                                                                  D1,
                                                                  l(n.adults),
                                                                  1
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
                                                                      qt,
                                                                    onClick: (
                                                                      p
                                                                    ) =>
                                                                      Xt(
                                                                        d,
                                                                        "adults"
                                                                      ),
                                                                  },
                                                                  " + ",
                                                                  8,
                                                                  T1
                                                                ),
                                                              ]),
                                                            ]),
                                                            e("div", A1, [
                                                              t[159] ||
                                                                (t[159] = e(
                                                                  "span",
                                                                  {
                                                                    class:
                                                                      "counter-label-sidebar",
                                                                  },
                                                                  "Children",
                                                                  -1
                                                                )),
                                                              e("div", I1, [
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
                                                                      p
                                                                    ) =>
                                                                      Qt(
                                                                        d,
                                                                        "children"
                                                                      ),
                                                                  },
                                                                  " − ",
                                                                  8,
                                                                  N1
                                                                ),
                                                                e(
                                                                  "span",
                                                                  M1,
                                                                  l(n.children),
                                                                  1
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
                                                                      qt,
                                                                    onClick: (
                                                                      p
                                                                    ) =>
                                                                      Xt(
                                                                        d,
                                                                        "children"
                                                                      ),
                                                                  },
                                                                  " + ",
                                                                  8,
                                                                  E1
                                                                ),
                                                              ]),
                                                            ]),
                                                          ]))
                                                        : M("", !0),
                                                    ]
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                            ct.value
                                              ? (o(),
                                                i(
                                                  "button",
                                                  {
                                                    key: 0,
                                                    type: "button",
                                                    class:
                                                      "btn-add-cabin-sidebar",
                                                    onClick: Qs,
                                                  },
                                                  " + Add Another Cabin "
                                                ))
                                              : M("", !0),
                                          ])),
                                    ]))
                                  : M("", !0),
                              ]),
                              e("div", R1, [
                                t[162] ||
                                  (t[162] = e(
                                    "div",
                                    { class: "modal-field-label" },
                                    "Dates",
                                    -1
                                  )),
                                e(
                                  "button",
                                  {
                                    type: "button",
                                    class: "modal-field-btn",
                                    onClick:
                                      t[60] ||
                                      (t[60] = (n) => (E.value = !E.value)),
                                  },
                                  [
                                    e(
                                      "span",
                                      null,
                                      l(
                                        c.value
                                          ? `${c.value} → ${y.value || "..."}`
                                          : "Select dates"
                                      ),
                                      1
                                    ),
                                    e(
                                      "img",
                                      {
                                        src: E.value ? he(ot) : he(at),
                                        alt: "",
                                        class: "caret-icon",
                                      },
                                      null,
                                      8,
                                      P1
                                    ),
                                  ]
                                ),
                                E.value
                                  ? (o(),
                                    i("div", O1, [
                                      e("div", L1, [
                                        e("div", B1, [
                                          e("h4", F1, l(ln.value), 1),
                                          e(
                                            "div",
                                            { class: "calendar-nav-group" },
                                            [
                                              e(
                                                "button",
                                                {
                                                  class: "calendar-nav",
                                                  onClick: dn,
                                                  type: "button",
                                                },
                                                " ‹ "
                                              ),
                                              e(
                                                "button",
                                                {
                                                  class: "calendar-nav",
                                                  onClick: un,
                                                  type: "button",
                                                },
                                                " › "
                                              ),
                                            ]
                                          ),
                                        ]),
                                        e("div", z1, [
                                          t[161] ||
                                            (t[161] = e(
                                              "div",
                                              { class: "calendar-weekdays" },
                                              [
                                                e(
                                                  "div",
                                                  { class: "weekday" },
                                                  "Su"
                                                ),
                                                e(
                                                  "div",
                                                  { class: "weekday" },
                                                  "Mo"
                                                ),
                                                e(
                                                  "div",
                                                  { class: "weekday" },
                                                  "Tu"
                                                ),
                                                e(
                                                  "div",
                                                  { class: "weekday" },
                                                  "We"
                                                ),
                                                e(
                                                  "div",
                                                  { class: "weekday" },
                                                  "Th"
                                                ),
                                                e(
                                                  "div",
                                                  { class: "weekday" },
                                                  "Fr"
                                                ),
                                                e(
                                                  "div",
                                                  { class: "weekday" },
                                                  "Sa"
                                                ),
                                              ],
                                              -1
                                            )),
                                          e("div", U1, [
                                            (o(!0),
                                            i(
                                              V,
                                              null,
                                              se(
                                                rn.value,
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
                                                      onClick: (d) => vn(n),
                                                      type: "button",
                                                    },
                                                    l(n.date),
                                                    11,
                                                    G1
                                                  )
                                                )
                                              ),
                                              128
                                            )),
                                          ]),
                                        ]),
                                      ]),
                                    ]))
                                  : M("", !0),
                              ]),
                              e("div", K1, [
                                t[165] ||
                                  (t[165] = e(
                                    "div",
                                    { class: "modal-field-label" },
                                    "Trip Duration",
                                    -1
                                  )),
                                e("div", V1, [
                                  e("div", q1, [
                                    t[163] ||
                                      (t[163] = e(
                                        "div",
                                        { class: "counter-text" },
                                        [
                                          e(
                                            "div",
                                            { class: "counter-title" },
                                            "Min"
                                          ),
                                        ],
                                        -1
                                      )),
                                    e("div", W1, [
                                      e(
                                        "button",
                                        {
                                          type: "button",
                                          class: "btn-icon",
                                          disabled: P.value <= 1,
                                          onClick: tn,
                                        },
                                        " − ",
                                        8,
                                        H1
                                      ),
                                      e("span", Y1, l(P.value), 1),
                                      e(
                                        "button",
                                        {
                                          type: "button",
                                          class: "btn-icon",
                                          disabled: P.value >= D.value,
                                          onClick: sn,
                                        },
                                        " + ",
                                        8,
                                        J1
                                      ),
                                    ]),
                                  ]),
                                  e("div", j1, [
                                    t[164] ||
                                      (t[164] = e(
                                        "div",
                                        { class: "counter-text" },
                                        [
                                          e(
                                            "div",
                                            { class: "counter-title" },
                                            "Max"
                                          ),
                                        ],
                                        -1
                                      )),
                                    e("div", X1, [
                                      e(
                                        "button",
                                        {
                                          type: "button",
                                          class: "btn-icon",
                                          disabled: D.value <= P.value,
                                          onClick: nn,
                                        },
                                        " − ",
                                        8,
                                        Q1
                                      ),
                                      e("span", Z1, l(D.value), 1),
                                      e(
                                        "button",
                                        {
                                          type: "button",
                                          class: "btn-icon",
                                          disabled: D.value >= Xe,
                                          onClick: an,
                                        },
                                        " + ",
                                        8,
                                        em
                                      ),
                                    ]),
                                  ]),
                                  e("div", tm, [
                                    e(
                                      "button",
                                      {
                                        type: "button",
                                        class: "btn-reset-duration",
                                        onClick: on,
                                        disabled:
                                          P.value === 1 && D.value === Xe,
                                      },
                                      " Reset to Any Duration ",
                                      8,
                                      sm
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]),
                            e("div", { class: "mobile-filter-modal-footer" }, [
                              e(
                                "button",
                                { class: "btn-apply-modal", onClick: oe },
                                " Apply "
                              ),
                            ]),
                          ]),
                        ]
                      ))
                    : M("", !0),
                ])),
                ke(
                  Vs,
                  { isOpen: qe.value, onClose: Ra, onNavigateToResults: Pa },
                  null,
                  8,
                  ["isOpen"]
                ),
              ],
              64
            )
          );
        }
      );
    },
  },
  om = { class: "plan-wrap plan-page" },
  im = { class: "plan-content" },
  lm = { class: "steps", role: "tablist", "aria-label": "Plan steps" },
  rm = ["disabled"],
  cm = ["disabled"],
  um = ["disabled"],
  dm = ["disabled"],
  vm = { key: 0 },
  pm = { class: "list" },
  mm = { class: "list-text" },
  fm = ["value", "aria-label"],
  hm = { key: 1 },
  gm = { class: "list" },
  bm = { class: "list-text" },
  ym = ["value", "aria-label"],
  km = { key: 2 },
  wm = { class: "date-range-display" },
  _m = { class: "date-value" },
  Cm = { class: "date-value" },
  $m = { class: "custom-calendar" },
  Sm = { class: "calendar-header" },
  xm = { class: "calendar-title" },
  Dm = { class: "calendar-grid" },
  Tm = { class: "calendar-days" },
  Am = ["disabled", "onClick"],
  Im = { key: 3 },
  Nm = { class: "counters" },
  Mm = { class: "counter-row" },
  Em = { class: "counter-ctrls" },
  Rm = { class: "count" },
  Pm = { class: "counter-row" },
  Om = { class: "counter-ctrls" },
  Lm = { class: "count" },
  Bm = { class: "counter-row" },
  Fm = { class: "counter-ctrls" },
  zm = { class: "count" },
  Um = { class: "counter-row" },
  Gm = { class: "counter-ctrls" },
  Km = { class: "count" },
  Vm = { key: 4 },
  qm = { class: "mt-4" },
  Wm = { class: "mt-4" },
  Hm = { class: "mt-4", style: { "text-align": "right" } },
  Ym = { class: "bottom-bar" },
  Jm = {
    class: "nav-inner",
    style: {
      display: "flex",
      "align-items": "center",
      "justify-content": "space-between",
    },
  },
  jm = { key: 1 },
  Xm = "Nusa Tenggara Timur",
  Qm = {
    __name: "Plan",
    setup(S) {
      const b = m(1),
        f = ["Pulau Komodo", "Labuan Bajo"],
        C = [],
        h = m(""),
        g = m(""),
        v = m(""),
        E = m(""),
        X = m(2),
        A = m(0),
        oe = m(0),
        te = m(0),
        Z = m(new Date().getMonth()),
        q = m(new Date().getFullYear()),
        W = ["Destinations", "Ships", "Dates", "Guests", "Submit"],
        Se = x(() => W[b.value - 2] || ""),
        Ce = x(() => (b.value < 5 ? W[b.value - 1] + " ›" : "Submit ›"));
      x(() => new Date().toISOString().split("T")[0]);
      const ie = x(
          () =>
            `${
              [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ][Z.value]
            } ${q.value}`
        ),
        O = x(() => {
          const ne = new Date(q.value, Z.value, 1),
            k = new Date(q.value, Z.value + 1, 0),
            Ie = new Date(ne),
            R = new Date();
          Ie.setDate(Ie.getDate() - Ie.getDay());
          const De = [],
            et = new Date(k);
          et.setDate(et.getDate() + (6 - k.getDay()));
          for (let Ee = new Date(Ie); Ee <= et; Ee.setDate(Ee.getDate() + 1)) {
            Ee.getDay();
            const tt = Ee.getMonth() === Z.value,
              We = new Date(Ee);
            We.setHours(0, 0, 0, 0);
            const pe = new Date(R);
            pe.setHours(0, 0, 0, 0);
            const He = We < pe,
              Re = tt && !He,
              Le = Ee.toISOString().split("T")[0];
            let _t = !1,
              je = !1,
              Ct = !1;
            if (v.value && E.value && tt) {
              const rt = new Date(v.value + "T00:00:00"),
                st = new Date(E.value + "T00:00:00");
              We >= rt &&
                We <= st &&
                ((_t = !0),
                We.getTime() === rt.getTime() && (je = !0),
                We.getTime() === st.getTime() && (Ct = !0));
            }
            De.push({
              key: Ee.getTime(),
              date: Ee.getDate(),
              fullDate: Le,
              isCurrentMonth: tt,
              isSelectable: Re,
              isPast: He,
              isSelected: v.value === Le || E.value === Le,
              isInRange: _t,
              isRangeStart: je,
              isRangeEnd: Ct,
            });
          }
          return De;
        }),
        H = x(() => !!h.value),
        le = x(() => !!h.value && !!g.value),
        ve = x(() => !!h.value && !!g.value && !!v.value);
      lt(h, () => {
        g.value = "";
      });
      function F(ne) {
        b.value = ne;
      }
      function G() {
        if (b.value === 1 && !h.value)
          return qe("Please select a destination first.");
        if (b.value === 2 && !g.value) return qe("Please select a ship first.");
        if (b.value === 3 && !v.value)
          return qe("Please select a start date first.");
        b.value < 5 ? b.value++ : ge();
      }
      function w() {
        b.value > 1 && b.value--;
      }
      function ge() {
        const ne = {
          region: Xm,
          destination: h.value,
          ship: g.value,
          lodges: g.value ? [g.value] : [],
          dateFrom: v.value,
          dateTo: E.value,
          adults: X.value,
          children: A.value,
          age3_9: oe.value,
          age0_2: te.value,
          totalGuests: X.value + A.value + oe.value + te.value,
          timestamp: Date.now(),
        };
        localStorage.setItem("komodo_search_criteria", JSON.stringify(ne)),
          (window.location.href = "/results");
      }
      function fe(ne) {
        ne === "adults"
          ? X.value++
          : ne === "children"
          ? A.value++
          : ne === "age3_9"
          ? oe.value++
          : ne === "age0_2" && te.value++;
      }
      function xe(ne) {
        ne === "adults" && X.value > 0
          ? X.value--
          : ne === "children" && A.value > 0
          ? A.value--
          : ne === "age3_9" && oe.value > 0
          ? oe.value--
          : ne === "age0_2" && te.value > 0 && te.value--;
      }
      function qe(ne) {
        alert(ne);
      }
      function me() {
        Z.value === 0 ? ((Z.value = 11), q.value--) : Z.value--;
      }
      function Ae() {
        Z.value === 11 ? ((Z.value = 0), q.value++) : Z.value++;
      }
      function Ze(ne) {
        if (ne.isSelectable)
          if (!v.value || (v.value && E.value))
            (v.value = ne.fullDate), (E.value = "");
          else {
            const k = new Date(v.value + "T00:00:00");
            new Date(ne.fullDate + "T00:00:00") < k
              ? ((E.value = v.value), (v.value = ne.fullDate))
              : (E.value = ne.fullDate);
          }
      }
      return (ne, k) => {
        const Ie = Wt("router-link");
        return (
          o(),
          i("section", om, [
            e("div", im, [
              e("div", lm, [
                e(
                  "button",
                  {
                    class: B(["step", { "step-active": b.value === 1 }]),
                    onClick: k[0] || (k[0] = (R) => F(1)),
                  },
                  " Step 1 ",
                  2
                ),
                e(
                  "button",
                  {
                    class: B(["step", { "step-active": b.value === 2 }]),
                    onClick: k[1] || (k[1] = (R) => F(2)),
                    disabled: !H.value,
                  },
                  " Step 2 ",
                  10,
                  rm
                ),
                e(
                  "button",
                  {
                    class: B(["step", { "step-active": b.value === 3 }]),
                    onClick: k[2] || (k[2] = (R) => F(3)),
                    disabled: !le.value,
                  },
                  " Step 3 ",
                  10,
                  cm
                ),
                e(
                  "button",
                  {
                    class: B(["step", { "step-active": b.value === 4 }]),
                    onClick: k[3] || (k[3] = (R) => F(4)),
                    disabled: !ve.value,
                  },
                  " Step 4 ",
                  10,
                  um
                ),
                e(
                  "button",
                  {
                    class: B(["step", { "step-active": b.value === 5 }]),
                    onClick: k[4] || (k[4] = (R) => F(5)),
                    disabled: !ve.value,
                  },
                  " Step 5 ",
                  10,
                  dm
                ),
              ]),
              b.value === 1
                ? (o(),
                  i("div", vm, [
                    k[16] ||
                      (k[16] = e(
                        "h3",
                        { class: "step-title" },
                        "Destinations",
                        -1
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
                            "Nusa Tenggara Timur"
                          ),
                        ],
                        -1
                      )),
                    k[18] ||
                      (k[18] = e(
                        "p",
                        { class: "results-note" },
                        "Select a destination you're interested in:",
                        -1
                      )),
                    e("div", pm, [
                      k[15] ||
                        (k[15] = e(
                          "div",
                          { class: "list-heading" },
                          "Nusa Tenggara Timur",
                          -1
                        )),
                      (o(),
                      i(
                        V,
                        null,
                        se(f, (R) =>
                          e("div", { class: "list-row", key: R }, [
                            e("div", mm, l(R), 1),
                            be(
                              e(
                                "input",
                                {
                                  class: "radio",
                                  type: "radio",
                                  name: "destination",
                                  value: R,
                                  "onUpdate:modelValue":
                                    k[5] || (k[5] = (De) => (h.value = De)),
                                  "aria-label": `Destination ${R}`,
                                },
                                null,
                                8,
                                fm
                              ),
                              [[Mn, h.value]]
                            ),
                          ])
                        ),
                        64
                      )),
                    ]),
                  ]))
                : b.value === 2
                ? (o(),
                  i("div", hm, [
                    k[19] ||
                      (k[19] = e("h3", { class: "step-title" }, "Ships", -1)),
                    k[20] ||
                      (k[20] = e(
                        "p",
                        { class: "results-note" },
                        "Please select a ship:",
                        -1
                      )),
                    e("div", gm, [
                      (o(),
                      i(
                        V,
                        null,
                        se(C, (R) =>
                          e("div", { class: "list-row", key: R }, [
                            e("div", bm, l(R), 1),
                            be(
                              e(
                                "input",
                                {
                                  class: "radio",
                                  type: "radio",
                                  name: "ship",
                                  value: R,
                                  "onUpdate:modelValue":
                                    k[6] || (k[6] = (De) => (g.value = De)),
                                  "aria-label": `Ship ${R}`,
                                },
                                null,
                                8,
                                ym
                              ),
                              [[Mn, g.value]]
                            ),
                          ])
                        ),
                        64
                      )),
                    ]),
                  ]))
                : b.value === 3
                ? (o(),
                  i("div", km, [
                    k[23] ||
                      (k[23] = e("h3", { class: "step-title" }, "Dates", -1)),
                    k[24] ||
                      (k[24] = e(
                        "p",
                        { class: "results-note" },
                        "Select your travel dates:",
                        -1
                      )),
                    k[25] ||
                      (k[25] = e(
                        "p",
                        { class: "results-note text-sm" },
                        " Click to select start date, then click again to select end date. ",
                        -1
                      )),
                    e("div", wm, [
                      e("span", _m, l(v.value || "Start date"), 1),
                      k[21] ||
                        (k[21] = e("span", { class: "date-arrow" }, "→", -1)),
                      e("span", Cm, l(E.value || "End date"), 1),
                    ]),
                    e("div", $m, [
                      e("div", Sm, [
                        e(
                          "button",
                          {
                            class: "calendar-nav",
                            onClick: me,
                            type: "button",
                          },
                          " ‹ "
                        ),
                        e("h4", xm, l(ie.value), 1),
                        e(
                          "button",
                          {
                            class: "calendar-nav",
                            onClick: Ae,
                            type: "button",
                          },
                          " › "
                        ),
                      ]),
                      e("div", Dm, [
                        k[22] ||
                          (k[22] = Pe(
                            '<div class="calendar-weekdays"><div class="weekday">Su</div><div class="weekday">Mo</div><div class="weekday">Tu</div><div class="weekday">We</div><div class="weekday">Th</div><div class="weekday">Fr</div><div class="weekday">Sa</div></div>',
                            1
                          )),
                        e("div", Tm, [
                          (o(!0),
                          i(
                            V,
                            null,
                            se(
                              O.value,
                              (R) => (
                                o(),
                                i(
                                  "button",
                                  {
                                    key: R.key,
                                    class: B([
                                      "calendar-day",
                                      {
                                        "other-month": !R.isCurrentMonth,
                                        selected: R.isSelected,
                                        disabled: !R.isSelectable,
                                        past: R.isPast,
                                        "in-range": R.isInRange,
                                        "range-start": R.isRangeStart,
                                        "range-end": R.isRangeEnd,
                                      },
                                    ]),
                                    disabled: !R.isSelectable,
                                    onClick: (De) => Ze(R),
                                    type: "button",
                                  },
                                  l(R.date),
                                  11,
                                  Am
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                      ]),
                    ]),
                  ]))
                : b.value === 4
                ? (o(),
                  i("div", Im, [
                    k[30] ||
                      (k[30] = e("h3", { class: "step-title" }, "Guests", -1)),
                    k[31] ||
                      (k[31] = e(
                        "p",
                        { class: "results-note" },
                        " Please indicate how many adults will need to be accommodated. ",
                        -1
                      )),
                    k[32] ||
                      (k[32] = e(
                        "p",
                        { class: "results-note" },
                        " If your booking includes children, please enquire directly on the next step. ",
                        -1
                      )),
                    k[33] ||
                      (k[33] = e(
                        "p",
                        { class: "results-note" },
                        "View our child policy for each lodge here.",
                        -1
                      )),
                    e("div", Nm, [
                      e("div", Mm, [
                        k[26] ||
                          (k[26] = e(
                            "div",
                            { class: "counter-text" },
                            [
                              e("div", { class: "semibold" }, "Adults"),
                              e("div", { class: "muted text-sm" }, "Ages 17+"),
                            ],
                            -1
                          )),
                        e("div", Em, [
                          e(
                            "button",
                            {
                              type: "button",
                              class: "btn-icon",
                              onClick: k[7] || (k[7] = (R) => xe("adults")),
                            },
                            " − "
                          ),
                          e("span", Rm, l(X.value), 1),
                          e(
                            "button",
                            {
                              type: "button",
                              class: "btn-icon",
                              onClick: k[8] || (k[8] = (R) => fe("adults")),
                            },
                            " + "
                          ),
                        ]),
                      ]),
                      e("div", Pm, [
                        k[27] ||
                          (k[27] = e(
                            "div",
                            { class: "counter-text" },
                            [
                              e("div", { class: "semibold" }, "Children"),
                              e(
                                "div",
                                { class: "muted text-sm" },
                                "Ages 10 - 16"
                              ),
                            ],
                            -1
                          )),
                        e("div", Om, [
                          e(
                            "button",
                            {
                              type: "button",
                              class: "btn-icon",
                              onClick: k[9] || (k[9] = (R) => xe("children")),
                            },
                            " − "
                          ),
                          e("span", Lm, l(A.value), 1),
                          e(
                            "button",
                            {
                              type: "button",
                              class: "btn-icon",
                              onClick: k[10] || (k[10] = (R) => fe("children")),
                            },
                            " + "
                          ),
                        ]),
                      ]),
                      e("div", Bm, [
                        k[28] ||
                          (k[28] = e(
                            "div",
                            { class: "counter-text" },
                            [e("div", { class: "semibold" }, "Ages 3 - 9")],
                            -1
                          )),
                        e("div", Fm, [
                          e(
                            "button",
                            {
                              type: "button",
                              class: "btn-icon",
                              onClick: k[11] || (k[11] = (R) => xe("age3_9")),
                            },
                            " − "
                          ),
                          e("span", zm, l(oe.value), 1),
                          e(
                            "button",
                            {
                              type: "button",
                              class: "btn-icon",
                              onClick: k[12] || (k[12] = (R) => fe("age3_9")),
                            },
                            " + "
                          ),
                        ]),
                      ]),
                      e("div", Um, [
                        k[29] ||
                          (k[29] = e(
                            "div",
                            { class: "counter-text" },
                            [e("div", { class: "semibold" }, "Ages 0 - 2")],
                            -1
                          )),
                        e("div", Gm, [
                          e(
                            "button",
                            {
                              type: "button",
                              class: "btn-icon",
                              onClick: k[13] || (k[13] = (R) => xe("age0_2")),
                            },
                            " − "
                          ),
                          e("span", Km, l(te.value), 1),
                          e(
                            "button",
                            {
                              type: "button",
                              class: "btn-icon",
                              onClick: k[14] || (k[14] = (R) => fe("age0_2")),
                            },
                            " + "
                          ),
                        ]),
                      ]),
                    ]),
                  ]))
                : (o(),
                  i("div", Vm, [
                    k[37] ||
                      (k[37] = e(
                        "h3",
                        { class: "step-title" },
                        "Check Availability",
                        -1
                      )),
                    k[38] ||
                      (k[38] = e(
                        "p",
                        { class: "results-note" },
                        " To see if we have availability for your preferred criteria, please click the button below. ",
                        -1
                      )),
                    e("div", qm, [
                      ke(
                        Ie,
                        { class: "btn-primary", to: "/results" },
                        {
                          default: Me(() => [
                            ...(k[34] || (k[34] = [Q("Check now", -1)])),
                          ]),
                          _: 1,
                        }
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
                        -1
                      )),
                    k[40] ||
                      (k[40] = e(
                        "h4",
                        { class: "section-title" },
                        " Speak with a Komodo Cruises Travel Advisor ",
                        -1
                      )),
                    k[41] ||
                      (k[41] = e(
                        "p",
                        { class: "results-note" },
                        " Need some help to plan your trip? Enquire below to contact one of our Komodo Cruises Travel Advisors. ",
                        -1
                      )),
                    e("div", Wm, [
                      ke(
                        Ie,
                        { class: "btn-primary", to: "/results" },
                        {
                          default: Me(() => [
                            ...(k[35] || (k[35] = [Q("Enquire now", -1)])),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    e("div", Hm, [
                      ke(
                        Ie,
                        { to: "/", class: "nav-link" },
                        {
                          default: Me(() => [
                            ...(k[36] || (k[36] = [Q("Back to Search", -1)])),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ])),
              e("div", Ym, [
                e("div", Jm, [
                  b.value > 1
                    ? (o(),
                      i(
                        "button",
                        { key: 0, class: "link-muted", onClick: w },
                        " ‹ " + l(Se.value),
                        1
                      ))
                    : (o(), i("span", jm)),
                  e(
                    "button",
                    { class: "btn-primary", onClick: G },
                    l(Ce.value),
                    1
                  ),
                ]),
              ]),
            ]),
          ])
        );
      };
    },
  },
  Zm = { class: "payment-success-page" },
  ef = { class: "success-container" },
  tf = { class: "success-content" },
  sf = { class: "booking-card" },
  nf = { class: "booking-header" },
  af = { class: "booking-id" },
  of = { class: "value" },
  lf = { class: "booking-details" },
  rf = { class: "detail-section" },
  cf = { class: "detail-grid" },
  uf = { class: "detail-item" },
  df = { class: "value" },
  vf = { class: "detail-item" },
  pf = { class: "value" },
  mf = { class: "detail-item" },
  ff = { class: "value" },
  hf = { class: "detail-section" },
  gf = { class: "detail-grid" },
  bf = { class: "detail-item" },
  yf = { class: "value" },
  kf = { class: "detail-item" },
  wf = { class: "value" },
  _f = { class: "detail-item" },
  Cf = { class: "value" },
  $f = { class: "detail-item" },
  Sf = { class: "value" },
  xf = { class: "detail-item" },
  Df = { class: "value" },
  Tf = { class: "detail-section payment-section" },
  Af = { class: "payment-breakdown" },
  If = { class: "payment-row" },
  Nf = { class: "payment-row total" },
  Mf = { class: "total-amount" },
  Ef = { class: "email-notice" },
  Rf = { class: "email-content" },
  Pf = { key: 0 },
  Of = { key: 1 },
  Lf = { key: 2 },
  Bf = { class: "action-buttons" },
  Ff = {
    __name: "PaymentSuccess",
    setup(S) {
      const b = m("sending"),
        f = Ya({
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
            (b.value = "sending"),
              (
                await (
                  await fetch(
                    "https://komodo-cruises-production-0c52.up.railway.app/api/send-confirmation-email",
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
                    }
                  )
                ).json()
              ).success
                ? (b.value = "sent")
                : (b.value = "failed");
          } catch (g) {
            console.error("Failed to send email:", g), (b.value = "failed");
          }
        };
      return (
        Qe(async () => {
          try {
            const g = localStorage.getItem("komodo_last_enquiry");
            if (g) {
              const v = JSON.parse(g);
              if (
                (v.form &&
                  ((f.customerName =
                    `${v.form.title || ""} ${v.form.firstName || ""} ${
                      v.form.lastName || ""
                    }`.trim() || "Guest"),
                  (f.email = v.form.email || "guest@email.com"),
                  (f.phone = v.form.phone || "-")),
                v.itinerary && v.itinerary.length > 0)
              ) {
                const E = v.itinerary[0];
                (f.shipName = E.ship || "Komodo Cruise"),
                  (f.cabinName = E.cabin || "-"),
                  (f.itinerary = E.itinerary || "-"),
                  (f.travelDate = E.date || "To be confirmed"),
                  (f.guests = E.guests || 2),
                  (f.pricePerCabin = E.pricePerCabin || 0);
              }
              (f.totalAmount = v.amount || 0),
                (f.bookingId = v.invoiceId
                  ? `KC${Date.now().toString().slice(-8)}`
                  : "KC2025001");
            }
            localStorage.removeItem("komodo_itinerary"),
              f.email && f.email !== "guest@email.com"
                ? await h()
                : (b.value = "sent");
          } catch (g) {
            console.error("Error loading booking data:", g),
              (b.value = "failed");
          }
        }),
        (g, v) => {
          const E = Wt("router-link");
          return (
            o(),
            i("div", Zm, [
              e("div", ef, [
                v[26] ||
                  (v[26] = Pe(
                    '<div class="success-animation" data-v-67b968f1><div class="checkmark-circle" data-v-67b968f1><svg class="checkmark" viewBox="0 0 52 52" data-v-67b968f1><circle class="checkmark-circle-bg" cx="26" cy="26" r="25" fill="none" data-v-67b968f1></circle><path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" data-v-67b968f1></path></svg></div></div>',
                    1
                  )),
                e("div", tf, [
                  v[22] ||
                    (v[22] = e(
                      "h1",
                      { class: "success-title" },
                      "Thank You for Your Purchase!",
                      -1
                    )),
                  v[23] ||
                    (v[23] = e(
                      "p",
                      { class: "success-subtitle" },
                      " Your payment has been successfully processed ",
                      -1
                    )),
                  e("div", sf, [
                    e("div", nf, [
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
                              ]
                            ),
                            e("span", null, "Booking Confirmed"),
                          ],
                          -1
                        )),
                      e("div", af, [
                        v[0] ||
                          (v[0] = e(
                            "span",
                            { class: "label" },
                            "Booking ID",
                            -1
                          )),
                        e("span", of, "#" + l(f.bookingId), 1),
                      ]),
                    ]),
                    e("div", lf, [
                      e("div", rf, [
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
                                ]
                              ),
                              Q(" Guest Information "),
                            ],
                            -1
                          )),
                        e("div", cf, [
                          e("div", uf, [
                            v[2] ||
                              (v[2] = e(
                                "span",
                                { class: "label" },
                                "Name",
                                -1
                              )),
                            e("span", df, l(f.customerName), 1),
                          ]),
                          e("div", vf, [
                            v[3] ||
                              (v[3] = e(
                                "span",
                                { class: "label" },
                                "Email",
                                -1
                              )),
                            e("span", pf, l(f.email), 1),
                          ]),
                          e("div", mf, [
                            v[4] ||
                              (v[4] = e(
                                "span",
                                { class: "label" },
                                "Phone",
                                -1
                              )),
                            e("span", ff, l(f.phone), 1),
                          ]),
                        ]),
                      ]),
                      e("div", hf, [
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
                                ]
                              ),
                              Q(" Trip Details "),
                            ],
                            -1
                          )),
                        e("div", gf, [
                          e("div", bf, [
                            v[6] ||
                              (v[6] = e(
                                "span",
                                { class: "label" },
                                "Ship",
                                -1
                              )),
                            e("span", yf, l(f.shipName), 1),
                          ]),
                          e("div", kf, [
                            v[7] ||
                              (v[7] = e(
                                "span",
                                { class: "label" },
                                "Cabin Type",
                                -1
                              )),
                            e("span", wf, l(f.cabinName), 1),
                          ]),
                          e("div", _f, [
                            v[8] ||
                              (v[8] = e(
                                "span",
                                { class: "label" },
                                "Itinerary",
                                -1
                              )),
                            e("span", Cf, l(f.itinerary), 1),
                          ]),
                          e("div", $f, [
                            v[9] ||
                              (v[9] = e(
                                "span",
                                { class: "label" },
                                "Travel Date",
                                -1
                              )),
                            e("span", Sf, l(f.travelDate), 1),
                          ]),
                          e("div", xf, [
                            v[10] ||
                              (v[10] = e(
                                "span",
                                { class: "label" },
                                "Guests",
                                -1
                              )),
                            e("span", Df, l(f.guests) + " Person(s)", 1),
                          ]),
                        ]),
                      ]),
                      e("div", Tf, [
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
                                ]
                              ),
                              Q(" Payment Summary "),
                            ],
                            -1
                          )),
                        e("div", Af, [
                          e("div", If, [
                            e(
                              "span",
                              null,
                              l(f.cabinName) + " × " + l(f.guests),
                              1
                            ),
                            e(
                              "span",
                              null,
                              l(C(f.pricePerCabin)) + " × " + l(f.guests),
                              1
                            ),
                          ]),
                          v[13] ||
                            (v[13] = e(
                              "div",
                              { class: "payment-divider" },
                              null,
                              -1
                            )),
                          e("div", Nf, [
                            v[12] ||
                              (v[12] = e("span", null, "Total Paid", -1)),
                            e("span", Mf, l(C(f.totalAmount)), 1),
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
                                ]
                              ),
                              e("span", null, "Payment Successful"),
                            ],
                            -1
                          )),
                      ]),
                    ]),
                  ]),
                  e("div", Ef, [
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
                            ]
                          ),
                        ],
                        -1
                      )),
                    e("div", Rf, [
                      v[17] || (v[17] = e("h4", null, "Check Your Email", -1)),
                      e("p", null, [
                        v[16] ||
                          (v[16] = Q(
                            " A detailed receipt and booking confirmation has been sent to ",
                            -1
                          )),
                        e("strong", null, l(f.email), 1),
                      ]),
                      v[18] ||
                        (v[18] = e(
                          "p",
                          { class: "email-hint" },
                          " Don't forget to check your spam folder if you don't see it within a few minutes. ",
                          -1
                        )),
                    ]),
                    e(
                      "div",
                      { class: B(["email-status", b.value]) },
                      [
                        b.value === "sending"
                          ? (o(), i("span", Pf, "Sending..."))
                          : b.value === "sent"
                          ? (o(), i("span", Of, "✓ Email Sent"))
                          : b.value === "failed"
                          ? (o(), i("span", Lf, "⚠ Will retry"))
                          : M("", !0),
                      ],
                      2
                    ),
                  ]),
                  v[24] ||
                    (v[24] = Pe(
                      '<div class="whats-next" data-v-67b968f1><h3 data-v-67b968f1>What Happens Next?</h3><div class="next-steps" data-v-67b968f1><div class="step" data-v-67b968f1><div class="step-number" data-v-67b968f1>1</div><div class="step-content" data-v-67b968f1><strong data-v-67b968f1>Email Confirmation</strong><p data-v-67b968f1> Check your inbox for your booking receipt and trip details </p></div></div><div class="step" data-v-67b968f1><div class="step-number" data-v-67b968f1>2</div><div class="step-content" data-v-67b968f1><strong data-v-67b968f1>Journey Designer Contact</strong><p data-v-67b968f1> Our team will reach out within 24 hours to finalize your itinerary </p></div></div><div class="step" data-v-67b968f1><div class="step-number" data-v-67b968f1>3</div><div class="step-content" data-v-67b968f1><strong data-v-67b968f1>Prepare for Adventure</strong><p data-v-67b968f1> Get your travel documents ready and pack for an unforgettable trip! </p></div></div></div></div>',
                      1
                    )),
                  e("div", Bf, [
                    ke(
                      E,
                      { to: "/", class: "btn-primary" },
                      {
                        default: Me(() => [
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
                                -1
                              ),
                              Q(" Back to Home ", -1),
                            ])),
                        ]),
                        _: 1,
                      }
                    ),
                    ke(
                      E,
                      { to: "/plan", class: "btn-secondary" },
                      {
                        default: Me(() => [
                          ...(v[21] ||
                            (v[21] = [Q(" Explore More Trips ", -1)])),
                        ]),
                        _: 1,
                      }
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
                          "support@komodocruises.com"
                        ),
                      ],
                      -1
                    )),
                ]),
              ]),
            ])
          );
        }
      );
    },
  },
  zf = vt(Ff, [["__scopeId", "data-v-67b968f1"]]),
  Uf = {},
  Gf = { class: "payment-result-page" },
  Kf = { class: "payment-result-container" },
  Vf = { class: "result-actions" };
function qf(S, b) {
  const f = Wt("router-link");
  return (
    o(),
    i("div", Gf, [
      e("div", Kf, [
        b[2] ||
          (b[2] = Pe(
            '<div class="result-icon failed" data-v-690b1a80><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-690b1a80><circle cx="12" cy="12" r="10" data-v-690b1a80></circle><line x1="15" y1="9" x2="9" y2="15" data-v-690b1a80></line><line x1="9" y1="9" x2="15" y2="15" data-v-690b1a80></line></svg></div><h1 class="result-title" data-v-690b1a80>Payment Failed</h1><p class="result-message" data-v-690b1a80> We&#39;re sorry, but your payment could not be processed. </p><div class="result-details" data-v-690b1a80><p data-v-690b1a80>This could be due to:</p><ul data-v-690b1a80><li data-v-690b1a80>Insufficient funds</li><li data-v-690b1a80>Card declined by issuer</li><li data-v-690b1a80>Payment session expired</li><li data-v-690b1a80>Technical issues</li></ul><p data-v-690b1a80>Please try again or contact our support team for assistance.</p></div>',
            4
          )),
        e("div", Vf, [
          ke(
            f,
            { to: "/results", class: "btn-secondary" },
            {
              default: Me(() => [...(b[0] || (b[0] = [Q("Try Again", -1)]))]),
              _: 1,
            }
          ),
          ke(
            f,
            { to: "/", class: "btn-primary" },
            {
              default: Me(() => [
                ...(b[1] || (b[1] = [Q("Back to Home", -1)])),
              ]),
              _: 1,
            }
          ),
        ]),
      ]),
    ])
  );
}
const Wf = vt(Uf, [
    ["render", qf],
    ["__scopeId", "data-v-690b1a80"],
  ]),
  Hf = { class: "find-reservation-wrap" },
  Yf = { class: "find-reservation-container" },
  Jf = { class: "form-group" },
  jf = { class: "form-group" },
  Xf = { class: "form-actions" },
  Qf = {
    __name: "FindReservation",
    setup(S) {
      const b = m(""),
        f = m(""),
        C = () => {
          !b.value ||
            !f.value ||
            alert("Feature coming soon: Find reservation " + b.value);
        };
      return (h, g) => (
        o(),
        i("div", Hf, [
          e("div", Yf, [
            g[5] ||
              (g[5] = e(
                "h1",
                { class: "find-reservation-title" },
                "Find Your Reservation",
                -1
              )),
            e(
              "form",
              { class: "find-reservation-form", onSubmit: j(C, ["prevent"]) },
              [
                e("div", Jf, [
                  g[2] ||
                    (g[2] = e(
                      "label",
                      { class: "form-label" },
                      "Confirmation or Booking Number*",
                      -1
                    )),
                  be(
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
                      512
                    ),
                    [[kt, b.value]]
                  ),
                  g[3] ||
                    (g[3] = e(
                      "div",
                      { class: "form-help-text" },
                      " *Confirmation number format: 12345678-1-ABC ",
                      -1
                    )),
                ]),
                e("div", jf, [
                  g[4] ||
                    (g[4] = e("label", { class: "form-label" }, "Email*", -1)),
                  be(
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
                      512
                    ),
                    [[kt, f.value]]
                  ),
                ]),
                e("div", Xf, [
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
                    2
                  ),
                ]),
              ],
              32
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
                    " This number was included in an email sent at the time of booking. Please check your email to recover the number. "
                  ),
                ],
                -1
              )),
          ]),
        ])
      );
    },
  },
  Zf = vt(Qf, [["__scopeId", "data-v-9d81daa5"]]),
  eh = Ja({
    history: ja(),
    routes: [
      { path: "/", component: Qr },
      { path: "/plan", component: Qm, meta: { planHeader: !0 } },
      { path: "/results", component: am },
      { path: "/payment-success", component: zf },
      { path: "/payment-failed", component: Wf },
      { path: "/find-reservation", component: Zf },
    ],
  });
Xa(wl).use(eh).mount("#app");
