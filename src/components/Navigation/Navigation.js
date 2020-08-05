import React from 'react';
import "./Navigation.css";
import { Link } from 'react-router-dom';

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
          <Link to="/signin"> 
              <button
              className="pointer button is-link is-outlined"
              >
                { "Prijava".toUpperCase() }
              </button>
          </Link>
          <Link to="/register">
              <button
                className=" pointer button is-link is-outlined" 
                >
            { "Registracija".toUpperCase() }
          </button>
        </Link>
        </nav>
    )
}   

export default Navigation;
