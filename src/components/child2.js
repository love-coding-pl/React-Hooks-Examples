import React from 'react';

const Child2 = React.memo(({changeCounter}) => {

    console.log("Child 2");
    return (
        <div style={{backgroundColor: "blue", color: "white"}}>
            <p>Child 2:</p>
            <div>
                <button onClick={() => changeCounter("-") }>-1</button>
                <button onClick={() => changeCounter("+") }>+1</button>
            </div>
        </div>
    )
});

export default Child2;