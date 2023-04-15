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

    if (customJSONData == "" && res == undefined)
      throw new Error("No JSON Data Found");

    if (customJSONData != "") {
      json = JSON.parse(customJSONData);
      console.log("(Using input data from input.json)");
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
        console.log("(Using data from API)");
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
    console.log("Some error: ", e);
  }
}

main();
