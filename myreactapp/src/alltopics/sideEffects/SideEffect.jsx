import { useState, useEffect } from "react";

const SideEffect = () => {
    let [state, setState] = useState(0);
    const [id, setId] = useState(null);

    useEffect(() => {
        console.log("Welcome");

        let intervalId = setInterval(() => {
            console.log("fetching data")
        }, 2000);
        setId(intervalId);
    }, [])

    useEffect(() => {
        console.log("State updated");
    }, [state]);

    useEffect(() => {
        return (() => {          //* cleanup function
            console.log("Bye")
            clearInterval(id);
        }
        )
    }, []);

    return (
        <div>
            <h1>Learn useEffect {state}</h1>
            <button onClick={() => setState(state + 1)}>Update</button>
        </div>
    )
}

export default SideEffect;
