import React from 'react'
import "./Arithmetic.css"

const Arithmetic = () => {
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
                <div className="arithmeticResult">12342</div>
                <div className="arithmeticResultBase">2</div>
            </div>
        </div>
    )
}

export default Arithmetic
