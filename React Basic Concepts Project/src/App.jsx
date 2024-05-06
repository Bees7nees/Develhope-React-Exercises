import "./App.css";
import { CurrentLocation } from "./components/CurrentLocation";
import { CustomCounter } from "./components/CustomCounter";
import { CustomUserData } from "./components/CustomUserData";
import { GithubUser } from "./components/GithubUser";
function App() {
  return (
    <>
      <CustomCounter />
      <CustomUserData />
      <GithubUser username="Bees" />
      <CurrentLocation />
    </>
  );
}

export default App;
