import renderer from "react-test-renderer";
import App from "./App";
import React from "react";

it("renders app", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders app secondly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  onClick={[Function]}
>
  appewe TETW
</div>
`);
});

it("will fail every time", () => {
  const user = {
    createdAt: new Date(),
    id: 10,
    name: "sh",
  };
  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: 10,
    name: expect.any(String),
  });
});
