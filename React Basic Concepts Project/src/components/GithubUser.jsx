import { useEffect, useState } from "react";
import PropTypes from "prop-types";

GithubUser.propTypes = {
  username: PropTypes.string,
};

function GithubUser({ username }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((json) => setUserData(json))
      .finally(() => {
        console.log("Fetch process ended.");
      });
  }, [username]);

  return (
    <>
      <p>{userData.name}</p>
      <p>{userData.login}</p>
      <img src={userData.avatar_url} alt="payaso" />
    </>
  );
}

export default GithubUser;