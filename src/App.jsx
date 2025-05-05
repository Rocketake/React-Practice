import React, { useState } from "react";
import Counter from "./components/Counter/Counter.jsx";
import ColorPicker from "./components/ColorPicker/ColorPicker.jsx";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import Modal from "./components/Modal/Modal.jsx";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen && <Modal onClose={onClose} />}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        open
      </button>
      {/* <Counter /> */}
      {/* <ColorPicker /> */}
      {/* <TodoList /> */}
    </>
  );
};

export default App;
