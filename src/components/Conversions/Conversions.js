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
import {BinaryResultContext} from '../../Context/BinaryResultContext'
import {OctalResultContext} from '../../Context/OctalResultContext'
import {HexResultContext} from '../../Context/HexResultContext'
import {DecimalResultContext} from '../../Context/DecimalResultContext'

// my modules
import {
    NumberSystem,
    BinaryToDecimal,
    HexToDecimal,
    OctalToDecimal
} from '../logic/toDecimal';

const Conversions = () => {
    const [systemType] = useContext(NumberSystemContext);
    const [inputVal, setInputVal] = useContext(MainInputContext);
    const [,setBinaryResult] = useContext(BinaryResultContext)
    const [,setHexResult] = useContext(HexResultContext)
    const [,setOctalResult] = useContext(OctalResultContext)
    const [,setDecimalResult] = useContext(DecimalResultContext)


    const handleConvert = () => {
        switch(systemType.initialSystemType) {
            case 'decimal':
                const numInput = Number(inputVal);
                setBinaryResult(numInput.toString(2))
                setHexResult(numInput.toString(16))
                setOctalResult(numInput.toString(8))
                setDecimalResult(numInput.toString(10))
                break
            case 'binary':
                const binToDeci = new BinaryToDecimal('binary', inputVal);
                const finalDeci = binToDeci.convertToDecimal();
                setBinaryResult(inputVal)
                setHexResult(finalDeci.toString(16))
                setOctalResult(finalDeci.toString(8))
                setDecimalResult(finalDeci.toString(10))
                break
            case 'octal':
                const octNum = new OctalToDecimal('octal', inputVal);
                const convertedOctToDeci = octNum.convertToDecimal()
                setBinaryResult(convertedOctToDeci.toString(2))
                setHexResult(convertedOctToDeci.toString(16))
                setOctalResult(inputVal)
                setDecimalResult(convertedOctToDeci.toString(10))
                break
            case 'hexadecimal':
                const hexNum = new HexToDecimal('hexadecimal', inputVal.toString());
                const convertedHexToDeci = hexNum.convertToDecimal()
                setBinaryResult(convertedHexToDeci.toString(2))
                setHexResult(inputVal.toString())
                setOctalResult(convertedHexToDeci.toString(8))
                setDecimalResult(convertedHexToDeci.toString(10))
                break
            default:
                return
        }
    }

    const handleReset = () => {
        setBinaryResult(0)
        setHexResult(0)
        setOctalResult(0)
        setDecimalResult(0)
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
