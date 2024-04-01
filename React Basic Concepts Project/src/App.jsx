import "./App.css";
import { Clock } from "./components/Clock.jsx";
import { Counter } from "./components/Counter.jsx";
import { FocusableInput } from "./components/FocusableInput.jsx";
import GithubUser from "./components/GithubUser.jsx";
import { HelloWorld } from "./components/HelloWorld.jsx";
import { InteractiveWelcome } from "./components/InteractiveWelcome.jsx";
import { Login } from "./components/Login.jsx";
import { MouseClicker } from "./components/MouseClicker.jsx";
import ShowMeTheTime from "./components/ShowTimeBBy.jsx";
import { UncontrolledLogin } from "./components/UncontrolledLogin.jsx";
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
      <Clock />
      <Counter sumVal={1} subVal={1} resetVal={0} />
      <br />
      <MouseClicker />
      <GithubUser username={"Bees7nees"} />
      <br />
      <InteractiveWelcome />
      <Login />
      <UncontrolledLogin />
      <br />
      <FocusableInput />
    </>
  );
}

export default App;
