import React, { useState } from "react";
import s from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div className={s.container}>
      <h1 className={s.counter}>{count}</h1>
      <div className={s.buttons}>
        <button onClick={decrement} className={s.btn}>
          minus
        </button>
        <button onClick={reset} className={s.btn}>
          reset
        </button>
        <button onClick={increment} className={s.btn}>
          plus
        </button>
      </div>
    </div>
  );
};

export default Counter;
