import React, {useContext, useState} from 'react'
import "./Conversions.css"
import MainInputBar from '../MainInputBar/MainInputBar'
import NumberBtns from '../NumberBtns/NumberBtns'
import DisplayResults from '../DisplayResults/DisplayResults'
import Arithmetic from '../Arithmetic/Arithmetic'
import ConversionOptions from '../ConversionOptions/ConversionOptions'

import {NumberSystemContext} from '../../Context/NumberSystemContext'

const Conversions = () => {
    const [systemType] = useContext(NumberSystemContext);

    const handleConvert = () => {
        if (systemType.finalSystemType === 'decimal') {
            switch (systemType.initialSystemType) {
                case 'binary':
                    console.log('binary to decimal');
                    break
                case 'hexadecimal':
                    console.log('hexadecimal to decimal');
                    break
                case 'octal':
                    console.log('octal to decimal');
                    break
                default:
                    return
            }
        } else {
            console.log(false)
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
