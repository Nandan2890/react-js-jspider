import {useContext} from "react";
import { myContext } from "./Parent";

const Child2 = () => {

    let {data1, data2} = useContext(myContext);
    console.log(data1);
    console.log(data2);
    return (
        <div>
            <h1>Child2 component</h1>
            <h2>{data1}</h2>
        </div>
    )
}

export default Child2
