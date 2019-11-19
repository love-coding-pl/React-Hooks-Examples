import React, { useReducer } from 'react';

const HookExample = () => {

    const switchOption = (state, action) => {
        switch (action.type) {
            case 'add':
                return {count: state.count + 1};
            case 'substract':
                return {count: state.count - 1};
            case "reset":
                return action.setInitState;
            default:
                return {count: state};
        }
    }

    const init = () => {
        return {count: 0}
    }

    // state - Declaring new state variable, called "counter" and initial count state
    const [counter, setCounter] = useReducer(switchOption, {
        count: 0
    });
  return (
    <div className="App">
      <p> Counter: {counter.count} </p>
      <button onClick={() => setCounter({type: "add"})} > +1 </button>
      <button onClick={() => setCounter({type: "substract"})} > -1 </button>
      <div>
         <button onClick={() => setCounter({type: "reset", setInitState: init()})} > reset </button>
      </div>
    </div>
  );
}

export default HookExample;