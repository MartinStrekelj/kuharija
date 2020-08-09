import React, { useState, useEffect } from "react"
import "./ItemLookup.css"
import { useParams, Link, useRouteMatch, Switch, Route } from "react-router-dom"
import ProtectedPage from "../ProtectedPage/ProtectedPage"
import EditFood from "../EditFood/EditFood"

const ItemLookup = ({loggedIn}) => {
    const[food, setFood] = useState({
        jed: "",
        tip: "",
        postopek: "",
        sestavine: [],
    })
    const {id} = useParams();

    useEffect(() => {
        if(!food.jed){
        fetch(`https://pure-castle-45538.herokuapp.com/food/${id}`)
        .then(response => response.json())
        .then(data => setFood(data[0]))
        }
    })

    let { path, url } = useRouteMatch();

    return(
        food.jed ?
        (
        <Switch>
            <Route exact path={path}> 
            <div className="Itemlookup container">
                <div className="Itemlookup__backbutton">
                    <Link to="/">
                        <button className="button is-link is-outlined">
                            Pojdi nazaj
                        </button>
                    </Link>
                    <Link to={`${url}/editFood`}>
                        <button className="button is-link is-outlined">
                            Uredi
                        </button>
                    </Link>
                </div>
                    <div className="Itemlookup__title">
                    <p className="f1 black-0"> {food.jed} </p>
                    <p className="f4 black-40"> { food.tip }</p>
                    <hr></hr>
                </div>
                <div className="columns">
                <div className="Itemlookup__sestavine column is-half">
                    <h1>Potrebujemo:</h1>
                        {food.sestavine.map(sestavina => {
                        return (<li key={sestavina}>{sestavina}</li>)
                    })
                    }
                </div>
                <div className="Itemlookup__postopek column is-half">
                    <h1>Postopek:</h1>
                    <pre style={{whiteSpace: "pre-wrap"}}>{food.postopek}</pre>
                </div>
                </div>
            </div>
            </Route>
            <Route path={`${path}/editFood`}>
                    <ProtectedPage loggedIn={loggedIn}>
                        <EditFood />
                    </ProtectedPage>
            </Route>
        </Switch>
        )
        :
        <div>
            <h1>Loading...</h1>
        </div>
    )
}

export default ItemLookup;