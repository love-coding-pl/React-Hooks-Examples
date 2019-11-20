import React from 'react';
import HookExample from './hookExample.js';

const SecondComponent = (props) => {    
    return (
        <div className="App">
            <p>This is second component</p>
            <div>
                <button onClick={() => props.setComponent({displayComponent: HookExample})}> Change component </button>
            </div>
            
        </div>
    );
}

export default SecondComponent;