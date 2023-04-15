try {
  var customJSONData = require("./input.js").customJSON;
} catch (e) {
  console.log(e);
}
const validateJSON = require("./scripts/validator.js");
const mapper = require("./scripts/mapper.js");

async function main() {
  try {
    let testUrl = "https://httpbin.org/get";
    let url2 = "https://genshin-impact.up.railway.app/character/xiao";
    let res = await fetch(url2);
    var json = customJSONData != "" ? customJSONData : await res.json();

    console.log("original::::::: ", json);
    console.log("mapped::::::: ", mapper(json));

    //   console.log(json);
    if (validateJSON(json)) {
      console.log("Valid JSON");
    } else {
      console.log("Invalid JSON");
    }
  } catch (e) {
    console.log(e);
    console.log("Invalid JSON");
  }
}

main();
