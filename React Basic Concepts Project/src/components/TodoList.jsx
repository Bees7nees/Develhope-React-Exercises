import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (string) => {
    setTodos([...todos, { string, completed: false }]);
  };
  const toggleCompleted = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);
  return <></>;
}

/* 

Create a new React component called "TodoList" that uses the useState 
and useEffect hooks to manage a list of todos and fetch data from an API.

1. Create a state variable called "todos" using the useState hook to store 
an array of todo objects. Each todo object should have a "text" and "completed" property.

2. Create a function called "addTodo" that takes a string as an argument 
and adds a new todo object to the "todos" array.

3. Create a function called "toggleCompleted" that takes an index as an 
argument and toggles the "completed" property of the todo object at that index.

4. Use the useEffect hook to fetch data from an API (e.g. JSONPlaceholder) 
and add it to the "todos" array when the component mounts.

5. Render the "todos" array in a list, displaying the "text" property 
and a checkbox for the "completed" property.

6. Add event listeners for adding new todos and toggling completed todos.

*/
