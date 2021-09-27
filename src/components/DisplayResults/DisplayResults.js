import React from 'react'
import "./DisplayResults.css"

const DisplayResults = () => {
    return (
        <div className="displayResultsContainer">
            <div>
                <p>Binary Number</p>
                <div className="conversionResultContainer">
                    <div className="conversionResult">
                        10101010101
                    </div>
                    <div className="conversionResultBase">2</div>
                </div>
            </div>
            <div>
                <p>Hex Number</p>
                <div className="conversionResultContainer">
                    <div className="conversionResult">
                        FAB123
                    </div>
                    <div className="conversionResultBase">16</div>
                </div>
            </div>
            <div>
                <p>Octal Number</p>
                <div className="conversionResultContainer">
                    <div className="conversionResult">
                        137.5
                    </div>
                    <div className="conversionResultBase">8</div>
                </div>
            </div>
            <div>
                <p>Decimal Number</p>
                <div className="conversionResultContainer">
                    <div className="conversionResult">
                        137.5
                    </div>
                    <div className="conversionResultBase">10</div>
                </div>
            </div>
        </div>
    )
}

export default DisplayResults
