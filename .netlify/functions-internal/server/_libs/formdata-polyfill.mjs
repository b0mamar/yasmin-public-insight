import { B as Blob, F as File } from "./fetch-blob.mjs";
var { toStringTag: t, iterator: i, hasInstance: h } = Symbol, r = Math.random, m = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","), f = (a, b, c) => (a += "", /^(Blob|File)$/.test(b && b[t]) ? [(c = c !== void 0 ? c + "" : b[t] == "File" ? b.name : "blob", a), b.name !== c || b[t] == "blob" ? new File([b], c, b) : b] : [a, b + ""]), e = (c, f2) => (f2 ? c : c.replace(/\r?\n|\r/g, "\r\n")).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), x = (n, a, e2) => {
  if (a.length < e2) {
    throw new TypeError(`Failed to execute '${n}' on 'FormData': ${e2} arguments required, but only ${a.length} present.`);
  }
};
const FormData = class FormData2 {
  #d = [];
  constructor(...a) {
    if (a.length) throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`);
  }
  get [t]() {
    return "FormData";
  }
  [i]() {
    return this.entries();
  }
  static [h](o) {
    return o && typeof o === "object" && o[t] === "FormData" && !m.some((m2) => typeof o[m2] != "function");
  }
  append(...a) {
    x("append", arguments, 2);
    this.#d.push(f(...a));
  }
  delete(a) {
    x("delete", arguments, 1);
    a += "";
    this.#d = this.#d.filter(([b]) => b !== a);
  }
  get(a) {
    x("get", arguments, 1);
    a += "";
    for (var b = this.#d, l = b.length, c = 0; c < l; c++) if (b[c][0] === a) return b[c][1];
    return null;
  }
  getAll(a, b) {
    x("getAll", arguments, 1);
    b = [];
    a += "";
    this.#d.forEach((c) => c[0] === a && b.push(c[1]));
    return b;
  }
  has(a) {
    x("has", arguments, 1);
    a += "";
    return this.#d.some((b) => b[0] === a);
  }
  forEach(a, b) {
    x("forEach", arguments, 1);
    for (var [c, d] of this) a.call(b, d, c, this);
  }
  set(...a) {
    x("set", arguments, 2);
    var b = [], c = true;
    a = f(...a);
    this.#d.forEach((d) => {
      d[0] === a[0] ? c && (c = !b.push(a)) : b.push(d);
    });
    c && b.push(a);
    this.#d = b;
  }
  *entries() {
    yield* this.#d;
  }
  *keys() {
    for (var [a] of this) yield a;
  }
  *values() {
    for (var [, a] of this) yield a;
  }
};
function formDataToBlob(F, B = Blob) {
  var b = `${r()}${r()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), c = [], p = `--${b}\r
Content-Disposition: form-data; name="`;
  F.forEach((v, n) => typeof v == "string" ? c.push(p + e(n) + `"\r
\r
${v.replace(new RegExp("\\r(?!\\n)|(?<!\\r)\\n", "g"), "\r\n")}\r
`) : c.push(p + e(n) + `"; filename="${e(v.name, 1)}"\r
Content-Type: ${v.type || "application/octet-stream"}\r
\r
`, v, "\r\n"));
  c.push(`--${b}--`);
  return new B(c, { type: "multipart/form-data; boundary=" + b });
}
export {
  FormData as F,
  formDataToBlob as f
};
