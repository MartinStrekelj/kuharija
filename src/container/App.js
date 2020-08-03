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
  route: "itemLookup",
  input: "",
  user: {
    id: "",
    username: "",
    role: "",
  },
  selectedDish: {
    fid: "",
    imeJedi: "",
    tipJedi: "",
    sestavine: [],
    postopek: "",
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
        role: "",
      },
      selectedDish: {
        fid: "",
        imeJedi: "",
        tipJedi: "",
        sestavine: [],
        postopek: "",
      }
    }
  }

  logout = () => {
    this.setState(InitialState);
  }

  QueryDishes = () => {
    console.log("");
  }

  updateInput = (event) => {
    this.setState({input: event.target.value})
    this.QueryDishes();
  }

  loadUser = (data) => {
    this.setState({
      isLoggedIn: true,
      user: {
        id: 1,
        username: data.username,
        role: "admin"
      }
    })
    this.onRouteChange("home")
  }

  onRouteChange = (newRoute) =>{
    console.log(newRoute)
    this.setState({route: newRoute});
  }

  showFoodInfo = (foodId) => {
    console.log(foodId)
    // Fetch food info
    // Change route to itemLookup
    //  display food info
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
          <Register />
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
            showFoodInfo ={this.showFoodInfo}
            onRouteChange={this.onRouteChange}
            />
          </Scroll>
        </div>
        )
        :
        <ItemLookup />
        )
    }
    </div>
  );
}   
}

export default App;
