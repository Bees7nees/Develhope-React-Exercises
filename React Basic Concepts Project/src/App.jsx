import "./App.css";
import Welcome from "./components/Welcome";
import { Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import {ShowGithubUser} from "./components/ShowGithubUser";
import { NotFound } from "./components/404";

function App() {
  return (
    <>
      <section>
        <a href="/">Home</a>
        <a href="/counter">Counter</a>
        <a href="/users/Bees7nees">My Github User</a>
      </section>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="*" component={NotFound} />
      </Routes>
    </>
  );
}

export default App;
