import { useContext, useState } from "react";
import "./App.css";
import { Clock } from "./components/Clock.jsx";
import { Color } from "./components/Color.jsx";
import { Colors } from "./components/Colors.jsx";
import { Container } from "./components/Container.jsx";
import { Counter } from "./components/Counter.jsx";
import { HelloWorld } from "./components/HelloWorld.jsx";
import { InteractiveWelcome } from "./components/InteractiveWelcome.jsx";
import { Login } from "./components/Login.jsx";
import { MouseClicker } from "./components/MouseClicker.jsx";
import ShowMeTheTime from "./components/ShowTimeBBy.jsx";
import { TodoList } from "./components/TodoList.jsx";
import { UncontrolledLogin } from "./components/UncontrolledLogin.jsx";
import Welcome from "./components/Welcome.jsx";
import { LanguageContext } from "./contexts/LanguageContext.jsx";
import { SearchGithubUser } from "./components/SearchGithubUser.jsx";

function App() {
  function showTime() {
    alert(new Date().toLocaleTimeString());
  }

  const [language, setLanguage] = useState(useContext(LanguageContext));

  function handleLanguageChange(event) {
    setLanguage(event.target.value);
  }

  return (
    <>
      <Container title="Hola hola caracola 🐌">
        <HelloWorld />
        <Welcome name="Cahal Kestis" age={30} />
        <ShowMeTheTime alert={showTime}></ShowMeTheTime>
        <LanguageContext.Provider value={language}>
          <select value={language} onChange={handleLanguageChange}>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </select>
          <Clock />
        </LanguageContext.Provider>
        <br />
        <Counter sumVal={1} subVal={1} resetVal={0} />
        <br />
        <MouseClicker />
        <SearchGithubUser />
        <br />
        <InteractiveWelcome />
        <Login />
        <UncontrolledLogin />
        <br />
        <ul>
          <Color color={{ id: 1, name: "red" }} />
        </ul>
        <br />
        <Colors
          title={"Look at my favorite colors :)))"}
          colors={[
            { id: 1, name: "red" },
            { id: 2, name: "blue" },
            { id: 3, name: "green" },
          ]}
        />
        <TodoList />
      </Container>
    </>
  );
}

export default App;
