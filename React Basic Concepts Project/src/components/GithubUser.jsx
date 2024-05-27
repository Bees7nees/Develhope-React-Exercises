import PropTypes from "prop-types";
import useGithubUser from "./GitHubUserHook";


export function GithubUser({ username }) {
  const { userData, error, loading, fetchUserData } = useGithubUser({ username });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <>
        <p>Error: {error.message}</p>
        <button onClick={fetchUserData}>Try again</button>
      </>
    );
  }

  return (
    <>
      {userData && (
        <>
          <p>{userData.name}</p>
          <p>{userData.login}</p>
          <img src={userData.avatar_url} alt="Avatar" />
        </>
      )}
    </>
  );
}

GithubUser.propTypes = { username: PropTypes.string.isRequired };