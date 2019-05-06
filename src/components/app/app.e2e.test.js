import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";

Enzyme.configure({adapter: new Adapter()});

const options = {
  maxTime: 999,
  maxAttempts: 99,
  testClickHandler: jest.fn()
};

it(`Click on start game button works correctly`, () => {
  const app = shallow(<App
    maxTime = {options.maxTime}
    maxAttempts = {options.maxAttempts}
    clickHandler = {options.testClickHandler}
  />);

  const startButton = app.find(`button`);
  startButton.simulate(`click`);
  expect(options.testClickHandler).toHaveBeenCalledTimes(1);
});
