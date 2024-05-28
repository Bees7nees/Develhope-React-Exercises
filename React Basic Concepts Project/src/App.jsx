import "./App.css";
import Welcome from "./components/Welcome";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import { ShowGithubUser } from "./components/ShowGithubUser";
import { NotFound } from "./components/404";
import GitHubUserList from "./components/GitHubUserList";

function App() {
  return (
    <>
      <section>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/users">GitHub User list</Link>
      </section>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GitHubUserList />}>
          <Route index element={<p>Please select a user</p>} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;