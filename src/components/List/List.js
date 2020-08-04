import React, { Component } from 'react'
import "./List.css"
import Item from "../Item/Item";



class List extends Component{

    constructor(){
        super()
        this.state = {
            items: [],
            errorMessage: ""
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/food")
        .then(response => response.json())
        .then(data => {
            this.setState({items: data})
        })
        .catch(err => {
            this.setState({errorMessage: err.message});
        })
    }

    render(){
        const { input } = this.props
        const filterItems = this.state.items.filter(item => {
            return item.jed.toLowerCase().includes(input.toLowerCase());
        })
            return(
                    <div className="columns is-multiline b pa3" style={{textAlign: "center"}}>
                        {
                        filterItems.map(food => {
                            return (
                                <div key={food.id} className="column is-4">
                                    <Item
                                    imeJedi = {food.jed} 
                                    tipJedi = {food.tip}
                                    id      = {food.id}
                                    lookupItem = {this.props.lookupItem}
                                    />
                                </div>
                            )
                        })}
                    </div>
                );
            }
        }


export default List;