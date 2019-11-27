import React from 'react';

const Child = React.memo(({changeNumbers}) => {

    console.log("Child 1");
    return (
        <div style={{backgroundColor: "gray", color: "white"}}>
            <p>Child 1:</p>
            <button onClick={() => changeNumbers() }>Change numbers</button>
        </div>
    )
});

export default Child;