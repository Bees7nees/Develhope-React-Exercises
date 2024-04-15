import { useState } from "react";

export function Form() {
  const [user, setUser] = useState({});
  const [userSubmited, setUserSubmited] = useState(false);

  function handleSubmit(event) {
      event.preventDefault();
      setUserSubmited(true)
    return { user };
  }

  function handleUserInfo() {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" onChange={handleUserInfo} />
        <input name="surname" type="text" onChange={handleUserInfo} />
        <input name="mail" type="text" onChange={handleUserInfo} />
        <button type="submit">Submit</button>
      </form>
      {userSubmited ? (
        <ul>
          <li>{user.name}</li>
          <li>{user.surname}</li>
          <li>{user.mail}</li>
        </ul>
      ) : undefined}
    </>
  );
}
