import React, {useState, createContext} from 'react';

export const ConversionResultContext = createContext();

export const ConversionResultProvider = props => {
    const [conversionResults, setConversionResults] = useState([
        {
            type: 'binary',
            data: '',
            base: 2
        },
        {
            type: '1\'s compliment',
            data: '',
            base: 2
        },
        {
            type: '2\'s compliment',
            data: '',
            base: 2
        },
        {
            type: 'octal',
            data: '',
            base: 8
        },
        {
            type: 'hexadecimal',
            data: '',
            base: 16
        },
        {
            type: 'decimal',
            data: '',
            base: 10
        },
        
        
    ])
    return (
        <ConversionResultContext.Provider value={[conversionResults, setConversionResults]}>
            {props.children}
        </ConversionResultContext.Provider>
    )
}