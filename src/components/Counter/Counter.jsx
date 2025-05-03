import React from "react";
import s from "./Counter.module.css";

const Counter = () => {
  const hello = (event) => {
    console.log(`Hello, nazar!`);
    console.log(event);
  };

  return (
    <div className={s.container}>
      <h1 className={s.counter}>{1}</h1>
      <div className={s.buttons}>
        <button onClick={hello} className={s.btn}>
          minus
        </button>
        <button className={s.btn}>reset</button>
        <button className={s.btn}>plus</button>
      </div>
    </div>
  );
};

export default Counter;
