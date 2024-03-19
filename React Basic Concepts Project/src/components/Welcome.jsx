/* Nombrar docs .jsx / .js con primera letra en may. pq si no ded */

import AgeComponent from "./AgeComponent";

function Welcome({ name = "Guest", age }) {
    return (
        <>
            <p>Welcome, <strong>{name}</strong></p>
            <AgeComponent age={age}></AgeComponent>
        </>
    );
}

export default Welcome;