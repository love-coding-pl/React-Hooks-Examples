import React from 'react';
import HookExample from './components/hookExample.js';
import DataContextProvider from './contexts/dataContext.js';

function App() {
    return (
        <DataContextProvider >
            <HookExample />
        </DataContextProvider>
    );
}

export default App;
