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


  renderDrinkCards(){
    return this.props.drinks.map(drink => {
      console.log('renderDrinkCards drink = ', drink);
      return <DrinkCard renderDrinkSpecs = {this.renderDrinkSpecs} drink = {drink} key = {drink.id}/> 
    })
  }

  render() {
    console.log('this.props.drinks', this.props.drinks)
    return(
      <div id="drink-cards-container">
      {this.state.clickedCocktail ? <DrinkSpecs drink={this.state.clickedCocktail}/> : this.renderDrinkCards()}
      </div>
    )
  }
}

export default DrinkCardsContainer;
