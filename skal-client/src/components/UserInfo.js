import React from 'react'
import Search from '../containers/Search';
import Favorites from '../containers/Favorites'
import DrinkCardsContainer from '../containers/DrinkCardsContainer';

class UserInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      favorites: [],
    }
  }
  componentDidMount() {
    console.log(this.props)
    fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
      .then(resp => resp.json())
      .then(user => {
        console.log('user', user)
        if (user.favorites){

          let drinkIds = user.favorites.map(fav => fav.drink_id);
          const faveDrinks = this.props.drinks.filter( drink => drinkIds.includes(drink.id))
          console.log('favedrink =', faveDrinks)
          this.setState({favorites: faveDrinks});
        }

      })
  }

  // fetchFavoritesDrinks = (userFavorites) => {
  //   let favoriteDrinks;
  //   let drinkIds = userFavorites.map(fav => fav.drink_id);
  //   return fetch('http://localhost:3000/drinks')
  //     .then(resp => resp.json())
  //     .then(drinks => {
  //       favoriteDrinks = drinks.filter(drink => drinkIds.includes(drink.id));
  //       return favoriteDrinks;
  //     })
  // }


  fetchFavorites = () => {

  };

  render() {
    console.log(this.state.favorites)
    return(
      <div>
          <div>
              <ul id = "profile-nav-bar" >
                <li>
                <button href='#' className="nav-bar-button" onClick={() => this.props.history.push('/edit-profile')}> Edit Profile </button>
                </li>
                <li> <button href='#' className="nav-bar-button" onClick={this.handleViewBarCartClick}> View Bar Cart </button>
                </li>
              </ul>
              <div>
                <Search handleSearch={this.handleSearch} drinks={this.props.drinks}/>
              </div>
          </div>
          <h4> Here are your favorite drinks: </h4>
          < div >
             <DrinkCardsContainer drinks={this.state.favorites}
/>
            {/* <Favorites /> */}
          </div>
      </div>
    )
  }
}

export default UserInfo;
//this is user
