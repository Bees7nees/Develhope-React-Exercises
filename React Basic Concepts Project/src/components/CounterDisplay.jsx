import PropTypes from "prop-types";

CounterDisplay.propTypes = {
  counter: PropTypes.number,
};

export function CounterDisplay({ counter }) {
  return <h2>{counter}</h2>;
}
