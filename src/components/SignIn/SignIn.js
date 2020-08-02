import React, { Component } from "react";
import "./SignIn.css"

class SignIn extends Component {

    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
        }
    }

    onUsernameInputChange = (event) =>{
        this.setState({username: event.target.value});
    }

    onPasswordInputChange = (event) =>{
        this.setState({password: event.target.value});
    }

    onSignIn = (event) =>{
        const user = {
            username: this.state.username
        }
        this.props.loadUser(user);
    }

    render(){
        return(
            <div className="wrapper">
                <div className="pa4">
                    <p className="f1 pa1" style={{textAlign: "center"}}> Kuharija</p>
                    <br/>
                    <div style={{width: "300px"}}>
                        <label className="label">Uporabniško ime</label>
                        <input className="input is-fullwidth" type="text" 
                        placeholder="Vpiši svoje uporabniško ime"
                        onChange={this.onUsernameInputChange}
                        />
                        <br/>
                        <label className="label">Geslo</label>
                        <input className="input is-fullwidth" type="password" 
                        placeholder="Vpiši svoje geslo"
                        onChange={this.onPasswordInputChange}
                        />
                        <br></br>
                        <button style={{ width: "70%", marginLeft: "15%"}} className="button is-link" 
                        onClick={this.onSignIn}>
                            Vpiši se
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;