const logErr = require("./log.js");

function validateJSON(json, str = false) {
  try {
    JSON.parse(JSON.stringify(json));
  } catch (e) {
    logErr(e);
    return false;
  }
  return true;
}

module.exports = validateJSON;
