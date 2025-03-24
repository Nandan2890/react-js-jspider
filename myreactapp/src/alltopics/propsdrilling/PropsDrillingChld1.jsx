import React from 'react'
import PropsDrillingChild2 from './PropsDrillingChild2';

const PropsDrillingChld1 = ({data1}) => {
    return (
        <div>
            <h1>PropDrillingChild 1</h1>
            <PropsDrillingChild2 data1 = {data1} />
        </div>
    );
};

export default PropsDrillingChld1;
