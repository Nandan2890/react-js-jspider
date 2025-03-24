import { useState } from "react";
import PropChild3 from "./PropChild3";
// import PropsChild from "./PropsChild";
// import PropsChild2 from "./PropsChild2";

const PropsParent = () => {
    let [val, setVal] = useState("");

    let data1 = "Hello World";
    let data2 = [10, 20, 30];
    let data3 = {id: 1, ename: "john"};
    let data4 = () => {
        console.log("Byee")
    }

    function getDataFromChild(val){
        console.log(val);
        setVal(val);
    }

    return (
        <div>
            <h1>Props Parent Component</h1>
            <h2>{val}</h2>
            {/* <PropsChild prop1 = {{data1, data2, data3, data4}}/>
            <PropsChild2 prop1={data1} prop2={data2} prop3={data3} prop4={data4}/> */}

            <PropChild3 getDataFromChild={getDataFromChild}/>
        </div>
    );
};

export default PropsParent;







