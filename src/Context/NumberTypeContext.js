import React, {useState, createContext} from 'react';

export const NumberSystemContext = createContext();

export const NumberSystemProvider = props => {
    const [initialSystemType, setInitialSystemType] = useState('binary')
    const [finalSystemType, setFinalSystemType] = useState('binary')
    return (
        <NumberSystemContext.Provider value={[initialSystemType, setInitialSystemType], [finalSystemType, setFinalSystemType]}>
            {props.children}
        </NumberSystemContext.Provider>
    );
}