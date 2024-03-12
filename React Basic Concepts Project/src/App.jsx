import './App.css'
import ShowMeTheTime from './components/ShowTimeBBy.jsx'
import Welcome from './components/Welcome.jsx'

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
    </>
  )
}

export default App
