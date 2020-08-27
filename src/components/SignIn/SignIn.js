import React, { Component } from "react";
import "./SignIn.css"

class SignIn extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            errorMessage: "",
            loading: false
        }
    }

    onUsernameInputChange = (event) =>{
        this.setState({username: event.target.value});
    }

    onPasswordInputChange = (event) =>{
        this.setState({password: event.target.value});
    }


    onSignIn = () =>{
        this.setState({loading: true})
        if (this.state.username && this.state.password){
            const user = {
                username: this.state.username,
                password: this.state.password,
            }
            fetch("https://pure-castle-45538.herokuapp.com/signin", ({
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }))
            .then(response => response.json())
            .then(user => {
                if (user.id){
                    this.props.loadUser(user)
                    this.setState({loading: false})
                } else{
                    this.setState({errorMessage: "Napaka pri prijavi, poskusite še enkrat!"})
                    this.setState({loading: false})
                }
            })
            .catch(err => this.setState({errorMessage: "Napaka pri prijavi, poskusite še enkrat!"}))
        } else{
            this.setState({errorMessage: "Izpolnite vsa polja"})
            this.setState({loading: false})
        }
        
    }

    render(){
        let errorMessage = "";
        if(this.state.errorMessage){
            errorMessage = 
            <p className="help is-danger">
                {this.state.errorMessage}
            </p>
        }

        return(
            <div className="wrapper">
                <div className="pa4">
                    <p className="f1 pa1" style={{textAlign: "center"}}>Kuharija</p>
                    <p className="f3 pa1" style={{textAlign: "center"}}>Prijava</p>
                    <br/>
                    <div style={{width: "300px"}}>
                        <label className="label">Uporabniško ime</label>
                        <input 
                        required={true}
                        className="input is-fullwidth is-info" type="text" 
                        placeholder="Vpiši svoje uporabniško ime"
                        onChange={this.onUsernameInputChange}
                        />
                        <br/>
                        <label className="label" style={{marginBottom: "15px"}}>Geslo</label>
                        <input
                        required={true}
                        className="input is-fullwidth is-info" type="password" 
                        placeholder="Vpiši svoje geslo"
                        onChange={this.onPasswordInputChange}
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
                        onClick={this.onSignIn}>
                            Vpiši se
                        </button>
                        }   
                        {errorMessage}
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;