import React from 'react'
import "./Conversions.css"
import BinaryToDeci from '../BinaryToDeci/BinaryToDeci'
import NumberBtns from '../NumberBtns/NumberBtns'
import DisplayResults from '../DisplayResults/DisplayResults'
import Arithmetic from '../Arithmetic/Arithmetic'

const Conversions = () => {
    return (
        <div className="conversionsContainer">
            <div className="conversionOptions">
                <div className="fromBaseN">
                    <p>From</p>
                    <select>
                        <option value="binary">Binary</option>
                        <option value="decimal">Decimal</option>
                        <option value="hexadecimal">Hexadecimal</option>
                        <option value="octal">Octal</option>
                    </select>
                </div>
                <div className="toBaseN">
                    <p>To</p>
                    <select>
                        <option value="binary">Binary</option>
                        <option value="decimal">Decimal</option>
                        <option value="hexadecimal">Hexadecimal</option>
                        <option value="octal">Octal</option>
                    </select>
                </div>
            </div>
            <BinaryToDeci />
            <div className="btnsContainer">
                <button>= Convert</button>
                <button>&times; Reset</button>
                <button>Swap</button>
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
