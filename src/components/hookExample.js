import React, { useReducer } from 'react';

const HookExample = () => {

    const switchOption = (state, action) => {
        switch (action.type) {
            case 'add':
                return {count: state.count + 1, color: "green"};
            case 'substract':
                return {count: state.count - 1, color: "red"};
            case "reset":
                return action.setInitState;
            default:
                return {count: state};
        }
    }

    const init = () => {
        return {count: 0, color: "gray"}
    }
    const initState = init();

    // state - Declaring new state variable, called "counter" and initial count state
    const [counter, setCounter] = useReducer(switchOption, initState);
  return (
    <div className="App">
      <p> Counter: <span style={{color: counter.color }}> {counter.count} </span></p>
      <button onClick={() => setCounter({type: "add"})} > +1 </button>
      <button onClick={() => setCounter({type: "substract"})} > -1 </button>
      <div>
         <button onClick={() => setCounter({type: "reset", setInitState: init()})} > reset </button>
      </div>
    </div>
  );
}

export default HookExample;