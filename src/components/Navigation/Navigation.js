import React, { Component } from 'react';
import "./Navigation.css";

class Navigation extends Component {
  render(){

  if (this.props.loggedIn){
    return(
        <nav className="dashboardNav f5">
                <a  href="1">Odjava</a>
                <a  href="2">Filtriraj</a>
        </nav>
    );
  } else {
    return(
        <nav className="register">
              <a 
              className="shadow"
              href="register">
                { "Registracija".toUpperCase() }
              </a>
        </nav>
    );
  }
  
}   
}

export default Navigation;
