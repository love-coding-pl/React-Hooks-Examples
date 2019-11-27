import React, { useState, useCallback } from 'react';
import Child from './child.js';

const HookExample = () => {    
    const [counter, setCounter] = useState(0);
    const [numbers, setNumbers] = useState({a: 5, b: 7})

    // callback depends on numbers.a, and numbers.b, so child will be re-render only, if this values will change (because we pass callback to child as props)
    const callback = useCallback( () => numbers.a + numbers.b, [numbers.a, numbers.b]);

    console.log("Parent re-render");
    return (
        <div className="App">
            <p>Counter: {counter}</p>
            <div>
                <button onClick={() => setCounter(counter-1) }>-1</button>
                <button onClick={() => setCounter(counter+1) }>+1</button>
            </div>
            <p>numbers: {numbers.a} + {numbers.b} = {callback()}</p>
            <div>
                <button onClick={() => setNumbers({a: numbers.a + 1, b: numbers.b + 2}) }>Change numbers</button>
            </div>
            <div>
                <Child value={callback} />
            </div>
        </div>
    );
}

export default HookExample;