const fs = require("fs/promises");

async function logError(e) {
  await fs.appendFile("logs/error.log", `${new Date()} \n` + e + "\n\n");
}

module.exports = logError;
