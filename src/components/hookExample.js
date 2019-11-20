import React, { useContext } from 'react';
import { DataContext } from '../contexts/dataContext.js';

const HookExample = () => {
    const dataContext = useContext(DataContext);
    return (
        <div className="App">
            <p style={{color: dataContext.data.color}}>This is sample text</p>
            <div style={{display: dataContext.data.isTextVisible ? "block" : "none"}}>
                This is more text, which is visible if clicked on "Show more text" button
            </div>
            <div>
                <button onClick={() => dataContext.setData({type: "changeColor", color: 'red'})}>Change text color</button>
                <button onClick={() => dataContext.setData({type: "changeTextVisibility"})}>Show more text</button>
            </div>
        </div>
    );
}

export default HookExample;