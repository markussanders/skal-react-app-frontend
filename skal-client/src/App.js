import React from 'react';
import logo from './logo.svg';
import './App.css';
import LogInSignUp from './components/LogInSignUp';
import HomePage from './containers/HomePage';
import DrinkCardsContainer from './containers/DrinkCardsContainer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      loggedIn: false,
      username: '',
      password: '',
      currentUser: null,
    }
  }

  signup = (val) => {
    this.setState({
      username: val.username,
      loggedIn: true
    })
    this.fetchUser();
    // return this.state.drinks.length > 0 ? <HomePage drinks = {
    //   this.state.drinks
    // }
    // /> : null}
  }

  login = (val) => {
    this.setState({username: val.username, loggedIn: true})
    this.fetchUser();
        // return this.state.loggedIn ? <HomePage drinks = {
        //   this.state.drinks
        // }
        // /> : null}
  }

  handleLogInSignUp = () => {
    if (this.state.loggedIn) {
      return <HomePage drinks={this.state.drinks} currentUser={this.state.currentUser} />;
    } else {
      return <LogInSignUp login={this.login} signup={this.signup}/>
    }
  }

  fetchUser = () => {
    console.log(this.state.username, "this.state.username")
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
        })
      })
      .then(resp => resp.json())
      .then(currentUser => this.setState({
        currentUser
      }))
  }

  componentDidMount() {
    fetch('http://localhost:3000/drinks')
      .then(resp => resp.json())
      .then(drinks => {
        this.setState({drinks})
      });
  }

  renderDrinks = () => {
     return this.state.drinks.map(drink => {
       return (
         <div>
           <h2>{drink.name}</h2>
           <img src={drink.image_url} alt='Cocktail drink' />
           <p>{drink.description}</p>
           <p>{drink.ingredients.map(ingredient => ingredient + ' ' )}</p>
           <p>{drink.directions}</p>
           <p>Tools: {drink.tools}</p>
         </div>

       )
     })
  }


  render() {
    return (
      <div className="App">
        {/* {this.renderDrinks()} */}
        {this.handleLogInSignUp()}
        {/* {this.state.drinks.length > 0 ? <HomePage drinks={this.state.drinks} /> : null} */}
        {/* <DrinkCardsContainer drinks={this.state.drinks}/> */}
        {/* {<LogInSignUp login={this.login} signup={this.signup}/>} */}
      </div>
    );
  }



}


export default App;

//this is App
