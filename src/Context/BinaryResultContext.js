import React, {useState, createContext} from 'react';

export const BinaryResultContext = createContext();

export const BinaryResultProvider = props => {
    const [binaryResult, setBinaryResult] = useState(0);

    return (
        <BinaryResultContext.Provider value={[binaryResult, setBinaryResult]}>
            {props.children}
        </BinaryResultContext.Provider>
    )
}