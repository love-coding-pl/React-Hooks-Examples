import React, { useState, useEffect } from 'react';
import SecondComponent from './secondComponent.js';

const HookExample = (props) => {    
    const [points, setPoints] = useState(0);

    useEffect(() => {
        // this will display only if state points will change
        console.log("state changed");
    },[points]);

    useEffect(() => {
        // this will display only if props points will change
        console.log("props changed");
    },[props.points]);

    useEffect(() => {
        // this will display only one time
        console.log("one time display");
    },[]);

    return (
        <div className="App">
            <p>State points: {points}</p>
            <p>Props points: {props.points}</p>
            <button onClick={() => setPoints(p => p+1)}>Change state</button>
            <button onClick={() => props.setPoints(p => p+1)}>Change props</button>
            <div>
                <button onClick={() => props.setComponent({displayComponent: SecondComponent})}> Change component </button>
            </div>
        </div>
    );
}

export default HookExample;