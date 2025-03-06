const PropsChild = (x) => {

    let {data1, data2, data3, data4} = x.prop1;

    console.log(data1);
    console.log(data2);
    console.log(data3);
    console.log(data4);

    return (
        <div>
            <h1>Props Child Component</h1>
        </div> 
    );
};

export default PropsChild;