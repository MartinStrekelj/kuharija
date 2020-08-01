import React  from "react";
import "./Searchbar.css"

const Searchbar = ({updateInput}) => {
        return (
            <div className="flex justify-center">
                <input 
                className="extended pa2 w-30 pointer" type="text" placeholder="Poišči recept" onChange={updateInput}></input>
            </div>
        )
}

export default Searchbar;