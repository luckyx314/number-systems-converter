import React, {useState, createContext} from 'react';


export const DecimalResultContext = createContext();

export const DecimalResultProvider = props => {
    const [decimalResult, setDecimalResult] = useState(0);
    return (
        <DecimalResultContext.Provider value={[decimalResult, setDecimalResult]}>
            {props.children}

        </DecimalResultContext.Provider>
    )
}