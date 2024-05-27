import PropTypes from "prop-types";

AgeComponent.propTypes = {
  age: PropTypes.number,
};

function AgeComponent({ age }) {
  return (
    <>
      {age > 18 ? <p> Your age is {age} :) </p> : <p>You are too young :( </p>}
    </>
  );
}

export default AgeComponent;