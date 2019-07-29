import React from 'react';
import DrinkCard from '../components/DrinkCard';

class DrinkCardsContainer extends React.Component {
  constructor(props){
    super(props)
  }

  renderDrinkCards() {
    return this.props.drinks.map(drink => <DrinkCard drink={drink}/>)
  }

  render() {
    return(
      <div>
      {console.log('in drink cards container')}        
      {this.renderDrinkCards()}
      </div>
    )
  }
}

export default DrinkCardsContainer;
