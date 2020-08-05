import React, { Component } from "react";
import Searchbar from "../Searchbar/Searchbar";
import Greetings from "../Greetings/Greetings";
import Scroll from "../Scroll/Scroll";
import List from "../List/List";

class HomePage extends Component {

    constructor(){
        super()
        this.state = {
            input: ""
        }
    }

    updateInput = (event) => {
        this.setState({input: event.target.value})
      }

    render(){
        return(
            <div>
            <Greetings username={this.props.username}/>
            <Searchbar updateInput={this.updateInput}/>
            <Scroll>
              <List
              input ={this.state.input} 
              />
            </Scroll>
          </div>
        )
    }
}

export default HomePage;