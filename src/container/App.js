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
  },
  selectedId: "3"
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
      },
      selectedDish: {
        id: "",
        jed: "",
        tip: "",
        postopek: "",
        sestavine: ""
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

  lookupItem = (jed) =>{
    fetch(`http://localhost:3000/food/?id=${jed.id}`)
    .then(response => response.json())
    .then(data => {
      this.setState({selectedDish: {
        id: data[0].id,
        jed: data[0].jed,
        tip: data[0].tip,
        postopek: data[0].postopek,
        sestavine: data[0].sestavine
        }})
      this.onRouteChange("lookup")
    })
    .catch(err => console.log("Error with lookup"))
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
            lookupItem={this.lookupItem}
            />
          </Scroll>
        </div>
        )
        :
        // selected one recipe
        <ItemLookup izbranaJed={this.state.selectedDish} /> 
        )
    }
    </div>
  );
}   
}

export default App;
