// let data = {
//   args: {},
//   headers: {
//     Accept:
//       "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
//     "Accept-Encoding": "gzip, deflate, br",
//     "Accept-Language": "en-US,en;q=0.9",
//     Host: "httpbin.org",
//     "Sec-Ch-Ua":
//       '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
//     "Sec-Ch-Ua-Mobile": "?0",
//     "Sec-Ch-Ua-Platform": '"Windows"',
//     "Sec-Fetch-Dest": "document",
//     "Sec-Fetch-Mode": "navigate",
//     "Sec-Fetch-Site": "none",
//     "Sec-Fetch-User": "?1",
//     "Upgrade-Insecure-Requests": "1",
//     "User-Agent":
//       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
//     "X-Amzn-Trace-Id": "Root=1-6437d26a-684210c005b254bf62d1b910",
//   },
//   origin: "116.206.158.64",
//   url: "https://httpbin.org/get",
// };

let data = {
  _id: "123",
  type: "object",
  requiredArray: ["firstName", "lastName"],
  properties: {
    firstName: { typeDef: "string" },
    lastName: { typeDef: "string" },
    books: { typeDef: "integer" },
  },
  "Accept-num": "123",
};

let customJSON = data;

module.exports = { customJSON };
