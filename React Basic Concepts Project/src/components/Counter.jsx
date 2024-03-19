import { useState } from "react";
import PropTypes from "prop-types";

Counter.propTypes = {
    sumVal: PropTypes.number,
    subVal: PropTypes.number,
    resetVal: PropTypes.number
}

export function Counter({sumVal, subVal, resetVal}) {
  const [counter, setCounter] = useState(0);
  /* cuando las siguientes funciones todavía
   no estaban hechas, setCounter sale como posible 
   error por el sLint */
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
      <h2> {counter} </h2>
      <button onClick={sumCounter}>+1</button>
      <button onClick={subCounter}>-1</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
}