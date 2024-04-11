import { useState } from "react";
import GithubUser from "./GithubUser";

export function SearchGithubUser() {
  const [username, setUsername] = useState(null);

  function handleUsernameChange(event) {
    event.preventDefault();
    setUsername([...username, {id: Date.now(), text: event.target.value}]);
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
          onChange={() => setUsername(event.target.value)}
        />
        <button type="submit">Search</button>
          </form>
          <ul>
              {username.map((userInput) => (
                <GithubUser key={userInput} username={userInput} />
              ))}
          </ul>
    </div>
  );
}
