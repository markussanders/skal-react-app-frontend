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
  renderFavorites(){
    return this.props.drinks.map(drink => {
    return < DrinkCard renderDrinkSpecs = {
          this.renderDrinkSpecs
        }
        drink = {
          drink
        }
        key = {
          drink.id
        }
        />
      })
  }

  render() {
    return(
      <div id="drink-cards-container">
      {this.state.clickedCocktail ? <DrinkSpecs drink={this.state.clickedCocktail}/> : this.renderFavorites()}
      </div>
    )
  }
}

export default DrinkCardsContainer;
