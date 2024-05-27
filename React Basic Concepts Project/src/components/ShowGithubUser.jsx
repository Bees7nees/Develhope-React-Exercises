import { useMatch, useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export const ShowGithubUser = () => {
  const { username } = useParams();
  const match = useMatch("/users/:username");
  console.log("Match:", match); // This will help you see if the route is matching

  return (
    <>
      <h1>{username}</h1>
      <GithubUser username={username} />
    </>
  );
};
