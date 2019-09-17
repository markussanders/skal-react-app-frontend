import React from 'react'
import Search from '../containers/Search';
import DrinkCardsContainer from '../containers/DrinkCardsContainer';

class UserInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      favorites: [],
      currentUser: JSON.parse(localStorage.getItem('user')),
      hasFavorites: false,
    }
  }

  handleSearch = (results, term) => {
      this.props.handleSearch(results, term);
      this.props.history.push(`/cocktails/${term}`);
  }

  componentDidMount() {
    if (this.state.currentUser) {
    console.log('this.state.currentUser.id =', this.state.currentUser.id);
    fetch(`http://localhost:3000/users/${this.state.currentUser.id}`)
      .then(resp => resp.json())
      .then(user => {
        if (user.favorites.length >= 1) {
          let drinkIds = user.favorites.map(fav => fav.drink_id);
          const faveDrinks = this.props.drinks.filter( drink => drinkIds.includes(drink.id))
          this.setState({favorites: faveDrinks, hasFavorites: true});
        } else {
          this.setState({hasFavorites: false})
        }
      })
    } else {
      this.props.history.push('/');
    }
  }


  render() {
    return(
      <div>
          <div>
              <ul id="profile-nav-bar">
                <li className="prof-option">
                  <button href='#' className="nav-bar-button" onClick={() => this.props.history.push('/edit-profile')}> Edit Profile </button>
                </li>
                <li className="prof-option"> <button href='#' className="nav-bar-button" onClick={this.handleViewBarCartClick}> View Bar Cart </button>
                </li>
              </ul>
              <div>
                <Search handleSearch={this.handleSearch} drinks={this.props.drinks}/>
              </div>
          </div>
          < div >
            {this.state.hasFavorites ?
              <div id="user-info-fav-drinks-cont">
                <h2 id="favorite-drinks-message">Your favorite drinks: </h2>
                <DrinkCardsContainer history={this.props.history} drinks={this.state.favorites}/>
              </div>
            : <h2 id="favorite-drinks-message">Your favorite drinks will appear here</h2>
              }
          </div>
      </div>
    )
  }
}

export default UserInfo;
