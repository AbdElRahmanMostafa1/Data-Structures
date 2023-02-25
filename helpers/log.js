const fs = require("fs");

const log = (value) => {
  fs.writeFileSync("./output.json", JSON.stringify(value, null, 2));
};

module.exports = log;
