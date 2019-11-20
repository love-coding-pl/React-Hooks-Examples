import React, { useRef } from 'react';

const HookExample = () => {    
    const inputEl = useRef(null);
    const paragraphEl = useRef(null);
    
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