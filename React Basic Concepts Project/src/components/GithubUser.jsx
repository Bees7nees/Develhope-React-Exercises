import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const useGithubUser = (username) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = () => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUser();
  }, [username]);

  return { user, error, loading, fetchUser };
};

export const GithubUser = ({ username }) => {
  const { user, error, loading, fetchUser } = useGithubUser(username);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <>
        <p>Error: {error.message}</p>
        <button onClick={fetchUser}>Try again</button>
      </>
    );
  }

  return (
    <>
      {user && (
        <>
          <p>{user.name}</p>
          <p>{user.login}</p>
          <img src={user.avatar_url} alt="Avatar" />
        </>
      )}
    </>
  );
};

GithubUser.propTypes = { username: PropTypes.string.isRequired };