import React, { Component } from 'react';
import Navigation from "../components/Navigation/Navigation"
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import ItemLookup from '../components/ItemLookup/ItemLookup';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "tachyons";
import 'bulma/css/bulma.css'
import HomePage from '../components/HomePage/HomePage';



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

  loadUser = (data) => {
    this.setState({
      loggedIn: true,
      user: {
        id: data.id,
        username: data.username,
      }
    })
  }

  render(){ 
    return(
      <Router>
        <div className="app">
          <Navigation 
            userId={this.state.user.id}
            logout={this.logout}/>
          <Switch>
            <Route path="/signin">
            {
              this.state.loggedIn ? 
              <Redirect to="/"/> 
              : 
              <SignIn loadUser={this.loadUser} />
            }    
            </Route>
            <Route path="/register">
            {
              this.state.loggedIn ? 
              <Redirect to="/"/> 
              : 
              <Register onRouteChange={this.onRouteChange} />
            } 
            </Route>
            <Route path="/food/:id">
              <ItemLookup />  
            </Route>
            <Route path="/">
              {
              this.state.loggedIn ? 
              <HomePage username = {this.state.user.username} /> 
              : 
              <Redirect to="/signin"/> 
              }
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }   
}

export default App;
