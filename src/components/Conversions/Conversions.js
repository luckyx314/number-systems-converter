import React, {useContext, useState} from 'react'
import "./Conversions.css"

// components
import MainInputBar from '../MainInputBar/MainInputBar'
import NumberBtns from '../NumberBtns/NumberBtns'
import DisplayResults from '../DisplayResults/DisplayResults'
import Arithmetic from '../Arithmetic/Arithmetic'
import ConversionOptions from '../ConversionOptions/ConversionOptions'

// contexts
import {NumberSystemContext} from '../../Context/NumberSystemContext'
import {MainInputContext} from '../../Context/MainInputContext'
import {ConversionResultContext} from '../../Context/ConversionResultsContext'

// my modules
import {BinaryToDecimal} from "../logic/NumberSystemClass"

const Conversions = () => {
    const [systemType] = useContext(NumberSystemContext);
    const [inputValue] = useContext(MainInputContext);
    const [,setConversionResults] = useContext(ConversionResultContext);

    const handleConvert = () => {
        if (inputValue.data) {
            if (systemType.finalSystemType === 'decimal') {
                const binary = new BinaryToDecimal('binary', inputValue.data)
                setConversionResults([
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
                        data: binary.covertToDecimal(),
                        base: 10
                    }
                ])

            } else {
                console.log(false)
            } 
        } else {
            console.log('Enter a value.')
        }
        
    }
    const handleReset = () => {
        console.log('reset')
    }
    const handleSwap = () => {
        console.log('swap')
    }

    return (
        <div className="conversionsContainer">
            <ConversionOptions />
            <MainInputBar />
            <div className="btnsContainer">
                <button
                    onClick={() => handleConvert()}
                >= Convert</button>
                <button
                    onClick={() => handleReset()}
                >&times; Reset</button>
                <button
                    onClick={() => handleSwap()}
                >Swap</button>
            </div>

            <div className="conversionDetails">
                <NumberBtns />
                <div>
                    <DisplayResults />
                    <Arithmetic />
                </div>
            </div>
        </div>
    )
}

export default Conversions
