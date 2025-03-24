import { createContext } from "react"
import Child1 from "./Child1"

//* Step 1: create context with the help of createContext
export let myContext = createContext();

const Parent = () => {
    // console.log(myContext); //Context Object --> {Provider:{{$$typeof: Symbol(react.context), ....}}

    let data1 = "Hello world";
    let data2 = [10, 20, 30];
    return (
        <div>
            <h1>Parent Component</h1>

            {/* Step2: Call Provider and tell which data will be provided */}
            <myContext.Provider value={{data1, data2}}>
                <Child1 />
            </myContext.Provider>

        </div>
    )
}

export default Parent

// step3: consume context
