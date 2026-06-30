import require$$1 from "os";
import { r as requireSrc$1 } from "./gaxios.mjs";
import { r as requireJsonBigint } from "./json-bigint.mjs";
import require$$1$1 from "fs";
import { r as requireSrc$2 } from "./google-logging-utils.mjs";
var src = {};
var gcpResidency = {};
var hasRequiredGcpResidency;
function requireGcpResidency() {
  if (hasRequiredGcpResidency) return gcpResidency;
  hasRequiredGcpResidency = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GCE_LINUX_BIOS_PATHS = void 0;
    exports.isGoogleCloudServerless = isGoogleCloudServerless;
    exports.isGoogleComputeEngineLinux = isGoogleComputeEngineLinux;
    exports.isGoogleComputeEngineMACAddress = isGoogleComputeEngineMACAddress;
    exports.isGoogleComputeEngine = isGoogleComputeEngine;
    exports.detectGCPResidency = detectGCPResidency;
    const fs_1 = require$$1$1;
    const os_1 = require$$1;
    exports.GCE_LINUX_BIOS_PATHS = {
      BIOS_DATE: "/sys/class/dmi/id/bios_date",
      BIOS_VENDOR: "/sys/class/dmi/id/bios_vendor"
    };
    const GCE_MAC_ADDRESS_REGEX = /^42:01/;
    function isGoogleCloudServerless() {
      const isGFEnvironment = process.env.CLOUD_RUN_JOB || process.env.FUNCTION_NAME || process.env.K_SERVICE;
      return !!isGFEnvironment;
    }
    function isGoogleComputeEngineLinux() {
      if ((0, os_1.platform)() !== "linux")
        return false;
      try {
        (0, fs_1.statSync)(exports.GCE_LINUX_BIOS_PATHS.BIOS_DATE);
        const biosVendor = (0, fs_1.readFileSync)(exports.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, "utf8");
        return /Google/.test(biosVendor);
      } catch {
        return false;
      }
    }
    function isGoogleComputeEngineMACAddress() {
      const interfaces = (0, os_1.networkInterfaces)();
      for (const item of Object.values(interfaces)) {
        if (!item)
          continue;
        for (const { mac } of item) {
          if (GCE_MAC_ADDRESS_REGEX.test(mac)) {
            return true;
          }
        }
      }
      return false;
    }
    function isGoogleComputeEngine() {
      return isGoogleComputeEngineLinux() || isGoogleComputeEngineMACAddress();
    }
    function detectGCPResidency() {
      return isGoogleCloudServerless() || isGoogleComputeEngine();
    }
  })(gcpResidency);
  return gcpResidency;
}
var hasRequiredSrc;
function requireSrc() {
  if (hasRequiredSrc) return src;
  hasRequiredSrc = 1;
  (function(exports) {
    var __createBinding = src && src.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = src && src.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = src && src.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    var __exportStar = src && src.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.gcpResidencyCache = exports.METADATA_SERVER_DETECTION = exports.HEADERS = exports.HEADER_VALUE = exports.HEADER_NAME = exports.SECONDARY_HOST_ADDRESS = exports.HOST_ADDRESS = exports.BASE_PATH = void 0;
    exports.instance = instance;
    exports.project = project;
    exports.universe = universe;
    exports.bulk = bulk;
    exports.isAvailable = isAvailable;
    exports.resetIsAvailableCache = resetIsAvailableCache;
    exports.getGCPResidency = getGCPResidency;
    exports.setGCPResidency = setGCPResidency;
    exports.requestTimeout = requestTimeout;
    const gaxios_1 = requireSrc$1();
    const jsonBigint = requireJsonBigint();
    const gcp_residency_1 = requireGcpResidency();
    const logger = __importStar(requireSrc$2());
    exports.BASE_PATH = "/computeMetadata/v1";
    exports.HOST_ADDRESS = "http://169.254.169.254";
    exports.SECONDARY_HOST_ADDRESS = "http://metadata.google.internal.";
    exports.HEADER_NAME = "Metadata-Flavor";
    exports.HEADER_VALUE = "Google";
    exports.HEADERS = Object.freeze({ [exports.HEADER_NAME]: exports.HEADER_VALUE });
    const log = logger.log("gcp-metadata");
    exports.METADATA_SERVER_DETECTION = Object.freeze({
      "assume-present": "don't try to ping the metadata server, but assume it's present",
      none: "don't try to ping the metadata server, but don't try to use it either",
      "bios-only": "treat the result of a BIOS probe as canonical (don't fall back to pinging)",
      "ping-only": "skip the BIOS probe, and go straight to pinging"
    });
    function getBaseUrl(baseUrl) {
      if (!baseUrl) {
        baseUrl = process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST || exports.HOST_ADDRESS;
      }
      if (!/^https?:\/\//.test(baseUrl)) {
        baseUrl = `http://${baseUrl}`;
      }
      return new URL(exports.BASE_PATH, baseUrl).href;
    }
    function validate(options) {
      Object.keys(options).forEach((key) => {
        switch (key) {
          case "params":
          case "property":
          case "headers":
            break;
          case "qs":
            throw new Error("'qs' is not a valid configuration option. Please use 'params' instead.");
          default:
            throw new Error(`'${key}' is not a valid configuration option.`);
        }
      });
    }
    async function metadataAccessor(type, options = {}, noResponseRetries = 3, fastFail = false) {
      const headers = new Headers(exports.HEADERS);
      let metadataKey = "";
      let params = {};
      if (typeof type === "object") {
        const metadataAccessor2 = type;
        new Headers(metadataAccessor2.headers).forEach((value, key) => headers.set(key, value));
        metadataKey = metadataAccessor2.metadataKey;
        params = metadataAccessor2.params || params;
        noResponseRetries = metadataAccessor2.noResponseRetries || noResponseRetries;
        fastFail = metadataAccessor2.fastFail || fastFail;
      } else {
        metadataKey = type;
      }
      if (typeof options === "string") {
        metadataKey += `/${options}`;
      } else {
        validate(options);
        if (options.property) {
          metadataKey += `/${options.property}`;
        }
        new Headers(options.headers).forEach((value, key) => headers.set(key, value));
        params = options.params || params;
      }
      const requestMethod = fastFail ? fastFailMetadataRequest : gaxios_1.request;
      const req = {
        url: `${getBaseUrl()}/${metadataKey}`,
        headers,
        retryConfig: { noResponseRetries },
        params,
        responseType: "text",
        timeout: requestTimeout()
      };
      log.info("instance request %j", req);
      const res = await requestMethod(req);
      log.info("instance metadata is %s", res.data);
      const metadataFlavor = res.headers.get(exports.HEADER_NAME);
      if (metadataFlavor !== exports.HEADER_VALUE) {
        throw new RangeError(`Invalid response from metadata service: incorrect ${exports.HEADER_NAME} header. Expected '${exports.HEADER_VALUE}', got ${metadataFlavor ? `'${metadataFlavor}'` : "no header"}`);
      }
      if (typeof res.data === "string") {
        try {
          return jsonBigint.parse(res.data);
        } catch {
        }
      }
      return res.data;
    }
    async function fastFailMetadataRequest(options) {
      const secondaryOptions = {
        ...options,
        url: options.url?.toString().replace(getBaseUrl(), getBaseUrl(exports.SECONDARY_HOST_ADDRESS))
      };
      const r1 = (0, gaxios_1.request)(options);
      const r2 = (0, gaxios_1.request)(secondaryOptions);
      return Promise.any([r1, r2]);
    }
    function instance(options) {
      return metadataAccessor("instance", options);
    }
    function project(options) {
      return metadataAccessor("project", options);
    }
    function universe(options) {
      return metadataAccessor("universe", options);
    }
    async function bulk(properties) {
      const r = {};
      await Promise.all(properties.map((item) => {
        return (async () => {
          const res = await metadataAccessor(item);
          const key = item.metadataKey;
          r[key] = res;
        })();
      }));
      return r;
    }
    function detectGCPAvailableRetries() {
      return process.env.DETECT_GCP_RETRIES ? Number(process.env.DETECT_GCP_RETRIES) : 0;
    }
    let cachedIsAvailableResponse;
    async function isAvailable() {
      if (process.env.METADATA_SERVER_DETECTION) {
        const value = process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();
        if (!(value in exports.METADATA_SERVER_DETECTION)) {
          throw new RangeError(`Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${value}\`, but it should be \`${Object.keys(exports.METADATA_SERVER_DETECTION).join("`, `")}\`, or unset`);
        }
        switch (value) {
          case "assume-present":
            return true;
          case "none":
            return false;
          case "bios-only":
            return getGCPResidency();
        }
      }
      try {
        if (cachedIsAvailableResponse === void 0) {
          cachedIsAvailableResponse = metadataAccessor(
            "instance",
            void 0,
            detectGCPAvailableRetries(),
            // If the default HOST_ADDRESS has been overridden, we should not
            // make an effort to try SECONDARY_HOST_ADDRESS (as we are likely in
            // a non-GCP environment):
            !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST)
          );
        }
        await cachedIsAvailableResponse;
        return true;
      } catch (e) {
        const err = e;
        if (process.env.DEBUG_AUTH) {
          console.info(err);
        }
        if (err.type === "request-timeout") {
          return false;
        }
        if (err.response && err.response.status === 404) {
          return false;
        } else {
          if (!(err.response && err.response.status === 404) && // A warning is emitted if we see an unexpected err.code, or err.code
          // is not populated:
          (!err.code || ![
            "EHOSTDOWN",
            "EHOSTUNREACH",
            "ENETUNREACH",
            "ENOENT",
            "ENOTFOUND",
            "ECONNREFUSED"
          ].includes(err.code.toString()))) {
            let code = "UNKNOWN";
            if (err.code)
              code = err.code.toString();
            process.emitWarning(`received unexpected error = ${err.message} code = ${code}`, "MetadataLookupWarning");
          }
          return false;
        }
      }
    }
    function resetIsAvailableCache() {
      cachedIsAvailableResponse = void 0;
    }
    exports.gcpResidencyCache = null;
    function getGCPResidency() {
      if (exports.gcpResidencyCache === null) {
        setGCPResidency();
      }
      return exports.gcpResidencyCache;
    }
    function setGCPResidency(value = null) {
      exports.gcpResidencyCache = value !== null ? value : (0, gcp_residency_1.detectGCPResidency)();
    }
    function requestTimeout() {
      return getGCPResidency() ? 0 : 3e3;
    }
    __exportStar(requireGcpResidency(), exports);
  })(src);
  return src;
}
export {
  requireSrc as r
};
