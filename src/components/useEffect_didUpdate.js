import React, { useEffect, useState } from "react";

export default function Efect2 () {
    const [count, setcount ] = useState(1);
    useEffect ( () => {
        document.title = 'Thành Đông'
    });

    return (
        <div>
        <h1>Bạn đã click {count}</h1>
        <button onClick={ () => {
            setcount(count +1)
        }} >Click Vào Đây Nhoa </button>


        </div>



    )
}