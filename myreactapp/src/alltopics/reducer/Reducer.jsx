import { useReducer } from "react";

let initialState = 0;

let reducerFunc = (prevState, action) => {
    console.log("previous state is ", prevState, action)
    switch(action){
        case "increment":
            return prevState + 1;
        case "decrement":
            return prevState - 1;
        default:
            return;
    }
};

const Reducer = () => {

    let [state, dispatch] = useReducer(reducerFunc, initialState);

    // `useReducer` is a hook that is used for state management in React. It is an alternative to `useState`. It is mostly used when the state logic is complex and involves multiple sub-values or when the next state depends on the previous one. It is also preferred when the state transitions follow certain patterns.

    console.log("new state is ", state);
    // console.log(dispatch)
    return (
        <div>
            <h1>Learn Reducer</h1>
            <h1>Value is: {state}</h1>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
        </div>
    );
}

export default Reducer;