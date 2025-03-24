import React from 'react'
import PropsDrillingChld1 from './PropsDrillingChld1';

const PropsDrillingParent = () => {

    let data1 = "Hello world";

    return (
        <div>
            <h1>PropDrillingParent</h1>
            <PropsDrillingChld1 data1 = {data1} />
        </div>
    );
};

export default PropsDrillingParent;


//! Props Drilling
// P: Parent, C: Child

//* P ------> C1 -------> C2 ---------> c3

//? if the parent component re-render then child and the child child component also render
