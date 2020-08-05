import React from 'react'
import {Link} from "react-router-dom";
import "./Item.css"


const Item = ({ tipJedi, imeJedi,  id}) =>{
    return(
        <div className="card b--solid bw2">
            <div className="card-image ">
                <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"/>
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{imeJedi}</p>
                <p className="subtitle is-6">{tipJedi}</p>
            </div>
            <div className="card-footer">
                <div className="card-footer-item">
                    <Link to={{
                        pathname: `/food/${id}`,
                    }}>
                        <button
                        className="button is-link is-fullwidth is-outlined"> 
                            {"Recept".toUpperCase()}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default Item;