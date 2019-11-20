import React, { useState } from 'react';
import HookExample from './components/hookExample.js';

function App() {
    const [points, setPoints] = useState(0);
    const [component, setComponent] = useState({
        displayComponent: HookExample
    });
    const Component = component.displayComponent;
    return (
        <Component points={points} setPoints={setPoints} setComponent={setComponent} />
    );
}

export default App;
