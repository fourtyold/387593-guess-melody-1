import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`App correctly renders`, () => {
  const tree = renderer.create(
      <App
        maxTime = {999}
        maxAttempts = {99}
        clickHandler = {() => {}}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
