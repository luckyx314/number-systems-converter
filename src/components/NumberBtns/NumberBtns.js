import React, {useContext} from 'react'
import "./NumberBtns.css"

import {MainInputContext} from '../../Context/MainInputContext'

const NumberBtns = () => {
    const [inputValue, setInputValue] = useContext(MainInputContext);

    return (
        <div className="numberBtnsContainer">
            <button
                onClick={(e) => e.target.textContent}
            >1</button>
            <button
                onClick={(e) => e.target.textContent}
            >2</button>
            <button
                onClick={(e) => e.target.textContent}
            >3</button>
            <button
                onClick={(e) => e.target.textContent}
            >4</button>
            <button
                onClick={(e) => e.target.textContent}
            >5</button>
            <button
                onClick={(e) => e.target.textContent}
            >6</button>
            <button
                onClick={(e) => e.target.textContent}
            >7</button>
            <button
                onClick={(e) => e.target.textContent}
            >8</button>
            <button
                onClick={(e) => e.target.textContent}
            >9</button>
            <button
                onClick={(e) => e.target.textContent}
            >+</button>
            <button
                onClick={(e) => e.target.textContent}
            >0</button>
            <button
                onClick={(e) => e.target.textContent}
            >-</button>
            <button
                onClick={(e) => e.target.textContent}
            >*</button>
            <button
                onClick={(e) => e.target.textContent}
            >/</button>
            <button
                onClick={(e) => e.target.textContent}
            >=</button>
        </div>
    )
}

export default NumberBtns
