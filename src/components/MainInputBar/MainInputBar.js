import React, {useContext} from 'react'
import {MainInputContext} from "../../Context/MainInputContext"

const MainInputBar = () => {
    const [inputValue, setInputValue] = useContext(MainInputContext);
    return (
        <div>
            <input type="text" onChange={(e) => setInputValue({...inputValue, data: e.target.value})} />
        </div>
    )
}

export default MainInputBar
