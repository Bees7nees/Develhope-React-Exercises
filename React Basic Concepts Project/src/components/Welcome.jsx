import AgeComponent from "./AgeComponent";
import PropTypes from "prop-types";

Welcome.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};

function Welcome({ name = "Guest", age }) {
    return (
        <>
            <p className="niceWelcome">Welcome, <strong>{name}</strong></p>
            <AgeComponent age={age}></AgeComponent>
        </>
    );
}

export default Welcome;