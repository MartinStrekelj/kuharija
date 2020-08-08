import React, { Component } from 'react';
import Navigation from "../components/Navigation/Navigation"
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import ItemLookup from '../components/ItemLookup/ItemLookup';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import "tachyons";
import 'bulma/css/bulma.css'
import HomePage from '../components/HomePage/HomePage';
import ProtectedPage from '../components/ProtectedPage/ProtectedPage';
import AddFood from '../components/AddFood/AddFood';




class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
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
              <ProtectedPage loggedIn={this.state.loggedIn}>   
                <ItemLookup loggedIn={this.state.loggedIn}/>
              </ProtectedPage>  
            </Route>
            <Route path="/addFood">
              <ProtectedPage loggedIn={this.state.loggedIn}>
                <AddFood />
              </ProtectedPage>
            </Route>
            <Route path="/">
              <ProtectedPage loggedIn={this.state.loggedIn}>
                <HomePage username = {this.state.user.username} />
              </ProtectedPage> 
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }   
}

export default App;
