import React from 'react';
import "./Navigation.css";

const Navigation = ({logout, onRouteChange, route, userId}) => {
    return(
    userId ?
    // if user IS logged in:
    <nav className="dashboardNav f5">
          <button  
          onClick={logout}>
            Odjava
          </button>
          <button>Filtriraj</button>
          <button>Dodaj novo</button>
    </nav>      
    : // User is NOT logged in:
    // User is on register route
        <nav className="navBtn"> 
              <button
              className="shadow pointer"
              onClick={() => onRouteChange("signin")}>
                { "Prijava".toUpperCase() }
              </button>
              <button
                className="shadow pointer"
                onClick={() => onRouteChange("register")}>
            { "Registracija".toUpperCase() }
          </button>
        </nav>
    )
}   

export default Navigation;
