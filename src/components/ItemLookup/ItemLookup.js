import React , { Component } from "react";

class ItemLookup extends Component {

    constructor(props){
        super(props)
        this.state = {
            item: {
                id: props.id,
                jed: "",
                tip: "",
                postopek: "",
                sestavine: {}
            }
        }
    }


    render(){
        return(
            <div>
                <h1>Hello world</h1>
            </div>
        )
    }
}

export default ItemLookup;