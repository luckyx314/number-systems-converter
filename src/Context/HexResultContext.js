import React, {useState, createContext} from 'react';


export const HexResultContext = createContext();

export const HexResultProvider = props => {
    const [hexResult, setHexResult] = useState(0);
    return (
        <HexResultContext.Provider value={[hexResult, setHexResult]}>
            {props.children}
        </HexResultContext.Provider>
    )
}