/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

export let GlobalContext = createContext();

const Context = (x) => {
    console.log(x);

    let data1 = {id: 1, text: "Hello world"};

    return (
        <GlobalContext.Provider value={data1}>
            {x.children}
        </GlobalContext.Provider>
    )
}

export default Context;