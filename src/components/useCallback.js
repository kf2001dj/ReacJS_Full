import React, { useCallback, useState } from "react";

export default function Calluse (props){
    const [count , setCount ] = useState(0);
    const clickcallback = useCallback ( 
        ()=>{
            setCount(count +1)
        }
        ,[count]

    )




    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={clickcallback}>
                Click code
            </button>

        </div>


    )
}
