import React, { useState, useEffect } from 'react';

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

    return (
        <div className="App">
            <p>State points: {points}</p>
            <p>Props points: {props.points}</p>
            <button onClick={() => setPoints(p => p+1)}>Change state</button>
            <button onClick={() => props.setPoints(p => p+1)}>Change props</button>
        </div>
    );
}

export default HookExample;