import React, { useState } from "react"
import "./AddFood.css"

const AddFood = () => {
    const [jed, setJed] = useState("");
    const [tip, setTip] = useState("Predjed");
    const [postopek, setPostopek] = useState("")
    const [sestavine, setSestavine]= useState([])
    const [sestavina, setSestavina] = useState("");
    const [error, setErrorMessage]  = useState("")
    const [serverResponse, setServerResponse] = useState("");

    const onButtonSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/food", 
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify( {
                    imejedi: jed,
                    tipjedi: tip,
                    postopek: postopek,
                    sestavine: sestavine
                })
            }
        ).then(response => response.json())
        .then(data => setServerResponse(data.message))
        .catch(err => setServerResponse(err));
    }

    return(
        <div className="AddFood">
            <div className="pa3">
            {error ? 
            (<p className="help is-danger">{error}</p>)
            :
            (<div></div>)
            }
            {serverResponse ? 
            (<p className="help is-success">{serverResponse}</p>)
            :
            (<div></div>)
            }
            <div>
                <label className="label"> Jed </label>
                <input 
                    className="input is-fullwidth is-info" type="text" 
                    placeholder="Vpiši ime jedi"
                    onChange={(event) => setJed(event.target.value)}
                />
                {/* ________ */}
                <br></br>
                <label className="label"> Tip </label>
                <div className="field">
                    <div className="control">
                        <div className="select is-link">
                        <select onChange={(event) => setTip(event.target.value)}>
                            <option>Predjed</option>
                            <option>Juha</option>
                            <option>Glavna jed</option>
                            <option>Sladica</option>
                            <option>Kruh</option>
                        </select>
                        </div>
                    </div>
                </div>
                <br></br>
                <label className="label">Sestavine</label>
                <input  className="input" placeholder="Kaj? Koliko? Česa?"
                onChange={(event) => setSestavina(event.target.value)}></input>
                <button className="button is-link is-outlined is-small"
                onClick={() => {
                    if(sestavina){
                        setSestavine(sestavine.concat(sestavina));
                        setErrorMessage("");
                    }else{
                        setErrorMessage("Polje za sestavino ne sme biti prazno!")
                    }
                }}>Dodaj</button>
                <br></br>
                    {sestavine.length ? 
                    (sestavine.map(item => {
                        return <li style={{padding: "5px"}}>{item}</li>
                    }))
                    :
                    (
                        <div></div>
                    )
                    }
                <br></br>
                <label className="label">Postopek</label>
                <textarea className="textarea" placeholder="Vpiši recept"
                onChange={(event) => setPostopek(event.target.value)}></textarea>
                <br/>
                <button
                onClick={onButtonSubmit} 
                className="button is-link is-outlined">Dodaj</button> 
            </div>
            </div>
        </div>
    );

}

export default AddFood;