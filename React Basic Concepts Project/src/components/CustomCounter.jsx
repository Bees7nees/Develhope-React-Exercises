import useCounter from "./CustomCounterHook";

export function CustomCounter() {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
