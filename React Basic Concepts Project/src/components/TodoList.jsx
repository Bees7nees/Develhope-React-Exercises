import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(event) {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: Date.now(), text: event.target.elements[0].value },
    ]);
    event.target.reset();
  }

  function deleteTodo(todo) {
    setTodos(todos.filter((t) => t !== todo));
  }

  return (
    <>
      <form onSubmit={addTodo}>
        <input type="text" />
        <button type="submit">Add</button>
        <button type="reset">Clear</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
