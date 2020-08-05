import React from 'react';
import "./Navigation.css";

const Navigation = ({logout, userId}) => {
    return(
    userId ?
    // if user IS logged in:
    <nav className="dashboardNav">
          <button
          className="button is-link is-outlined"  
          onClick={logout}>
            Odjava
          </button>
          <button className="button is-link is-outlined">Filtriraj</button>
          <button className="button is-link is-outlined">Dodaj novo</button>
    </nav>      
    : // User is NOT logged in:
    // User is on register route
        <nav className="navBtn"> 
              <a
              className="pointer button is-link is-outlined"
              href="signin">
                { "Prijava".toUpperCase() }
              </a>
              <a
                className=" pointer button is-link is-outlined" 
                href="register">
            { "Registracija".toUpperCase() }
          </a>
        </nav>
    )
}   

export default Navigation;
