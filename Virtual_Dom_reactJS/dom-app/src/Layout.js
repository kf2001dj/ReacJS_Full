import React from "react";
import Calculator from "./Calculator";
import App from "./App";
export default class Layout extends React.Component {
    render() {
        return(
            <div>
                <h1> Tính Toán Qua DOM</h1>
                <Calculator></Calculator>
            </div>

        )

    }
}