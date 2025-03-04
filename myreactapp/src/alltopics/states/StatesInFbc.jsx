import { useState } from "react";

const StateInFbc = () => {

    let [state, setState] = useState('hello');

    console.log(state);

    return (
        <div>
            <h1>Learn States in FBC</h1>
            <h1>{state}</h1>
        </div>
    );
};

export default StateInFbc;


//------------------------------------
//! HOOKS  => inbuilt methods present in react
//?   useState() method is used to make FBC component stateful
//? multiple hooks are present in React UseState(), useEffect(), useRef(), useMemo(), useCallback()

//* when we use any hooks we have to first import that hooks from 'react'
//* when we have to write XML, then we write in return paranthesis but when we have to write JS we have to write in Component

//* when we use js code in xml we have to write in expression eg. {state}