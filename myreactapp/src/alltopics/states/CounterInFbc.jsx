import { useState } from "react";

const CounterInFbc = () => {

    let [count, setCount] = useState(0);
    let [cart, setCart] = useState("Add to Cart");

    let increment = () => {
        setCount(count+1);
    }

    let decrement = () => {
        setCount(count-1);
    }

    let updateCartBtn = () => {
        setCart("Go to Cart");
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <button onClick={updateCartBtn}>{cart}</button>
        </div>
    );
};

export default CounterInFbc;