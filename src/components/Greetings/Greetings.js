import React, { Component } from 'react'



class Greetings extends Component{
    render(){
        return(
            <div className="main-container">
                <h1 className="f1 center black bg-light-gray shadow-1 bb bw2 grow pa2" style={{textAlign: "center"}}> Pozdravljen {this.props.username}</h1>
            </div>
        );
    }
}

export default Greetings;