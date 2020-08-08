import React from 'react';
import "./Navigation.css";
import { Link, NavLink } from 'react-router-dom';

const Navigation = ({logout, userId}) => {
    return(
    userId ?
    // if user IS logged in:
    <nav className="navBtn">
          <NavLink to="/addFood">
            <button className="button is-link is-outlined ">Dodaj novo</button>
          </NavLink>
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
