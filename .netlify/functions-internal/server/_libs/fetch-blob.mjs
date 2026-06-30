import { promises } from "node:fs";
import "./node-domexception.mjs";
import { r as requirePonyfill_es2018 } from "./web-streams-polyfill.mjs";
var streams = {};
var hasRequiredStreams;
function requireStreams() {
  if (hasRequiredStreams) return streams;
  hasRequiredStreams = 1;
  const POOL_SIZE2 = 65536;
  if (!globalThis.ReadableStream) {
    try {
      const process = require("node:process");
      const { emitWarning } = process;
      try {
        process.emitWarning = () => {
        };
        Object.assign(globalThis, require("node:stream/web"));
        process.emitWarning = emitWarning;
      } catch (error) {
        process.emitWarning = emitWarning;
        throw error;
      }
    } catch (error) {
      Object.assign(globalThis, requirePonyfill_es2018());
    }
  }
  try {
    const { Blob: Blob3 } = require("buffer");
    if (Blob3 && !Blob3.prototype.stream) {
      Blob3.prototype.stream = function name(params) {
        let position = 0;
        const blob = this;
        return new ReadableStream({
          type: "bytes",
          async pull(ctrl) {
            const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE2));
            const buffer = await chunk.arrayBuffer();
            position += buffer.byteLength;
            ctrl.enqueue(new Uint8Array(buffer));
            if (position === blob.size) {
              ctrl.close();
            }
          }
        });
      };
    }
  } catch (error) {
  }
  return streams;
}
requireStreams();
const POOL_SIZE = 65536;
async function* toIterator(parts, clone = true) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* (
        /** @type {AsyncIterableIterator<Uint8Array>} */
        part.stream()
      );
    } else if (ArrayBuffer.isView(part)) {
      if (clone) {
        let position = part.byteOffset;
        const end = part.byteOffset + part.byteLength;
        while (position !== end) {
          const size = Math.min(end - position, POOL_SIZE);
          const chunk = part.buffer.slice(position, position + size);
          position += chunk.byteLength;
          yield new Uint8Array(chunk);
        }
      } else {
        yield part;
      }
    } else {
      let position = 0, b = (
        /** @type {Blob} */
        part
      );
      while (position !== b.size) {
        const chunk = b.slice(position, Math.min(b.size, position + POOL_SIZE));
        const buffer = await chunk.arrayBuffer();
        position += buffer.byteLength;
        yield new Uint8Array(buffer);
      }
    }
  }
}
const _Blob = class Blob {
  /** @type {Array.<(Blob|Uint8Array)>} */
  #parts = [];
  #type = "";
  #size = 0;
  #endings = "transparent";
  /**
   * The Blob() constructor returns a new Blob object. The content
   * of the blob consists of the concatenation of the values given
   * in the parameter array.
   *
   * @param {*} blobParts
   * @param {{ type?: string, endings?: string }} [options]
   */
  constructor(blobParts = [], options = {}) {
    if (typeof blobParts !== "object" || blobParts === null) {
      throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
    }
    if (typeof blobParts[Symbol.iterator] !== "function") {
      throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
    }
    if (typeof options !== "object" && typeof options !== "function") {
      throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
    }
    if (options === null) options = {};
    const encoder = new TextEncoder();
    for (const element of blobParts) {
      let part;
      if (ArrayBuffer.isView(element)) {
        part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
      } else if (element instanceof ArrayBuffer) {
        part = new Uint8Array(element.slice(0));
      } else if (element instanceof Blob) {
        part = element;
      } else {
        part = encoder.encode(`${element}`);
      }
      this.#size += ArrayBuffer.isView(part) ? part.byteLength : part.size;
      this.#parts.push(part);
    }
    this.#endings = `${options.endings === void 0 ? "transparent" : options.endings}`;
    const type = options.type === void 0 ? "" : String(options.type);
    this.#type = /^[\x20-\x7E]*$/.test(type) ? type : "";
  }
  /**
   * The Blob interface's size property returns the
   * size of the Blob in bytes.
   */
  get size() {
    return this.#size;
  }
  /**
   * The type property of a Blob object returns the MIME type of the file.
   */
  get type() {
    return this.#type;
  }
  /**
   * The text() method in the Blob interface returns a Promise
   * that resolves with a string containing the contents of
   * the blob, interpreted as UTF-8.
   *
   * @return {Promise<string>}
   */
  async text() {
    const decoder = new TextDecoder();
    let str = "";
    for await (const part of toIterator(this.#parts, false)) {
      str += decoder.decode(part, { stream: true });
    }
    str += decoder.decode();
    return str;
  }
  /**
   * The arrayBuffer() method in the Blob interface returns a
   * Promise that resolves with the contents of the blob as
   * binary data contained in an ArrayBuffer.
   *
   * @return {Promise<ArrayBuffer>}
   */
  async arrayBuffer() {
    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of toIterator(this.#parts, false)) {
      data.set(chunk, offset);
      offset += chunk.length;
    }
    return data.buffer;
  }
  stream() {
    const it = toIterator(this.#parts, true);
    return new globalThis.ReadableStream({
      // @ts-ignore
      type: "bytes",
      async pull(ctrl) {
        const chunk = await it.next();
        chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
      },
      async cancel() {
        await it.return();
      }
    });
  }
  /**
   * The Blob interface's slice() method creates and returns a
   * new Blob object which contains data from a subset of the
   * blob on which it's called.
   *
   * @param {number} [start]
   * @param {number} [end]
   * @param {string} [type]
   */
  slice(start = 0, end = this.size, type = "") {
    const { size } = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = this.#parts;
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      if (added >= span) {
        break;
      }
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        let chunk;
        if (ArrayBuffer.isView(part)) {
          chunk = part.subarray(relativeStart, Math.min(size2, relativeEnd));
          added += chunk.byteLength;
        } else {
          chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
          added += chunk.size;
        }
        relativeEnd -= size2;
        blobParts.push(chunk);
        relativeStart = 0;
      }
    }
    const blob = new Blob([], { type: String(type).toLowerCase() });
    blob.#size = span;
    blob.#parts = blobParts;
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return object && typeof object === "object" && typeof object.constructor === "function" && (typeof object.stream === "function" || typeof object.arrayBuffer === "function") && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
};
Object.defineProperties(_Blob.prototype, {
  size: { enumerable: true },
  type: { enumerable: true },
  slice: { enumerable: true }
});
const Blob2 = _Blob;
const _File = class File extends Blob2 {
  #lastModified = 0;
  #name = "";
  /**
   * @param {*[]} fileBits
   * @param {string} fileName
   * @param {{lastModified?: number, type?: string}} options
   */
  // @ts-ignore
  constructor(fileBits, fileName, options = {}) {
    if (arguments.length < 2) {
      throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
    }
    super(fileBits, options);
    if (options === null) options = {};
    const lastModified = options.lastModified === void 0 ? Date.now() : Number(options.lastModified);
    if (!Number.isNaN(lastModified)) {
      this.#lastModified = lastModified;
    }
    this.#name = String(fileName);
  }
  get name() {
    return this.#name;
  }
  get lastModified() {
    return this.#lastModified;
  }
  get [Symbol.toStringTag]() {
    return "File";
  }
  static [Symbol.hasInstance](object) {
    return !!object && object instanceof Blob2 && /^(File)$/.test(object[Symbol.toStringTag]);
  }
};
const File2 = _File;
const { stat } = promises;
export {
  Blob2 as B,
  File2 as F
};
