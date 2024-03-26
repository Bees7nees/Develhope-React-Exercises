import { useState } from "react";
import Welcome from "./Welcome";

export function InteractiveWelcome() {
    const [input, setInput] = useState("");

    function handleChange(event) {
        return setInput(event.target.value);
    }

    return (
        <>
            <input type="text" onChange={handleChange}/>
            <Welcome name={ input } />
        </>
    )
}