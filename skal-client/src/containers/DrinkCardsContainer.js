import React from 'react';
import DrinkCard from '../components/DrinkCard';

class DrinkCardsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      drinks: props.drinks,
    }
  }

  // componentDidMount() {
  //   this.setState({drinks: this.props.drinks});
  // }

  renderDrinkCards(){
    return this.state.drinks.map(drink => {
      return <DrinkCard drink={drink} key={drink.id} history={this.props.history}/> 
    })
  }

  render() {
    return(
      <div id="drink-cards-container">
        {this.state.drinks ? this.renderDrinkCards() : null}
      </div>
    )
  }
}

export default DrinkCardsContainer;
