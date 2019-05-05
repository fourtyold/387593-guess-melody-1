import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";

const init = () => {
  const options = {
    maxTime: 999,
    maxAttempts: 99
  };
  ReactDOM.render(
      <App
        maxTime = {options.maxTime}
        maxAttempts = {options.maxAttempts}
      />,
      document.querySelector(`.main`)
  );
};

init();
