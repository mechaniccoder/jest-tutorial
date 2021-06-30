const { timerGame } = require("./timerGame");

jest.useFakeTimers("legacy");
it("waits 1 second before end", () => {
  timerGame();
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  expect(setTimeout).toHaveBeenCalledTimes(1);
});

it("calls callback", () => {
  const cb = jest.fn();

  timerGame(cb);

  expect(cb).not.toBeCalled();

  jest.runAllTimers();

  expect(cb).toHaveBeenCalledTimes(1);
});
