import React from "react";
import PropTypes from "prop-types";

const App = (props) => {
  const {maxTime, maxAttempts, clickHandler} = props;
  return <section className="welcome">
    <div className="welcome__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
    </div>
    <button className="welcome__button" onClick={clickHandler}><span className="visually-hidden">Начать игру</span></button>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>За {maxTime} минут нужно ответить на все вопросы.</li>
      <li>Можно допустить {maxAttempts} ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
  </section>;
};

App.propTypes = {
  maxTime: PropTypes.number.isRequired,
  maxAttempts: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default App;