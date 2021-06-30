jest.mock("./request");

const { getUserName } = require("./user");

it("works with promise", () => {
  expect.assertions(1);
  return getUserName(4).then((data) => expect(data).toBe("seunghwan"));
});
