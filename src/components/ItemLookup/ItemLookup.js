import React, { useState, useEffect } from "react"
import "./ItemLookup.css"
import { useParams } from "react-router-dom"

const ItemLookup = () => {
    const[food, setFood] = useState({
        jed: "",
        tip: "",
        postopek: "",
        sestavine: [],
    })
    const {id} = useParams();

    useEffect(() => {
        if(!food.jed){
        fetch(`http://localhost:3000/food/${id}`)
        .then(response => response.json())
        .then(data => setFood(data[0]))
        }
    })

    return(
        food.jed ?
        ( 
        <div className="Itemlookup container">
            <div className="Itemlookup__title">
                <p className="f1 black-0"> {food.jed} </p>
                <p className="f4 black-40"> { food.tip }</p>
                <hr></hr>
            </div>
            <div className="columns">
            <div className="Itemlookup__sestavine column is-half">
                <h1>Potrebujemo:</h1>
                    {/* {food.sestavine.map(sestavina => {
                    return (<li>{sestavina}</li>)
                })
                } */}
            </div>
            <div className="Itemlookup__postopek column is-half">
                <h1>Postopek:</h1>
                <p>{food.postopek}</p>
            </div>
            </div>
        </div>
        )
        :
        <div>
            <h1>Loading</h1>
        </div>
    )
}

export default ItemLookup;