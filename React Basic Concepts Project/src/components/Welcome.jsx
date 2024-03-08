/* Nombrar docs .jsx / .js con primera letra en may. pq si no ded */

function Welcome({ name = "Guest" }) {
    return (
        <p>Welcome, {name}</p>
    );
}

export default Welcome;