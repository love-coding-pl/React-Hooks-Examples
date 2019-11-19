import React, { useState } from 'react';

const HookExample = () => {

    // state 1
    const [counter, setCounter] = useState(0);
    // state 2
    const [string, setString] = useState("Hello Word");
  return (
    <div className="App">
      <p> Counter: {counter} </p>
      <p> String: {string} </p>
      <button onClick={() => setCounter(val => val + 1)} > Add 1 </button>
      <button onClick={() => setString("useState hook is easy :)")} > Change text </button>
    </div>
  );
}

export default HookExample;