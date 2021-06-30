jest.mock("./request");

const { getUserName } = require("./user");

it("works with promise", () => {
  expect.assertions(1);
  return getUserName(4).then((data) => expect(data).toBe("seunghwan"));
});

it("works with async/await", async () => {
  expect.assertions(1);
  const data = await getUserName(4);
  expect(data).toBe("seunghwan");
});

it("works with async/await and resolves", async () => {
  expect.assertions(1);
  await expect(getUserName(5)).resolves.toBe("sora");
});

it("tests error catching", () => {
  expect.assertions(1);
  return getUserName(1).catch((err) => expect(err.error).toMatch(/not found/));
});

it("tests error catching with async/await", async () => {
  expect.assertions(1);
  try {
    await getUserName(1);
  } catch (err) {
    expect(err.error).toMatch(/not found/);
  }
});
