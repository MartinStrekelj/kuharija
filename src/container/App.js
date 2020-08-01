import React, { Component } from 'react';
import Navigation from "../components/Navigation/Navigation"
import List from "../components/List/List"
import Greetings from "../components/Greetings/Greetings"
import "tachyons";
import Searchbar from '../components/Searchbar/Searchbar';
import Scroll from '../components/Scroll/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
      input: "",
      user: {
        id: "",
        username: "Janez",
        role: "",
      }
    }
  }

  QueryDishes(){
    console.log("");
  }

  updateInput = (event) => {
    this.setState({input: event.target.value})
    this.QueryDishes();
  }

  loadUser(){
    this.setState({isLoggedIn: true})
    console.log("USER")
  }

  render(){ 
  return(
    <div>
      <Navigation loggedIn={this.state.isLoggedIn} />
      <Greetings username={this.state.user.username}/>
      <Searchbar updateInput={this.updateInput}/>
      <Scroll>
        <List />
      </Scroll>
    </div>
  );
}   
}

export default App;
