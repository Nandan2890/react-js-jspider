import PropsChild from "./PropsChild";

const PropsParent = () => {
    let data1 = "Hello World";
    let data2 = [10, 20, 30];
    let data3 = {id: 1, ename: "john"};
    let data4 = () => {
        console.log("Byee")
    }

    return (
        <div>
            <h1>Props Parent Component</h1>
            <PropsChild prop1 = {{data1, data2, data3, data4}}/>
        </div>
    );
};

export default PropsParent;