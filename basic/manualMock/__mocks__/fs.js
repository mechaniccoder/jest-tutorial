const path = require("path");
const fs = jest.createMockFromModule("fs");

let mockFiles = Object.create(null);

function __setMockFiles(files) {
  for (const file in files) {
    const dir = path.dirname(file);

    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(path.basename(file));
  }
}

function readdirSync(directory) {
  return mockFiles[directory] || [];
}

fs.__setMockFiles = __setMockFiles;
fs.readdirSync = readdirSync;

module.exports = fs;
