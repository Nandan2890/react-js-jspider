import React from 'react'

function PropChild3({getDataFromChild}) {

    let val = "Hii Parent";

    function btnHandle(){
        getDataFromChild(val);
    }

    return (
        <div>
            <h1>PropsChild3 Comp</h1>
            <button onClick={btnHandle}>Send data to parent</button>
        </div>
    )
}

export default PropChild3
