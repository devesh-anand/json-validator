const validateJSON = require("./scripts/validator.js");
const mapper = require("./scripts/mapper.js");
const fs = require("fs/promises");
const logErr = require("./scripts/log.js");

var apiUrl = "https://genshin-impact.up.railway.app/character/xiao";
async function main() {
  try {
    const customJSONData = await fs.readFile("./io/input.json", "utf8");
    let res = await fetch(apiUrl);
    var json = customJSONData != "" ? customJSONData : await res.json();

    if (customJSONData != "") {
      json = JSON.parse(customJSONData);
      if (validateJSON(json, true)) {
        console.log("Success, Valid JSON");
        await fs.writeFile(
          "./io/output.json",
          JSON.stringify(mapper(json), undefined, 2)
        );
      } else {
        console.log("Invalid JSON");
      }
    } else {
      if (validateJSON(json)) {
        console.log("Success, Valid JSON");
        await fs.writeFile(
          "./io/output.json",
          JSON.stringify(mapper(json), undefined, 2)
        );
      } else {
        console.log("Invalid JSON");
      }
    }
  } catch (e) {
    logErr(e);
    console.log("Invalid JSON");
  }
}

main();
