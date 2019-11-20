import React, { createContext, useReducer } from 'react';

export const DataContext = createContext();

const switchData = (state, action) => {
    switch (action.type) {
        case "changeColor":
            return {...state, color: action.color};
        case "changeTextVisibility":
            return {...state, isTextVisible: !state.isTextVisible};
        default:
            return state;
    }
}

const DataContextProvider = (props) => {
    const [data, setData] = useReducer(switchData, {
        color: "gray",
        isTextVisible: false,
    })

    return (
        <DataContext.Provider value={{data, setData}} >
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;