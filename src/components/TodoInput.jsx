import { useState } from "react";

export default function TodoInput(props) {
  const { hadnleAddTodos,todoValue, setTodoValue } = props;
//   const [todoValue, setTodoValue] = useState("");

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo"
      />
      <button
        onClick={() => {
          hadnleAddTodos(todoValue);
          setTodoValue('')
        }}
      >
        Add
      </button>
    </header>
  );
}
