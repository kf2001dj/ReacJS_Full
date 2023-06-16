import React, { useState } from "react";

export default function StateCode(){
    const [counter, setCounter] = useState(1)
    const clickbasic = () => {
        setCounter(counter +1)
        setCounter(prevState => prevState +1)
        setCounter(prevState => prevState +1)
        setCounter(prevState => prevState +1)
    }
    return(
        <div style={{padding :20}}>
            <h1>{counter}</h1>
            <button onClick={clickbasic}> Click </button>
        </div>
    )
}