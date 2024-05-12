import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

Counter.propTypes = {
  sumVal: PropTypes.number,
  subVal: PropTypes.number,
  resetVal: PropTypes.number,
  initialValue: PropTypes.number,
};

export function Counter({ initialValue, sumVal, subVal, resetVal }) {
  const [counter, setCounter] = useState(initialValue);
  const [prevCounter, setPrevCounter] = useState(initialValue);

  let directionRef = useRef(null);

  let previousDirection = useRef(null);

  useEffect(() => {
    if (counter > prevCounter && prevCounter >= initialValue && previousDirection.current !== "up") {
      directionRef.current = "up";
      previousDirection.current = directionRef.current;
      console.log(directionRef.current);
    } else if (counter < prevCounter && prevCounter <= initialValue && previousDirection.current !== "down") {
      directionRef.current = "down";
      previousDirection.current = directionRef.current;
      console.log(directionRef.current);
    }

    console.log(`Counter is now ${counter}`);
    console.log(`prevCounter was ${prevCounter}`);
  }, [counter, prevCounter, initialValue]);

  function sumCounter() {
    setPrevCounter(counter);
    setCounter(counter + sumVal);
  }
  function subCounter() {
    setPrevCounter(counter);
    setCounter(counter - subVal);
  }
  function resetCounter() {
    setCounter(resetVal);
    setPrevCounter(resetVal);
    directionRef.current = null;
  }
  return (
    <>
      <h3>Counter</h3>
      <CounterDisplay ref={directionRef} counter={counter} />
      <button onClick={sumCounter}>+{sumVal}</button>
      <span> </span>
      <button onClick={subCounter}>-{subVal}</button>
      <span> </span>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
}
