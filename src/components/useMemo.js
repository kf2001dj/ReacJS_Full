import React, { useMemo, useState } from "react";

export default function MyComponent(props){
    const [number1 , setNumber1] = useState(0);
    const [number2 , setNumber2] = useState(0);

    const result = useMemo( ()=> {
        console.log('Code render result')
        return number1 + number2;

    }, [number1, number2])

    return(
        <div>  
            <input value={number1}
                onChange={ (e) => setNumber1(parseInt(e.target.value))}
              ></input><br></br>
            <input value={number2}
                onChange={ (e) => setNumber2(parseInt(e.target.value))}
              ></input>

            <p>Number 1 : {number1}</p>
            <p>Number 2 : {number2}</p>
          
              <p>Result : {result}</p>
        </div>



    )
}