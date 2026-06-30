import { g as getDefaultExportFromCjs } from "./react.mjs";
import { r as requireRetry } from "./retry.mjs";
var pRetry$1 = { exports: {} };
var hasRequiredPRetry;
function requirePRetry() {
  if (hasRequiredPRetry) return pRetry$1.exports;
  hasRequiredPRetry = 1;
  const retry = requireRetry();
  const networkErrorMsgs = [
    "Failed to fetch",
    // Chrome
    "NetworkError when attempting to fetch resource.",
    // Firefox
    "The Internet connection appears to be offline.",
    // Safari
    "Network request failed"
    // `cross-fetch`
  ];
  class AbortError extends Error {
    constructor(message) {
      super();
      if (message instanceof Error) {
        this.originalError = message;
        ({ message } = message);
      } else {
        this.originalError = new Error(message);
        this.originalError.stack = this.stack;
      }
      this.name = "AbortError";
      this.message = message;
    }
  }
  const decorateErrorWithCounts = (error, attemptNumber, options) => {
    const retriesLeft = options.retries - (attemptNumber - 1);
    error.attemptNumber = attemptNumber;
    error.retriesLeft = retriesLeft;
    return error;
  };
  const isNetworkError = (errorMessage) => networkErrorMsgs.includes(errorMessage);
  const pRetry2 = (input, options) => new Promise((resolve, reject) => {
    options = {
      onFailedAttempt: () => {
      },
      retries: 10,
      ...options
    };
    const operation = retry.operation(options);
    operation.attempt(async (attemptNumber) => {
      try {
        resolve(await input(attemptNumber));
      } catch (error) {
        if (!(error instanceof Error)) {
          reject(new TypeError(`Non-error was thrown: "${error}". You should only throw errors.`));
          return;
        }
        if (error instanceof AbortError) {
          operation.stop();
          reject(error.originalError);
        } else if (error instanceof TypeError && !isNetworkError(error.message)) {
          operation.stop();
          reject(error);
        } else {
          decorateErrorWithCounts(error, attemptNumber, options);
          try {
            await options.onFailedAttempt(error);
          } catch (error2) {
            reject(error2);
            return;
          }
          if (!operation.retry(error)) {
            reject(operation.mainError());
          }
        }
      }
    });
  });
  pRetry$1.exports = pRetry2;
  pRetry$1.exports.default = pRetry2;
  pRetry$1.exports.AbortError = AbortError;
  return pRetry$1.exports;
}
var pRetryExports = requirePRetry();
const pRetry = /* @__PURE__ */ getDefaultExportFromCjs(pRetryExports);
export {
  pRetryExports as a,
  pRetry as p
};
