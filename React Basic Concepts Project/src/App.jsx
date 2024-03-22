import "./App.css";
import { Counter } from "./components/Counter.jsx";
import GithubUser from "./components/GithubUser.jsx";
import { HelloWorld } from "./components/HelloWorld.jsx";
import ShowMeTheTime from "./components/ShowTimeBBy.jsx";
import Welcome from "./components/Welcome.jsx";

function App() {
  function showTime() {
    alert(new Date().toLocaleTimeString());
  }

  return (
    <>
      <HelloWorld />
      <Welcome name="Cahal Kestis" age={30} />
      <ShowMeTheTime alert={showTime}></ShowMeTheTime>
      <Counter sumVal={1} subVal={1} resetVal={0} />
      <GithubUser username={"Bees7nees"}/>
    </>
  );
}

export default App;
