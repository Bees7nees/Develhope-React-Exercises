import { useState } from "react";
import GithubUser from "./GithubUser";

export function SearchGithubUser() {
  const [username, setUsername] = useState([]);

  function handleUsernameChange(event) {
    event.preventDefault();
    setUsername([
      ...username,
      { id: Date.now(), text: event.target.elements.username.value },
    ]);
    event.target.elements.username.value = "";
  }

  return (
    <div>
      <h2>Search Github User</h2>
      <form onSubmit={handleUsernameChange}>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {username.length > 0 && username.map((user) => (
          <GithubUser key={user.id} username={user.text} />
        ))}
      </ul>
    </div>
  );
}
