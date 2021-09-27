import React, {useState, createContext} from 'react';

export const NumberSystemContext = createContext();

export const NumberSystemProvider = props => {
    const [systemType, setSystemType] = useState({
        initialSystemType: 'binary',
        finalSystemType: 'decimal'
    })
    return (
        <NumberSystemContext.Provider value={[systemType, setSystemType]}>
            {props.children}
        </NumberSystemContext.Provider>
    );
}