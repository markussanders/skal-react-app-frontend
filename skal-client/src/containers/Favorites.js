import React from 'react';
import DrinkCardsContainer from '../containers/DrinkCardsContainer';

class Favorites extends React.Component {
  
  render() {
    return(
      <div>
        <DrinkCardsContainer drinks={this.props.drinks} />
      </div>
    )
  }
}

export default Favorites;
