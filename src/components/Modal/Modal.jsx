import React, { useEffect } from "react";
import s from "./Modal.module.css";

const Modal = ({ onClose }) => {
  const handleBackdropClose = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div onClick={handleBackdropClose} className={s.wrapper}>
      <div className={s.content}>
        <h1 className={s.title}>Hello</h1>
        <button onClick={onClose} className={s.btn}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default Modal;
