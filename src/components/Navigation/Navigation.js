import React from 'react';
import "./Navigation.css";

const Navigation = ({logout, onRouteChange, route, userId}) => {
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
              <button
              className="pointer button is-link is-outlined"
              onClick={() => onRouteChange("signin")}>
                { "Prijava".toUpperCase() }
              </button>
              <button
                className=" pointer button is-link is-outlined" 
                onClick={() => onRouteChange("register")}>
            { "Registracija".toUpperCase() }
          </button>
        </nav>
    )
}   

export default Navigation;
