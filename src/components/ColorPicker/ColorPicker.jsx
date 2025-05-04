import React, { useState } from "react";
import s from "./ColorPicker.module.css";

const ColorPicker = () => {
  const colors = [
    "white",
    "lightblue",
    "orange",
    "tomato",
    "teal",
    "yellow",
    "indigo",
    "green",
  ];
  const [color, setColor] = useState("");
  const handleClick = (e) => {
    const color = e.target.textContent;
    console.log(color);
    setColor(color);
  };

  return (
    <div className={s.wrapper} style={{ backgroundColor: `${color}` }}>
      <h1>{color}</h1>
      <ul className={s.list}>
        {colors.map((color) => {
          return (
            <li key={color}>
              <button onClick={handleClick}>{color}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorPicker;
