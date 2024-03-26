import { useState } from "react"

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    function handleChange(event) {
        console.log(event.target)
        event.target.name === "username" ? setUsername(event.target.value) :
            event.target.name === "password" ? setPassword(event.target.value) :
                setRemember(event.target.checked);
    }

    return (
        <>
            <input type="text" name="username" onChange={handleChange} value={username} />
            <input type="password" name="password" onChange={handleChange}/>
            <input type="checkbox" name="remember" onChange={handleChange}/>
        </>
    )
}