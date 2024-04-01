import { useState } from "react";

export function Lista() {
  const [list, setList] = useState([]);

  const [newTodo, setNewTodo] = useState("");

  function saveTodo() {
    setNewTodo(event.target.value);
    return newTodo;
  }

  function handleAddTodo(event) {
    event.preventDefault();
    setList([...list, newTodo]);
    return list;
  }

  return (
    <>
      <div>
        <ul>
          {list.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
      </div>
      <form onSubmit={handleAddTodo}>
        <input type="text" onChange={saveTodo} />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
