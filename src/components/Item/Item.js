import React from 'react'


const Item = ({ tipJedi, imeJedi, fotoJed, fid }) =>{
    return(
        <div className="card">
            <div className="card-image">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"/>
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{imeJedi}</p>
                <p className="subtitle is-6">{tipJedi}</p>
            </div>
            <div className="card-footer">
                <a className="card-footer-item" href={fid} alt="gud fud">Poglej recept</a>
            </div>
        </div>
    );
}


export default Item;