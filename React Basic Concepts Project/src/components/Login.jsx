import { useState } from "react";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function handleChange(event) {
    console.log(event.target);
    event.target.name === "username"
      ? setUsername(event.target.value)
      : event.target.name === "password"
      ? setPassword(event.target.value)
      : setRemember(event.target.checked);
  }

  function handleLogIn(event) {
    event.preventDefault();
    console.log(
      `username: ${username}, password: ${password}, remember: ${remember}`
    );
  }

  function handleClear() {
    setUsername("");
    setPassword("");
    setRemember(false);
  }

  return (
    <>
      <form action="" method="post" onSubmit={handleLogIn}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <input
          type="checkbox"
          name="remember"
          checked={remember}
          onChange={handleChange}
        />
        <br />
        <button disabled={!username || !password} onClick={handleLogIn}>
          Log In
        </button>
        <button disabled={!username || !password} onClick={handleClear}>
          Clear
        </button>
      </form>
    </>
  );
}
