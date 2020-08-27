import React, { Component } from "react";
import "./Register.css"

class Register extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            errorMessage: "",
            loading: false
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

    onRegister = () => {
        this.setState({loading: true});
        if(this.state.username && this.state.password && this.state.email){
            fetch("https://pure-castle-45538.herokuapp.com/register", ({
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            })
        })).then(response => response.json())
        .then(data => {
            if (data.id){
                this.setState({loading: false});
                return this.setState({
                    errorMessage: data.message,
                    username: "",
                    email: "",
                    password: ""
            })
            } else {
                this.setState({loading: false});
                return this.setState({errorMessage: data.message})
            }
        }).catch(err => {
            this.setState({loading: false});
            this.setState({errorMessage: "Napaka pri registraciji, poskusite še enkrat!"})  
        })
        } else {
            this.setState({loading: false});
            return this.setState({errorMessage: "Izpolnite vsa polja"})
        }
    }

    render(){

        let errorMessage = "";
        if(this.state.errorMessage){
                errorMessage = 
                <p className="help is-info">
                    {this.state.errorMessage}
                </p>
            }

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
                        {this.state.loading ? 
                        <button
                        style={{ width: "70%", marginLeft: "15%"}} 
                        className="button is-link is-medium is-loading"/>
                        :
                        <button 
                        style={{ width: "70%", marginLeft: "15%"}} 
                        className="button is-link is-medium is-outlined" 
                        onClick={this.onRegister}>
                            Registracija
                        </button>
                        }
                        {errorMessage}
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;