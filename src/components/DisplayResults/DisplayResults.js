import React, {useContext} from 'react'
import "./DisplayResults.css"
import {ConversionResultContext} from "../../Context/ConversionResultsContext"

const DisplayResults = () => {
    const [conversionResults] = useContext(ConversionResultContext)
    
    return (
        <div className="displayResultsContainer">
            {conversionResults.map(result => (
                <div key={result.type}>
                    <p>{result.type} Number</p>
                    <div className="conversionResultContainer">
                        <div className="conversionResult">
                            {result.data}
                        </div>
                        <div className="conversionResultBase">{result.base}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DisplayResults
