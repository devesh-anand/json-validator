function mapper(json) {
  let result = {};
  let keys = Object.keys(json);
  keys.forEach((key) => {
    if (Array.isArray(json[key])) {
      result[convertCamelCase(key)] = json[key].map((item) => {
        return typeof item != "object" ? item : mapper(item);
      });
    } else if (typeof convertToNumber(json[key]) === "number") {
      result[convertCamelCase(key)] = parseFloat(json[key]);
    } else if (typeof json[key] === "object") {
      result[convertCamelCase(key)] = mapper(json[key]);
    } else {
      result[convertCamelCase(key)] = json[key];
    }
  });
  return result;
}

function convertCamelCase(str) {
  let result = "",
    flag = false;

  //if string starts with block letter, we don't change it
  if (str[0] === str[0].toUpperCase()) return str;

  // for initial "_" in string
  let pos = 0;
  if (str[0] == "_") {
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "_" && str[i + 1] == "_") {
        pos = i + 1;
      } else break;
    }
  }
  if (str[0] == "_" && pos == 0) str = str.slice(1);
  else str = str.slice(pos);

  //for mapping further string
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i].match(/[a-z]/i)) {
      result += str[0].toLowerCase() + str.slice(i);
      flag = true;
      break;
    }
  }

  if (flag == false) result = str;
  return result;
}

//function to convert string to number
function convertToNumber(str) {
  if (!isNaN(str)) {
    return Number(str);
  } else {
    return str;
  }
}

console.log(convertToNumber("-11"));

module.exports = mapper;
