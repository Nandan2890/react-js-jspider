import React from 'react'

const InlineCss = () => {
    let heading1 = {
        backgroundColor: "red",
        color: "white",
        textAlign: "center"
    }

    return (
        <div>
            <h1 style={heading1}>Inline Css</h1>
            <h1 style={{backgroundColor: "black", color: "white"}}>Inline CSS 2</h1>
        </div>
    )
}

export default InlineCss
