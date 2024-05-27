import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export const ShowGithubUser = () => {
  const { username } = useParams();
  return (
    <>
      <h1>{username}</h1>
      <GithubUser username={username} />
    </>
  );
};
