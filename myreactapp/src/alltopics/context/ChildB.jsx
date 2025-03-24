import { useContext } from "react";
import { GlobalContext } from "./Context";


const ChildB = () => {
    let data = useContext(GlobalContext);
    console.log(data);
    return (
        <div>
            <h1>ChildB component</h1>
        </div>
    )
}

export default ChildB
