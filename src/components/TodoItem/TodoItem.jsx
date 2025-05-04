import s from "./TodoItem.module.css";

export const TodoItem = ({ id, todo, completed, handleDeleteTodo }) => {
  return (
    <li className={s.item}>
      <input type="checkbox" defaultChecked={completed} className="mr-2" />
      <span className="flex-grow">{todo}</span>
      <button onClick={() => handleDeleteTodo(id)} className="btn border">
        Delete
      </button>
    </li>
  );
};
