/* Nombrar docs .jsx / .js con primera letra en may. pq si no ded */

import AgeComponent from "./AgeComponent";

import classes from "./Welcome.module.scss";

function Welcome({ name = "Guest", age }) {
    return (
        <>
            <p className={classes.niceWelcome}>Welcome, <strong>{name}</strong></p>
            <AgeComponent age={age}></AgeComponent>
        </>
    );
}

export default Welcome;