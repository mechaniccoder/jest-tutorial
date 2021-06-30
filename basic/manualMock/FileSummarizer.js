const fs = require("fs");

function summarize(directory) {
  return fs.readdirSync(directory).map((file) => ({
    directory,
    file,
  }));
}

exports.summarize = summarize;
