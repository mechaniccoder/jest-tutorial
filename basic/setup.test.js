const initialDatabase = () => {};
const clearDatabase = () => {};

// 각 테스트 전에 실행
beforeEach(() => {
  initialDatabase();
});

// 각 테스트 후에 실행
afterEach(() => {
  clearDatabase();
});

// 테스트마다 재사용하고 싶을때
beforeAll(() => {
  initialDatabase();
});

afterAll(() => {
  clearDatabase();
});

describe("it can apply each test", () => {
  beforeEach(() => {
    initialDatabase();
  });
  it("boilerplate", () => {
    expect(true).toBeTruthy();
  });
});
