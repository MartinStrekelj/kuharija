import React, { Component } from "react"

class ItemLookup extends Component {

    constructor(){
        super()
        this.state = {
            food: {
                id: "",
                jed: "",
                tip: "",
                postopek: "",
                sestavine: {},
            }
        }
    }

    componentDidMount() {
        fetch()
    }

    render(){
        return(
            <div>
                <h1>{this.state.food.jed}</h1>
          </div>
        )
    }
}

export default ItemLookup;