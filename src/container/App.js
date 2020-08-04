import React, { Component } from 'react';
import Navigation from "../components/Navigation/Navigation"
import List from "../components/List/List"
import Greetings from "../components/Greetings/Greetings"
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import Searchbar from '../components/Searchbar/Searchbar';
import Scroll from '../components/Scroll/Scroll';
import ItemLookup from '../components/ItemLookup/ItemLookup';
import "tachyons";
import 'bulma/css/bulma.css'


const InitialState = {
  isLoggedIn: false,
  route: "signin",
  input: "",
  user: {
    id: "",
    username: "",
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      input: "",
      route: "signin",
      user: {
        id: "",
        username: "",
      }
    }
  }

  logout = () => {
    this.setState(InitialState);
  }

  updateInput = (event) => {
    this.setState({input: event.target.value})
  }

  loadUser = (data) => {
    this.setState({
      isLoggedIn: true,
      user: {
        id: data.id,
        username: data.username,
      }
    })
    this.onRouteChange("home")
  }

  onRouteChange = (newRoute) =>{
    this.setState({route: newRoute});
  }

  render(){ 
  return(
    <div>
      <Navigation
      route = {this.props.route}
      onRouteChange ={this.onRouteChange} 
      userId={this.state.user.id}
      logout={this.logout}
      />
      {!this.state.user.id ?
      // _Not signed in__
        this.state.route === "register" 
        ?
        <div>
          <Register onRouteChange={this.onRouteChange} />
        </div>
          :
        // _________________________________________
        <div>
          <SignIn loadUser={this.loadUser} />
        </div>
        : // Signed in:
        (
        this.state.route === "home" ?
       ( //Homepage with list and Searchbar
       <div>
          <Greetings username={this.state.user.username}/>
          <Searchbar updateInput={this.updateInput}/>
          <Scroll>
            <List
            input ={this.state.input} 
            onRouteChange={this.onRouteChange}
            />
          </Scroll>
        </div>
        )
        :
        // selected one recipe
        <ItemLookup /> 
        )
    }
    </div>
  );
}   
}

export default App;
