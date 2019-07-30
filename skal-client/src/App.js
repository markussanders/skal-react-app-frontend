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
    }
  }

  signup = (val) => {
    console.log("in signup", val)
  }

  login = (val) => {
    console.log('in login', val)
  }

  componentDidMount() {
    fetch('http://localhost:3000/drinks')
      .then(resp => resp.json())
      .then(drinks => {
        this.setState({drinks})
      })
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
        {this.state.drinks.length > 0 ? <HomePage drinks={this.state.drinks} /> : null}
        {/* <DrinkCardsContainer drinks={this.state.drinks}/> */}
        {/* {<LogInSignUp login={this.login} signup={this.signup}/>} */}
      </div>
    );
  }



}


export default App;

//this is App
