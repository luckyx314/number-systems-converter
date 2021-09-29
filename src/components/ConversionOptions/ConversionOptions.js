import React, {useState, useContext} from 'react'
import "./ConversionOptions.css"
import {NumberSystemContext} from '../../Context/NumberSystemContext'

const ConversionOptions = () => {
    const [systemType, setSystemType] = useContext(NumberSystemContext);

    return (
        <div className="conversionOptions">
                <div className="fromBaseN">
                    <p>From</p>
                    <select
                        onChange={(e) => setSystemType({...systemType, initialSystemType: e.target.value})}
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
                        onChange={(e) => setSystemType({...systemType, finalSystemType: e.target.value})}
                    >
                        <option value="decimal">Decimal</option>
                        <option value="binary">Binary</option>
                        <option value="hexadecimal">Hexadecimal</option>
                        <option value="octal">Octal</option>
                    </select>
                </div>
            </div>
    )
}

export default ConversionOptions
