import React, {useState, useEffect} from 'react';

const Child = (props) => {
    const [num, setNum] = useState(0);

    // avoid re-render (setting new value in state) when props.value is not changing
    useEffect(() => {
        setNum(props.value);
    }, [props.value]);

    console.log("Child re-render");
    return (
        <div style={{backgroundColor: "gray", color: "white"}}>
            <p>Child component:</p>
            <p>Score: {num}</p>
        </div>
    )
}

export default Child;