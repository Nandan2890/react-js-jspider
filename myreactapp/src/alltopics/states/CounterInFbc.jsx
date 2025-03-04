import { useState } from "react";

const CounterInFbc = () => {

    let [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }

    function decrement(){
        setCount(count-1);
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default CounterInFbc;