import React, {useContext} from 'react'
import {MainInputContext} from "../../Context/MainInputContext"

const MainInputBar = () => {
    const [,setInputValue] = useContext(MainInputContext);
    return (
        <div>
            <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
        </div>
    )
}

export default MainInputBar
