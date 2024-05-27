import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GitHubUserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.login} :{" "}
          <Link to={`/${user.login}`}>{user.html_url}</Link>
        </li>
      ))}
    </ul>
  );
}

export default GitHubUserList;
