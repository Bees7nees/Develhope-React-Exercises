import { useState } from "react";

export function TodoList() {
  const [items, setItems] = useState([]);

  function handleAddItem(event) {
    event.preventDefault();
    setItems([...items, { id: Date.now(), text: event.target.elements.text.value }]);
    event.target.elements.text.value = "";
  }

  function handleRemoveItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
      <form onSubmit={handleAddItem}>
        <input name="text" type="text" />
        <button type="submit">Add</button>
        <button type="reset">Clear</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleRemoveItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}