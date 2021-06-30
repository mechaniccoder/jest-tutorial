const { sum } = require("./index");

test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  // 객체의 참조값이 아닌 멤버들을 비교하고 싶으면 toBe가 아닌 toEqual을 사용할것
  expect(data).toEqual({ one: 1, two: 2 });
});

/**
 * Truthiness
 */

test("null", () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).not.toBeUndefined();
  expect(data).not.toBeTruthy();
  expect(data).toBeFalsy();
});

/**
 * Numbers
 */

describe("Numbers", () => {
  it("two plus two", () => {
    const data = 2 + 2;
    expect(data).toBeGreaterThan(1);
    expect(data).toBeGreaterThanOrEqual(2);
  });

  it("use toBeCloseTo for floating", () => {
    expect(0.3).toBeCloseTo(0.3);
  });
});

/**
 * Strings
 */
describe("Strings", () => {
  it("use toMatch for string", () => {
    expect("team").toMatch(/\w/);
  });
});

/**
 * Arrays and iterables
 */
describe("Arrays and iterables", () => {
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];
  it("milk on shoppinglist", () => {
    expect(shoppingList).toContain("milk");
  });

  it("create Set from shopping list", () => {
    expect(new Set(shoppingList)).toContain("milk");
  });
});

/**
 * Exceptions
 */
describe("Exceptions", () => {
  const compileAndroidCode = () => {
    throw new Error("Error occurred while compiling");
  };
  it("throws error", () => {
    expect(compileAndroidCode).toThrow();
  });
  it("throws error message", () => {
    expect(compileAndroidCode).toThrow(/compiling/);
  });
});
