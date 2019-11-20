import React, { useState } from 'react';
import HookExample from './components/hookExample.js';
import DataContextProvider from './contexts/dataContext.js';

function App() {
    const [points, setPoints] = useState(0);
    return (
        <DataContextProvider >
            <HookExample points={points} setPoints={setPoints} />
        </DataContextProvider>
    );
}

export default App;
