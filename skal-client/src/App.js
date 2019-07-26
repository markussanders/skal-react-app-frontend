import React from 'react';
import logo from './logo.svg';
import './App.css';
import LogInSignUp from './components/LogInSignUp';
import HomePage from './containers/HomePage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/drinks')
      .then(resp => resp.json())
      .then(drinks => this.setState({drinks}))
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
        <HomePage />
      </div>
    );
  }



}


export default App;
