import React from 'react';
import DrinkCardsContainer from '../containers/DrinkCardsContainer';

class Favorites extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   drinks: props.drinks,
    // }
  }

  render() {
    return(
      <div>
        <DrinkCardsContainer drinks={this.props.drinks} />
      </div>
    )
  }
}

export default Favorites;
