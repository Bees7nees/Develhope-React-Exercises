/* Nombrar docs .jsx / .js con primera letra en may. pq si no ded */

import AgeComponent from "./AgeComponent";

function Welcome({ name = "Guest", age }) {
    return (
        <>
            <p>Welcome, <strong>{name}</strong></p>
            {18 < age && <AgeComponent age={age}></AgeComponent>}
            {age && <AgeComponent age={age}></AgeComponent>}
            {18 < age && 65 > age && <AgeComponent age={age}></AgeComponent>}
            {18 < age && 65 > age && name=="John" && <AgeComponent age={age}></AgeComponent>}
            <AgeComponent age={age}></AgeComponent>
        </>
    );
}

export default Welcome;