import React, { useState, useMemo } from 'react';

const HookExample = () => {    
    const [counter, setCounter] = useState(0);
    const [numbers, setNumbers] = useState({a: 5, b: 7})

    const calculations = () => {
        // here you can add some calculations
        console.log("calculations are made here");
        return numbers.a + numbers.b;
    }

    // if your calculations will be wrapped in useMemo, it will be re-render only if dependencies will change
    // otherwise it will be "read value from memory"
    const memo = useMemo(() => calculations(numbers.a, numbers.b), [numbers.a, numbers.b]);

    return (
        <div className="App">
            <p>Counter: {counter}</p>
            <div>
                <button onClick={() => setCounter(counter-1) }>-1</button>
                <button onClick={() => setCounter(counter+1) }>+1</button>
            </div>
            <p>Memo: {numbers.a} + {numbers.b} = {memo}</p>
            <div>
                <button onClick={() => setNumbers({a: numbers.a + 1, b: numbers.b + 2}) }>Change memo numbers</button>
            </div>
        </div>
    );
}

export default HookExample;