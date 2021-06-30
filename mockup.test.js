/**
 * Mock Functions
 */

const axios = require("axios");
const { User } = require("./user");

// 1. using a mock function

function forEach(items, callback) {
  items.forEach((item) => {
    callback(item);
  });
}
const mockCallback = jest.fn((x) => 0 + x);
forEach([2, 3], mockCallback);

it("calls twice", () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});

it("arguments", () => {
  expect(mockCallback.mock.calls[0][0]).toBe(2);
});

it("arguments", () => {
  expect(mockCallback.mock.calls[1][0]).toBe(3);
});

it("result", () => {
  expect(mockCallback.mock.results[0].value).toBe(2);
});

const aMock = jest.fn();
it("inject return value", () => {
  aMock.mockReturnValueOnce("a").mockReturnValueOnce("b");
});

// 2. Mocking Modules
jest.mock("axios");
it("mock get method of axios", () => {
  const users = [{ name: "bob" }];
  const res = { data: users };
  axios.get.mockResolvedValue(res);
  return User.all().then((data) => expect(data).toEqual(users));
});

it("mock implementations", () => {
  const mockfn = jest.fn((cb) => cb(null, true));
  mockfn((err, val) => console.log(val));
});

it("matchers", () => {
  const fn = jest.fn((x) => x + 1);
  fn(1);
  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenCalledWith(1);
});
