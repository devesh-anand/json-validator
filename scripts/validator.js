function validateJSON(json) {
  try {
    JSON.parse(JSON.stringify(json));
  } catch (e) {
    return false;
  }
  return true;
}

module.exports = validateJSON;
