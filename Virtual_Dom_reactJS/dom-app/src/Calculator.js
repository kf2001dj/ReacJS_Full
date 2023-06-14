import React from "react";
import { ReactDOM } from "react";
import App from "./App";
import Layout from "./Layout";


export default class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.state= {output: " "}
        this.input1= React.createRef();
        this.input2= React.createRef();
    }
    render(){
        let IntegerA, IntegerB , IntegerC
        return(
            <div className="container">
                <h2>Using React</h2>
                <div>
                   Input 1 : <input type="text" placeholder="Nhập 1" ref={'inphut1'}></input> 
                </div> 
                <div>
                   Input 2 : <input type="text" placeholder="Nhập 2" ref={'inphut2'}></input>
                </div> 
                <div>
                    <button id="add" onClick={ ()=>{
                        IntegerA = this.input1.current; // đang lỗi ở đây huhu
                        IntegerB = this.input2.current; // đang lỗi ở đây huhu

                        IntegerC = IntegerA + IntegerB;
                    } }>Cộng</button>
                </div>
                <div>
                    <button id="subtract" onClick={ ()=>{
                        IntegerA = parseInt(ReactDOM.this.refs.input1.value)
                        IntegerB = parseInt(ReactDOM.this.refs.input2.value)

                        IntegerC = IntegerA - IntegerB;
                    } }>Trừ</button>
                </div>
                <div>
                    <button id="x2" onClick={ ()=>{
                        IntegerA = parseInt(ReactDOM.this.refs.input1.value)
                        IntegerB = parseInt(ReactDOM.this.refs.input2.value)

                        IntegerC = IntegerA * IntegerB;
                    } }>Nhân</button>
                </div>
                <div>
                    <button id="chia" onClick={ ()=>{
                        IntegerA = parseInt(ReactDOM.this.refs.input1.value)
                        IntegerB = parseInt(ReactDOM.this.refs.input2.value)

                        IntegerC = IntegerA / IntegerB;
                    } }>Chia</button>
                </div>

                <div>
                    <h2>
                        Output : {this.state.output}
                    </h2>
                </div>


            </div>
        )
    }


}