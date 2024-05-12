import "./App.css";
import Welcome from "./components/Welcome";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import { ShowGithubUser } from "./components/ShowGithubUser";
import { NotFound } from "./components/404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="*" component={NotFound} />
      </Routes>
      <section>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/users/Bees7nees">My Github User</Link>
      </section>
    </>
  );
}

export default App;
