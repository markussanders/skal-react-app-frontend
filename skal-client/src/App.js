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
      currentUser: {},
    }
  }

  signup = (credentials) => {
    this.setState({
      username: credentials.username,
      loggedIn: true
    })
    return this.state.loggedIn ? this.fetchUser(credentials) : null;
    // return this.state.drinks.length > 0 ? <HomePage drinks = {
    //   this.state.drinks
    // }
    // /> : null}
  }

  login = (credentials) => {
    this.setState({username: credentials.username, loggedIn: true});
    this.fetchUser(credentials.username);
  }

  handleLogInSignUp = () => {
    if (this.state.currentUser.id) {
      return <HomePage drinks={this.state.drinks} currentUser={this.state.currentUser} />;
    } else {
      return <LogInSignUp login={this.login} signup={this.signup}/>
    }
  }

  fetchUser = (username) => {
    // fetch('http://localhost:3000/users', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       username: username,
    //     })
    //   })
    //   .then(resp => resp.json())
    //   .then(user =>  {
    //     console.log('fetch user = ', user);
    //     this.setState({
    //     currentUser: user
    //   })
      fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(users => {
         let foundUser = users.filter(user => user.username === username)
         if (foundUser) {
           this.setState({currentUser: foundUser[0]})
         }
        })
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
