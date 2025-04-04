/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { memo } from "react";

const Child = ({greet}) => {
    console.log("Child")
    return (
        <div>
            <h1>memo and callback child</h1>
        </div>
    );
}
export default memo(Child);

// `memo` is a higher-order component in React that optimizes performance by memoizing the rendered output of a component. 
// It prevents unnecessary re-renders by reusing the last rendered output if the props have not changed.