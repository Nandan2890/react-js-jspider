import { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
    let [state, setState] = useState(0);
    let [val, setVal] = useState(5);

    console.log("Parent")

    // function multiply() {
    //     console.log("multiply");
    //     return val*10;
    // }

    // function greet() {
    //     console.log("Welcome")
    // }

    let greet = useCallback(() => {
        console.log("Welcome")
    }, [])

    let multiply = useMemo(() => {
        console.log("multiply");
        return val * 10;
    }, [val])

    return (
        <div>
            <h1>memo and callback Parent {state}</h1>
            <button onClick={() => setState(state + 1)}>Increment</button>

            <h1>multiply: {multiply}</h1>
            <button onClick={() => setVal(val + 5)}>multiply</button>
            <Child greet={greet}/>
        </div>
    )
}

export default Parent;










// `useMemo` is a hook in React that memorizes the output of a function and returns the cached result when the inputs to the function are the same.
/**
 * The `useMemo` hook in React is used to optimize performance by memoizing the result of a computation.
 * It only recalculates the memoized value when one of its dependencies has changed.
 * This can help avoid expensive calculations on every render.
 *
 * Syntax:
 * const memoizedValue = useMemo(() => computeFunction(), [dependencies]);
 *
 * Example in the given code:
 * 
 * In the `Parent` component, the `useMemo` hook is used to memoize the result of the `multiply` computation.
 * The computation `val * 10` is only recalculated when the `val` state changes.
 * This prevents the `multiply` function from being executed on every render of the `Parent` component.
 *
 * ```javascript
 * let multiply = useMemo(() => {
 *     console.log("multiply");
 *     return val * 10;
 * }, [val]);
 * ```
 *
 * - `val` is the dependency for the `useMemo` hook.
 * - The `multiply` computation will only run when `val` changes.
 * - This ensures that the expensive computation is not unnecessarily repeated.
 */

