const crypto = require("crypto");

export const hashData = (algo, data, encoding) =>
  crypto.createHash(algo).update(data).digest(encoding);
