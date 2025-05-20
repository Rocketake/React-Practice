import React, { useState } from "react";
import Counter from "./components/Counter/Counter.jsx";
import ColorPicker from "./components/ColorPicker/ColorPicker.jsx";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import Modal from "./components/Modal/Modal.jsx";
import CurrentTime from "./components/CurrentTime/CurrentTime.jsx";
import LoginForm from "./components/LoginForm.jsx";

const App = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const onClose = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
      {/* {isOpen && <Modal onClose={onClose} />}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        open
      </button> */}
      {/* <Counter /> */}
      {/* <ColorPicker /> */}
      {/* <TodoList /> */}
      {/* <CurrentTime /> */}
      <LoginForm />
    </>
  );
};

export default App;
