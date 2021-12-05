const crypto = require("crypto");

module.exports.compareHash = (password, hash) => {
  const h = crypto
    .createHash("sha256")
    .update(JSON.stringify(password))
    .digest("hex");
  if (h == hash) {
    return true;
  } else {
    return false;
  }
};
