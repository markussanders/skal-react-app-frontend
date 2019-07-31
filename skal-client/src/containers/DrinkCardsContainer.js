import React from 'react';
import DrinkCard from '../components/DrinkCard';
import DrinkSpecs from '../components/DrinkSpecs';

class DrinkCardsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clickedCocktail: false,
    }
  }
  
  renderDrinkSpecs = drink => {
    this.setState({clickedCocktail: drink})
  }

  renderDrinkCards() {
    this.setState({clickedCocktail: false})
  }

  render() {
    return(
      <div id="drink-cards-container">
      {this.state.clickedCocktail ? <DrinkSpecs drink={this.state.clickedCocktail}/> : this.props.drinks.map(drink => <DrinkCard renderDrinkSpecs={this.renderDrinkSpecs} drink={drink} key={drink.id} />)}
      </div>
    )
  }
}

export default DrinkCardsContainer;
