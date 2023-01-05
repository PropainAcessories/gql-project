import React, { createContext, useContext } from 'react';

export const BlankContext = createContext();
const { Provider } = BlankContext;

export const useProvider = () => useContext(BlankContext);

export default function BlankProvider(props) {
    const initialstate = {

    };

    return <Provider value={initialState} {...props} />;
}
