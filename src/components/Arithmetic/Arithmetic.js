import React, {useContext} from 'react'
import "./Arithmetic.css"
import {NumberSystemContext} from '../../Context/NumberTypeContext'

const Arithmetic = () => {
    const [initialSystemType] = useContext(NumberSystemContext);

    return (
        <div className="arithmeticContainer">
            <div className="arithmeticOptionsContainer">
                <select>
                    <option value="add">Add</option>
                    <option value="subtract">Subtract</option>
                </select>
                <select>
                    <option value="binary">Binary</option>
                    <option value="hex">Hex</option>
                    <option value="Decimal">Decimal</option>
                    <option value="Octal">Octal</option>
                </select>
            </div>
            
            <input type="text" />
            <input type="text" />
            <p>Result</p>
            <div className="arithmeticResultContainer">
                <div className="arithmeticResult">{initialSystemType}</div>
                <div className="arithmeticResultBase">10</div>
            </div>
        </div>
    )
}

export default Arithmetic
