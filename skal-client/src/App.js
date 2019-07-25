import React from 'react';
import logo from './logo.svg';
import './App.css';


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
           <p>{drink.description.replace(/\\/g, "")}</p>
           <p>{drink.ingredients.replace(/\\/g, "").replace(/\[/g, "")}</p>
           <p>{drink.directions.replace(/\\/g, "")}</p>
           <p>Tools: {drink.tools.replace(/\\/g, "")}</p>
         </div>

       )
     })
  }


  render() {
    return (
      <div className="App">
        {this.renderDrinks()}
      </div>
    );
  }



}


export default App;
