var nodeDomexception;
var hasRequiredNodeDomexception;
function requireNodeDomexception() {
  if (hasRequiredNodeDomexception) return nodeDomexception;
  hasRequiredNodeDomexception = 1;
  if (!globalThis.DOMException) {
    try {
      const { MessageChannel } = require("worker_threads"), port = new MessageChannel().port1, ab = new ArrayBuffer();
      port.postMessage(ab, [ab, ab]);
    } catch (err) {
      err.constructor.name === "DOMException" && (globalThis.DOMException = err.constructor);
    }
  }
  nodeDomexception = globalThis.DOMException;
  return nodeDomexception;
}
requireNodeDomexception();
