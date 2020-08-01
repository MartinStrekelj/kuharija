import React from 'react'


const Item = ({ tipJedi, imeJedi, fotoJed }) =>{
    return(
        <div className="card">
            <div className="card-image">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder"/>
                </figure>
            </div>
            <div className="card-content"></div>
        </div>
    );
}


export default Item;