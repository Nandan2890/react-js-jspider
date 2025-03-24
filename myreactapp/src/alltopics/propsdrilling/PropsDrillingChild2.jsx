import React from 'react'

const PropsDrillingChild2 = (x) => {

    console.log(x);

    return (
        <div>
            <h1>PropDrillingChild 2</h1>
            <p>{x.data1}</p>
        </div>
    );
};

export default PropsDrillingChild2;
