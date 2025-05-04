import React, { useState } from "react";
import s from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(11);
  const handleChange = (e) => {
    const value = +e.target.value;
    setStep(value);
  };
  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);
  return (
    <div className={s.container}>
      <h1 className={s.counter}>{count}</h1>
      <input type="number" onChange={handleChange} />
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
