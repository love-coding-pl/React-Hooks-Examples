import React, { useRef, useEffect } from 'react';

const HookExample = () => {    
    // when you use reference to dom element, react component is not refreshing,
    // so even, if you change input value and display it on page, there will be no re-render
    const inputEl = useRef(null);
    const paragraphEl = useRef(null);
    // useRef hook can also hold a mutable value in its .current property
    const counter = useRef(0);
    
    useEffect(() => {
        console.log("counter ", counter.current++);
        console.log("counter ", counter.current++);
        console.log("counter ", counter.current++);
        console.log("counter ", counter.current++);
        console.log("counter ", counter.current++);
    })

    useEffect(() => {
        console.log(counter.current);
        counter.current = "yo!";
        console.log(counter.current);
    });

    return (
        <div className="App">
            <input ref={inputEl} type="text" />
            <button onClick={() => inputEl.current.focus()}>Set focus</button>
            <button onClick={() => inputEl.current.style.borderColor = "red"}>Set border color</button>
            <div>
                <button onClick={() => {
                            paragraphEl.current.innerText = inputEl.current.value;
                            inputEl.current.value = "";
                        }}>Display input value</button>
                <p ref={paragraphEl} >Display input value here </p>
            </div>
        </div>
    );
}

export default HookExample;