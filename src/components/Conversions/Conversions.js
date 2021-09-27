import React from 'react'
import "./Conversions.css"
import MainInputBar from '../MainInputBar/MainInputBar'
import NumberBtns from '../NumberBtns/NumberBtns'
import DisplayResults from '../DisplayResults/DisplayResults'
import Arithmetic from '../Arithmetic/Arithmetic'
import ConversionOptions from '../ConversionOptions/ConversionOptions'

const Conversions = () => {
    
    const handleConvert = () => {
        console.log('convert')
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
