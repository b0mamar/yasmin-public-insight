import { r as requireBignumber } from "./bignumber.js.mjs";
var jsonBigint = { exports: {} };
var stringify = { exports: {} };
var hasRequiredStringify;
function requireStringify() {
  if (hasRequiredStringify) return stringify.exports;
  hasRequiredStringify = 1;
  (function(module) {
    var BigNumber = requireBignumber();
    var JSON = module.exports;
    (function() {
      var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        // table of character substitutions
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
      }, rep;
      function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
          var c = meta[a];
          return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
      }
      function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key], isBigNumber = value != null && (value instanceof BigNumber || BigNumber.isBigNumber(value));
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
          value = value.toJSON(key);
        }
        if (typeof rep === "function") {
          value = rep.call(holder, key, value);
        }
        switch (typeof value) {
          case "string":
            if (isBigNumber) {
              return value;
            } else {
              return quote(value);
            }
          case "number":
            return isFinite(value) ? String(value) : "null";
          case "boolean":
          case "null":
          case "bigint":
            return String(value);
          // If the type is 'object', we might be dealing with an object or an array or
          // null.
          case "object":
            if (!value) {
              return "null";
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
              length = value.length;
              for (i = 0; i < length; i += 1) {
                partial[i] = str(i, value) || "null";
              }
              v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
              gap = mind;
              return v;
            }
            if (rep && typeof rep === "object") {
              length = rep.length;
              for (i = 0; i < length; i += 1) {
                if (typeof rep[i] === "string") {
                  k = rep[i];
                  v = str(k, value);
                  if (v) {
                    partial.push(quote(k) + (gap ? ": " : ":") + v);
                  }
                }
              }
            } else {
              Object.keys(value).forEach(function(k2) {
                var v2 = str(k2, value);
                if (v2) {
                  partial.push(quote(k2) + (gap ? ": " : ":") + v2);
                }
              });
            }
            v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
            gap = mind;
            return v;
        }
      }
      if (typeof JSON.stringify !== "function") {
        JSON.stringify = function(value, replacer, space) {
          var i;
          gap = "";
          indent = "";
          if (typeof space === "number") {
            for (i = 0; i < space; i += 1) {
              indent += " ";
            }
          } else if (typeof space === "string") {
            indent = space;
          }
          rep = replacer;
          if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
            throw new Error("JSON.stringify");
          }
          return str("", { "": value });
        };
      }
    })();
  })(stringify);
  return stringify.exports;
}
var parse;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse;
  hasRequiredParse = 1;
  var BigNumber = null;
  const suspectProtoRx = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/;
  const suspectConstructorRx = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;
  var json_parse = function(options) {
    var _options = {
      strict: false,
      // not being strict means do not generate syntax errors for "duplicate key"
      storeAsString: false,
      // toggles whether the values should be stored as BigNumber (default) or a string
      alwaysParseAsBig: false,
      // toggles whether all numbers should be Big
      useNativeBigInt: false,
      // toggles whether to use native BigInt instead of bignumber.js
      protoAction: "error",
      constructorAction: "error"
    };
    if (options !== void 0 && options !== null) {
      if (options.strict === true) {
        _options.strict = true;
      }
      if (options.storeAsString === true) {
        _options.storeAsString = true;
      }
      _options.alwaysParseAsBig = options.alwaysParseAsBig === true ? options.alwaysParseAsBig : false;
      _options.useNativeBigInt = options.useNativeBigInt === true ? options.useNativeBigInt : false;
      if (typeof options.constructorAction !== "undefined") {
        if (options.constructorAction === "error" || options.constructorAction === "ignore" || options.constructorAction === "preserve") {
          _options.constructorAction = options.constructorAction;
        } else {
          throw new Error(
            `Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${options.constructorAction}`
          );
        }
      }
      if (typeof options.protoAction !== "undefined") {
        if (options.protoAction === "error" || options.protoAction === "ignore" || options.protoAction === "preserve") {
          _options.protoAction = options.protoAction;
        } else {
          throw new Error(
            `Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${options.protoAction}`
          );
        }
      }
    }
    var at, ch, escapee = {
      '"': '"',
      "\\": "\\",
      "/": "/",
      b: "\b",
      f: "\f",
      n: "\n",
      r: "\r",
      t: "	"
    }, text, error = function(m) {
      throw {
        name: "SyntaxError",
        message: m,
        at,
        text
      };
    }, next = function(c) {
      if (c && c !== ch) {
        error("Expected '" + c + "' instead of '" + ch + "'");
      }
      ch = text.charAt(at);
      at += 1;
      return ch;
    }, number = function() {
      var number2, string2 = "";
      if (ch === "-") {
        string2 = "-";
        next("-");
      }
      while (ch >= "0" && ch <= "9") {
        string2 += ch;
        next();
      }
      if (ch === ".") {
        string2 += ".";
        while (next() && ch >= "0" && ch <= "9") {
          string2 += ch;
        }
      }
      if (ch === "e" || ch === "E") {
        string2 += ch;
        next();
        if (ch === "-" || ch === "+") {
          string2 += ch;
          next();
        }
        while (ch >= "0" && ch <= "9") {
          string2 += ch;
          next();
        }
      }
      number2 = +string2;
      if (!isFinite(number2)) {
        error("Bad number");
      } else {
        if (BigNumber == null) BigNumber = requireBignumber();
        if (string2.length > 15)
          return _options.storeAsString ? string2 : _options.useNativeBigInt ? BigInt(string2) : new BigNumber(string2);
        else
          return !_options.alwaysParseAsBig ? number2 : _options.useNativeBigInt ? BigInt(number2) : new BigNumber(number2);
      }
    }, string = function() {
      var hex, i, string2 = "", uffff;
      if (ch === '"') {
        var startAt = at;
        while (next()) {
          if (ch === '"') {
            if (at - 1 > startAt) string2 += text.substring(startAt, at - 1);
            next();
            return string2;
          }
          if (ch === "\\") {
            if (at - 1 > startAt) string2 += text.substring(startAt, at - 1);
            next();
            if (ch === "u") {
              uffff = 0;
              for (i = 0; i < 4; i += 1) {
                hex = parseInt(next(), 16);
                if (!isFinite(hex)) {
                  break;
                }
                uffff = uffff * 16 + hex;
              }
              string2 += String.fromCharCode(uffff);
            } else if (typeof escapee[ch] === "string") {
              string2 += escapee[ch];
            } else {
              break;
            }
            startAt = at;
          }
        }
      }
      error("Bad string");
    }, white = function() {
      while (ch && ch <= " ") {
        next();
      }
    }, word = function() {
      switch (ch) {
        case "t":
          next("t");
          next("r");
          next("u");
          next("e");
          return true;
        case "f":
          next("f");
          next("a");
          next("l");
          next("s");
          next("e");
          return false;
        case "n":
          next("n");
          next("u");
          next("l");
          next("l");
          return null;
      }
      error("Unexpected '" + ch + "'");
    }, value, array = function() {
      var array2 = [];
      if (ch === "[") {
        next("[");
        white();
        if (ch === "]") {
          next("]");
          return array2;
        }
        while (ch) {
          array2.push(value());
          white();
          if (ch === "]") {
            next("]");
            return array2;
          }
          next(",");
          white();
        }
      }
      error("Bad array");
    }, object = function() {
      var key, object2 = /* @__PURE__ */ Object.create(null);
      if (ch === "{") {
        next("{");
        white();
        if (ch === "}") {
          next("}");
          return object2;
        }
        while (ch) {
          key = string();
          white();
          next(":");
          if (_options.strict === true && Object.hasOwnProperty.call(object2, key)) {
            error('Duplicate key "' + key + '"');
          }
          if (suspectProtoRx.test(key) === true) {
            if (_options.protoAction === "error") {
              error("Object contains forbidden prototype property");
            } else if (_options.protoAction === "ignore") {
              value();
            } else {
              object2[key] = value();
            }
          } else if (suspectConstructorRx.test(key) === true) {
            if (_options.constructorAction === "error") {
              error("Object contains forbidden constructor property");
            } else if (_options.constructorAction === "ignore") {
              value();
            } else {
              object2[key] = value();
            }
          } else {
            object2[key] = value();
          }
          white();
          if (ch === "}") {
            next("}");
            return object2;
          }
          next(",");
          white();
        }
      }
      error("Bad object");
    };
    value = function() {
      white();
      switch (ch) {
        case "{":
          return object();
        case "[":
          return array();
        case '"':
          return string();
        case "-":
          return number();
        default:
          return ch >= "0" && ch <= "9" ? number() : word();
      }
    };
    return function(source, reviver) {
      var result;
      text = source + "";
      at = 0;
      ch = " ";
      result = value();
      white();
      if (ch) {
        error("Syntax error");
      }
      return typeof reviver === "function" ? (function walk(holder, key) {
        var v, value2 = holder[key];
        if (value2 && typeof value2 === "object") {
          Object.keys(value2).forEach(function(k) {
            v = walk(value2, k);
            if (v !== void 0) {
              value2[k] = v;
            } else {
              delete value2[k];
            }
          });
        }
        return reviver.call(holder, key, value2);
      })({ "": result }, "") : result;
    };
  };
  parse = json_parse;
  return parse;
}
var hasRequiredJsonBigint;
function requireJsonBigint() {
  if (hasRequiredJsonBigint) return jsonBigint.exports;
  hasRequiredJsonBigint = 1;
  var json_stringify = requireStringify().stringify;
  var json_parse = requireParse();
  jsonBigint.exports = function(options) {
    return {
      parse: json_parse(options),
      stringify: json_stringify
    };
  };
  jsonBigint.exports.parse = json_parse();
  jsonBigint.exports.stringify = json_stringify;
  return jsonBigint.exports;
}
export {
  requireJsonBigint as r
};
