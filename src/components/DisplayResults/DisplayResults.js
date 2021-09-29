import React, {useContext} from 'react'
import "./DisplayResults.css"

import { BinaryResultContext } from '../../Context/BinaryResultContext'
import { OctalResultContext } from '../../Context/OctalResultContext'
import { HexResultContext } from '../../Context/HexResultContext'
import { DecimalResultContext } from '../../Context/DecimalResultContext'

const DisplayResults = () => {
    const [binaryResult] = useContext(BinaryResultContext);
    const [hexResult] = useContext(HexResultContext);
    const [decimalResult] = useContext(DecimalResultContext);
    const [octalResult] = useContext(OctalResultContext);

    return (
        <div className="displayResultsContainer">
                <div>
                    <p>Binary Number</p>
                    <div className="conversionResultContainer">
                        <div className="conversionResult">
                            {binaryResult}
                        </div>
                        <div className="conversionResultBase">{2}</div>
                    </div>
                </div>
                <div>
                    <p>Hex Number</p>
                    <div className="conversionResultContainer">
                        <div className="conversionResult">
                            {hexResult}
                        </div>
                        <div className="conversionResultBase">16</div>
                    </div>
                </div>
                <div>
                    <p>Decimal Number</p>
                    <div className="conversionResultContainer">
                        <div className="conversionResult">
                            {decimalResult}
                        </div>
                        <div className="conversionResultBase">10</div>
                    </div>
                </div>
                <div>
                    <p>Octal Number</p>
                    <div className="conversionResultContainer">
                        <div className="conversionResult">
                            {octalResult}
                        </div>
                        <div className="conversionResultBase">8</div>
                    </div>
                </div>
        </div>
    )
}

export default DisplayResults
