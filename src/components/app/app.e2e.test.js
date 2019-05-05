import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`Click on start game button works correctly`, () => {
  const testClickHandler = jest.fn();
  const app = shallow(<App
    maxTime = {999}
    maxAttempts = {99}
    clickHandler = {testClickHandler}
  />);

  const startButton = app.find(`button`);
  startButton.simulate(`click`);
  expect(testClickHandler).toHaveBeenCalledTimes(1);
});
