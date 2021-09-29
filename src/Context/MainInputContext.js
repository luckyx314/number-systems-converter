import React, {useState, createContext} from 'react';

export const MainInputContext = createContext();

export const MainInputProvider = props => {
    const [inputVal, setInputVal] = useState(0)

    return (
        <MainInputContext.Provider value={[inputVal, setInputVal]}>
            {props.children}
        </MainInputContext.Provider>
    )
}