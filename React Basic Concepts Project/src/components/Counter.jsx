import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

Counter.propTypes = {
  sumVal: PropTypes.number,
  subVal: PropTypes.number,
  resetVal: PropTypes.number,
  initialValue: PropTypes.number,
};

export function Counter({ sumVal, subVal, resetVal }) {
  const initialValue = 0;

  const [counter, setCounter] = useState(initialValue);

  let directionRef = useRef(null);

  let previousDirection = useRef(null);

  useEffect(() => {
    if (counter > initialValue && previousDirection.current !== "up") {
      directionRef.current = "up";
      previousDirection.current = directionRef.current;
      console.log(directionRef.current);
    } else if (counter < initialValue && previousDirection.current !== "down") {
      directionRef.current = "down";
      previousDirection.current = directionRef.current;
      console.log(directionRef.current);
    }

    console.log(`Counter has changed to ${counter}`);
  }, [counter, initialValue]);

  function sumCounter() {
    setCounter(counter + sumVal);
  }
  function subCounter() {
    setCounter(counter - subVal);
  }
  function resetCounter() {
    setCounter(resetVal);
    directionRef.current = null;
  }
  return (
    <>
      <h3>Counter</h3>
      <CounterDisplay ref={directionRef} counter={counter} initialValue={0} />
      <button onClick={sumCounter}>+1</button>
      <span> </span>
      <button onClick={subCounter}>-1</button>
      <span> </span>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
}
