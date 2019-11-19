import React, { useReducer } from 'react';

const HookExample = () => {

    const switchOption = (state, action) => {
        switch (action.type) {
            case 'add':
                return {count: state.count + 1};
            case 'substract':
                return {count: state.count - 1};
            default:
                return {count: state}
        }
    }

    // state - Declaring new state variable, called "counter"
    const [counter, setCounter] = useReducer(switchOption, {
        count: 0
    });
  return (
    <div className="App">
      <p> Counter: {counter.count} </p>
      <button onClick={() => setCounter({type: "add"})} > +1 </button>
      <button onClick={() => setCounter({type: "substract"})} > -1 </button>
    </div>
  );
}

export default HookExample;