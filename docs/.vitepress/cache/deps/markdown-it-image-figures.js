// node_modules/markdown-it-image-figures/dist/markdown-it-images-figures.mjs
var t = /* @__PURE__ */ new Set([true, false, "alt", "title"]);
function e(t2, e2) {
  return (Array.isArray(t2) ? t2 : []).filter(([t3]) => t3 !== e2);
}
function n(t2, n2) {
  t2 && t2.attrs && (t2.attrs = e(t2.attrs, n2));
}
function i(e2, i2) {
  if (!t.has(e2))
    throw new TypeError(`figcaption must be one of: ${[...t]}.`);
  if ("alt" === e2)
    return i2.content;
  const r2 = i2.attrs.find(([t2]) => "title" === t2);
  return Array.isArray(r2) && r2[1] ? (n(i2, "title"), r2[1]) : void 0;
}
function r(t2, r2) {
  r2 = r2 || {}, t2.core.ruler.before("linkify", "image_figures", function(s) {
    let a = 1;
    for (let o = 1, c = s.tokens.length; o < c - 1; ++o) {
      const l = s.tokens[o];
      if ("inline" !== l.type)
        continue;
      if (!l.children || 1 !== l.children.length && 3 !== l.children.length)
        continue;
      if (1 === l.children.length && "image" !== l.children[0].type)
        continue;
      if (3 === l.children.length) {
        const [t3, e2, n2] = l.children;
        if ("link_open" !== t3.type || "image" !== e2.type || "link_close" !== n2.type)
          continue;
      }
      if (0 !== o && "paragraph_open" !== s.tokens[o - 1].type)
        continue;
      if (o !== c - 1 && "paragraph_close" !== s.tokens[o + 1].type)
        continue;
      const f = s.tokens[o - 1];
      let h;
      if (f.type = "figure_open", f.tag = "figure", s.tokens[o + 1].type = "figure_close", s.tokens[o + 1].tag = "figure", r2.dataType && s.tokens[o - 1].attrPush(["data-type", "image"]), r2.link && 1 === l.children.length) {
        [h] = l.children;
        const t3 = new s.Token("link_open", "a", 1);
        t3.attrPush(["href", h.attrGet("src")]), l.children.unshift(t3), l.children.push(new s.Token("link_close", "a", -1));
      }
      if (h = 1 === l.children.length ? l.children[0] : l.children[1], r2.figcaption) {
        const n2 = i(r2.figcaption, h);
        if (n2) {
          const [i2] = t2.parseInline(n2, s.env);
          l.children.push(new s.Token("figcaption_open", "figcaption", 1)), l.children.push(...i2.children), l.children.push(new s.Token("figcaption_close", "figcaption", -1)), h.attrs && (h.attrs = e(h.attrs, "title"));
        }
      }
      if (r2.copyAttrs && h.attrs) {
        const t3 = true === r2.copyAttrs ? "" : r2.copyAttrs;
        f.attrs = h.attrs.filter(([e2]) => e2.match(t3)).map((t4) => Array.from(t4));
      }
      if (r2.tabindex && (s.tokens[o - 1].attrPush(["tabindex", a]), a++), r2.lazy && (h.attrs.some(([t3]) => "loading" === t3) || h.attrs.push(["loading", "lazy"])), r2.async && (h.attrs.some(([t3]) => "decoding" === t3) || h.attrs.push(["decoding", "async"])), r2.classes && "string" == typeof r2.classes) {
        let t3 = false;
        for (let e2 = 0, n2 = h.attrs.length; e2 < n2 && !t3; e2++) {
          const n3 = h.attrs[e2];
          "class" === n3[0] && (n3[1] = `${n3[1]} ${r2.classes}`, t3 = true);
        }
        t3 || h.attrs.push(["class", r2.classes]);
      }
      if (r2.removeSrc) {
        const t3 = h.attrs.find(([t4]) => "src" === t4);
        h.attrs.push(["data-src", t3[1]]), n(h, "src");
      }
    }
  });
}
export {
  r as default
};
//# sourceMappingURL=markdown-it-image-figures.js.map
