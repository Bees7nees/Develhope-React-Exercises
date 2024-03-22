import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CounterDisplay } from "./CounterDisplay";

Counter.propTypes = {
    sumVal: PropTypes.number,
    subVal: PropTypes.number,
    resetVal: PropTypes.number
}

export function Counter({ sumVal, subVal, resetVal }) {
  
  const [counter, setCounter] = useState(0);
  /* cuando las siguientes funciones todavía
   no estaban hechas, setCounter sale como posible 
   error por el sLint */
  
  useEffect(() => {
    console.log(`Counter has changed to ${counter}`);
  }, [counter]);
  
  function sumCounter() {
    setCounter(counter + sumVal);
  }
  function subCounter() {
    setCounter(counter - subVal);
  }
  function resetCounter() {
    setCounter(resetVal);
  }
  return (
    <>
      <CounterDisplay counter={counter} />
      <button onClick={sumCounter}>+1</button>
      <span>  </span>
      <button onClick={subCounter}>-1</button>
      <span>  </span>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
}