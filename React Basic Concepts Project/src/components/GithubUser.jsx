import { useEffect, useState } from "react";


function GithubUser({ username }) {
    const [userData, setUserData] = useState({});
    const [displayError, setDisplayError] = useState(false)


    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((data) => setUserData(data))
            .catch(() => {
                console.error("An error has occured :(")
                setDisplayError(true)
            })
            .finally(() => {
                console.log("Fetch process ended.")
            })
    }, [username]);

    return (   
        <>
            { displayError && <h1>An error has occured uring fetch process</h1> }
            <p>{userData.name}</p>
            <p>{userData.login}</p>
            <img src={userData.avatar_url} alt="payaso" />
        </>
    )
}

export default GithubUser;