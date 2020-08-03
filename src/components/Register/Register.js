import React, { Component } from "react";
import "./Register.css"

class Register extends Component {

    constructor(){
        super()
        this.state = {
            username: "",
            email: "",
            password: "",
        }
    }

    onUsernameInputChange = (event) =>{
        this.setState({username: event.target.value});
    }

    onEmailInputChange = (event) =>{
        this.setState({email: event.target.value});
    }

    onPasswordInputChange = (event) =>{
        this.setState({password: event.target.value});
    }

    onRegister = (event) =>{
        console.log(this.state)
    }

    render(){
        return(
            <div className="wrapper">
                <div className="pa4">
                    <p className="f1 pa1" style={{textAlign: "center"}}> Kuharija</p>
                    <p className="f3 pa1" style={{textAlign: "center"}}>Registracija</p>
                    <br/>
                    <div style={{width: "300px"}}>
                        <label className="label">Uporabniško ime</label>
                        <input className="input is-fullwidth is-info" type="text" 
                        placeholder="Vpiši svoje uporabniško ime"
                        onChange={this.onUsernameInputChange}
                        />
                        <br/>
                        <label className="label">Email</label>
                        <input className="input is-fullwidth is-info" type="email" 
                        placeholder="Vpiši svoj email"
                        onChange={this.onEmailInputChange}
                        />
                        <br/>
                        <label className="label">Geslo</label>
                        <input className="input is-fullwidth is-info" type="password" 
                        placeholder="Vpiši svoje geslo"
                        onChange={this.onPasswordInputChange}
                        style={{marginBottom: "15px"}}
                        />
                        <br></br>
                        <button 
                        style={{ width: "70%", marginLeft: "15%"}} 
                        className="button is-link is-medium is-outlined" 
                        onClick={this.onRegister}>
                            Registracija
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;