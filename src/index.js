import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const options = {
    maxTime: 999,
    maxAttempts: 99,
    clickHandler: () => {}
  };
  ReactDOM.render(
      <App
        maxTime = {options.maxTime}
        maxAttempts = {options.maxAttempts}
        clickHandler = {options.clickHandler}
      />,
      document.querySelector(`.main`)
  );
};

init();
