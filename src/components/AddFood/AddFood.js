import React, { useState } from "react"
import "./AddFood.css"
import { useInput } from "../../hooks/useInput";
import { Link } from "react-router-dom";

const AddFood = () => {

    const { value: jed, bind:bindJed, reset: resetJed} = useInput("");
    const { value: tip, bind:bindTip, reset: resetTip} = useInput("Predjed");
    const { value: postopek, bind:bindPostopek, reset: resetPostopek} = useInput("");
    const { value: sestavina, bind:bindSestavina, reset: resetSestavina} = useInput("");
    const [sestavine, setSestavine]= useState([])
    const [error, setErrorMessage]  = useState("")
    const [serverResponse, setServerResponse] = useState("");

    const onButtonSubmit = (event) => {
        event.preventDefault();
        fetch("https://pure-castle-45538.herokuapp.com/food", 
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
        .then(data => {
            setServerResponse(data.message)
            resetJed()
            resetPostopek()
            resetTip()
            setSestavine([])
        })
        .catch(err => setServerResponse(err));
    }

    const removeItem = i => {
        setSestavine(
            sestavine.filter(item => i !== item)
        )
    }



    return(
        <div className="AddFood">
            <Link to="/"><button className="button is-link is-outlined">Pojdi nazaj</button></Link>
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
                    className="input AddFood__input is-info" type="text" 
                    placeholder="Vpiši ime jedi"
                    {...bindJed}
                />
                {/* ________ */}
                <br></br>
                <label className="label"> Tip </label>
                <div className="field">
                    <div className="control">
                        <div className="select is-info">
                            <select {...bindTip}>
                                <option value="Predjed">Predjed</option>
                                <option value="Juha">Juha</option>
                                <option value="Glavna jed">Glavna jed</option>
                                <option value="Sladica">Sladica</option>
                                <option value="Kvašeno pecivo">Kvašeno pecivo</option>
                                <option value="Prigrizki">Prigrizki</option>
                                <option value="Napitki">Napitki</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br></br>
                <label className="label">Sestavine</label>
                <input  className="input AddFood__input" placeholder="Kaj? Koliko? Česa?"
                {...bindSestavina}></input>
                <br></br>
                <button className="button is-link is-outlined is-small"
                onClick={() => {
                    if(sestavina){
                        setSestavine(sestavine.concat(sestavina));
                        resetSestavina();
                        setErrorMessage("");
                    }else{
                        setErrorMessage("Polje za sestavino je prazno!")
                    }
                }}>Dodaj</button>
                <button className="button is-link is-outlined is-small"
                onClick={() => {
                    if(sestavina){
                        removeItem(sestavina);
                        resetSestavina();
                        setErrorMessage("");
                    }else{
                        setErrorMessage("Polje za sestavino je prazno!")
                    }
                }}>Odstrani vpisano</button>
                <button className="button is-link is-outlined is-small"
                onClick={() => {
                    setSestavine([]);
                    resetSestavina();
                    setErrorMessage("");
                }}>Odstrani vse</button>
                <p className="help is-info">Sestavine se izpisujejo spodaj</p>
                <br></br>
                {(sestavine.length) ?
                    (
                    sestavine.map(item => {
                            return <li key={item} style={{padding: "5px"}}>{item}</li>
                    }))
                    :
                    (<div></div>)
                }
                <br></br>
                <label className="label">Postopek</label>
                <textarea className="textarea" placeholder="Vpiši recept"
                {...bindPostopek}></textarea>
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