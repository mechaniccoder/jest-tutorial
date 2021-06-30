jest.mock("fs");
const fs = require("fs");
const { summarize } = require("./FileSummarizer");

describe("file list", () => {
  const MOCK_FILE = {
    "/path/to/file1.js": 'console.log("file1 contents");',
    "/path/to/file2.txt": "file2 contents",
  };

  beforeEach(() => {
    fs.__setMockFiles(MOCK_FILE);
  });

  it("includes all files", () => {
    const file = summarize("/path/to");
    expect(file.length).toBe(2);
  });
});
