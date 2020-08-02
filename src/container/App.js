import React, { Component } from 'react';
import Navigation from "../components/Navigation/Navigation"
import List from "../components/List/List"
import Greetings from "../components/Greetings/Greetings"
import "tachyons";
import Searchbar from '../components/Searchbar/Searchbar';
import Scroll from '../components/Scroll/Scroll';
import 'bulma/css/bulma.css'
import SignIn from '../components/SignIn/SignIn';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      input: "",
      user: {
        id: "",
        username: "",
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

  loadUser = (data) => {
    console.log(data)
    this.setState({
      isLoggedIn: true,
      user: {
        id: 1,
        username: data.username,
        role: "admin"
      }
    })
  }

  render(){ 
  return(
    <div>
      <Navigation userId={this.state.user.id} />
      {this.state.user.id ?
        <div>
          <Greetings username={this.state.user.username}/>
          <Searchbar updateInput={this.updateInput}/>
          <Scroll>
            <List />
          </Scroll>
        </div>
        :
        // ________
        <div>
          <SignIn loadUser={this.loadUser} />
        </div>
    }
    </div>
  );
}   
}

export default App;
