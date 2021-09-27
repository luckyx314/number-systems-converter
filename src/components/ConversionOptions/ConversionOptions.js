import React, {useState, useContext} from 'react'
import "./ConversionOptions.css"
import {NumberSystemContext} from '../../Context/NumberTypeContext'

const ConversionOptions = () => {
    const setInitialSystemType = useContext(NumberSystemContext);
    const setFinalSystemType = useContext(NumberSystemContext);

    return (
        <div className="conversionOptions">
                <div className="fromBaseN">
                    <p>From</p>
                    <select
                        onClick={(e) => setInitialSystemType[1](e.target.value)}
                    >
                        <option value="binary">Binary</option>
                        <option value="decimal">Decimal</option>
                        <option value="hexadecimal">Hexadecimal</option>
                        <option value="octal">Octal</option>
                    </select>
                </div>
                <div className="toBaseN">
                    <p>To</p>
                    <select
                        onClick={(e) => setFinalSystemType[1](e.target.value)}
                    >
                        <option value="binary">Binary</option>
                        <option value="decimal">Decimal</option>
                        <option value="hexadecimal">Hexadecimal</option>
                        <option value="octal">Octal</option>
                    </select>
                </div>
            </div>
    )
}

export default ConversionOptions
