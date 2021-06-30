import renderer from "react-test-renderer";
import App from "./App";
import React from "react";

it("renders app", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
