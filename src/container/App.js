import React, { Component } from 'react';
import Navigation from "../components/Navigation/Navigation"
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import ItemLookup from '../components/ItemLookup/ItemLookup';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "tachyons";
import 'bulma/css/bulma.css'
import HomePage from '../components/HomePage/HomePage';


const InitialState = {
  isLoggedIn: false,
  input: "",
  user: {
    id: "",
    username: "",
  },
  selectedId: ""
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      LoggedIn: false,
      user: {
        id: "",
        username: "",
      },
    }
  }

  logout = () => {
    this.setState(InitialState);
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
    <Router>
      <div className="app">
        <Navigation
          onRouteChange ={this.onRouteChange} 
          userId={this.state.user.id}
          logout={this.logout}/>
        <Switch>
          <Route path="/signin">
            <div>
              <SignIn loadUser={this.loadUser} />
            </div> 
          </Route>
          <Route path="/register">
            <div>
              <Register onRouteChange={this.onRouteChange} />
            </div>
          </Route>
          <Route path="/food/:id">
            <ItemLookup izbranaJed={this.state.selectedDish} />  
          </Route>
          <Route path="/">
            {this.state.loggedIn ? 
              <Redirect to="/signin" /> 
              : 
              <HomePage username = {this.state.user.username} /> 
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}   
}

export default App;
