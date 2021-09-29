import React, {useState, createContext} from 'react';


export const OctalResultContext = createContext();

export const OctalResultProvider = props => {
    const [octalResult, setOctalResult] = useState(0);
    return (
        <OctalResultContext.Provider value={[octalResult, setOctalResult]}>
            {props.children}
        </OctalResultContext.Provider>
    )
}