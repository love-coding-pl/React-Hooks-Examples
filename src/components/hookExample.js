import React, { useState, useCallback } from 'react';
import Child from './child.js';
import Child2 from './child2.js';

const HookExample = () => {    
    const [counter, setCounter] = useState(0);
    const [numbers, setNumbers] = useState({a: 5, b: 7})

    const changeCounter = useCallback(
        (sign) => {
            if (sign === "+") {
                setCounter(c => c + 1);
            }
            else {
                setCounter(c => c - 1);
            }
        }, [setCounter]
    ) 

    const changeNumbers = useCallback(
        () => {
            // setNumbers(n => {n.a += 1; n.b += 3});
            setNumbers(n => n = {a: n.a + 1, b: n.b + 2});
        }, [setNumbers]
    ) 

    console.log("Parent", numbers);
    return (
        <div className="App">
            <div>
                <p>Counter: {counter} </p>
                <p>Numbers: {numbers.a}, {numbers.b} </p>
                <Child changeNumbers={changeNumbers} />
                <Child2 changeCounter={changeCounter}/>
            </div>
        </div>
    );
}

export default HookExample;