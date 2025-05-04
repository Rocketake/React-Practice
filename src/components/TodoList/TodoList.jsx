import { useState } from "react";
import todosData from "../../assets/todos.json";
import { TodoItem } from "../TodoItem/TodoItem.jsx";
import s from "./TodoList.module.css";
import { nanoid } from "nanoid";

export const TodoList = () => {
  const [todos, setTodos] = useState(todosData);
  const [text, setText] = useState("");

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: nanoid(),
      todo: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <div className={s.flex}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={s.input}
        />
        <button onClick={handleAddTodo} className={s.btnBorder}>
          Add
        </button>
      </div>
      <ul className={s.list}>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};
