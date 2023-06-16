import React, { Component } from "react";

export default class StateClass extends Component{

    constructor(props) {
        super(props);
        this.state  = { 
            count : 0,
            nam : 'Test',
            age : 123
        }

    };
    clickSate = () => {
        this.setState(
            {
                name :' updated',
                count : 1742001
            }
        )
    }
    render(){
        return(
            <div>
                <p>you click {JSON.stringify(this.state)}</p>
                <button onClick={this.clickSate} > Click me</button>


            </div>



        )
    }


}