import "./App.css";
import { Counter } from "./components/Counter.jsx";
import ShowMeTheTime from "./components/ShowTimeBBy.jsx";
import Welcome from "./components/Welcome.jsx";

function App() {
  function showTime() {
    alert(new Date().toLocaleTimeString());
  }

  return (
    <>
      <Welcome age={5} />
      <Welcome name="Cahal Kestis" age={30} />
      <Welcome name="Calígula 9000" age={9999} />
      <ShowMeTheTime alert={showTime}></ShowMeTheTime>
      <Counter sumVal={1} subVal={1} resetVal={0} />
    </>
  );
}

export default App;
