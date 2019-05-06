import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const options = {
  maxTime: 999,
  maxAttempts: 99,
  testClickHandler: () => {}
};

it(`App correctly renders`, () => {
  const tree = renderer.create(
      <App
        maxTime = {options.maxTime}
        maxAttempts = {options.maxAttempts}
        clickHandler = {options.testClickHandler}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
