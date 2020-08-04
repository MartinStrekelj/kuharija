import React, { Component } from 'react'
import "./List.css"
import Item from "../Item/Item";
import Axios from 'axios';



class List extends Component{

    constructor(){
        super()
        this.state = {
            items: [],
            errorMessage: ""
        }
    }
    componentDidMount() {
        Axios.get("http://localhost:3000/food")
        .then(response => {
            this.setState({items: response.data})
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
                                    onRouteChange={this.props.onRouteChange} 
                                    imeJedi = {food.jed} 
                                    tipJedi = {food.tip}
                                    fid     = {food.id}
                                    showFoodInfo = {this.props.showFoodInfo}
                                    />
                                </div>
                            )
                        })}
                    </div>
                );
            }
        }


export default List;