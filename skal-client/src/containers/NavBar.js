import React from 'react'
import '../App.css';
import UserInfo from '../components/UserInfo'
import Favorites from './Favorites'
import DrinkCardsContainer from './DrinkCardsContainer'

class NavBar extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
        <nav>
          <ul id = "nav-bar" >
<<<<<<< HEAD
            <li> <button href='#' className="nav-bar-button" onClick ={this.props.handleProfileClick}> Profile </button>
=======
            <li> <button href='#' className="nav-bar-button" > Profile </button>
>>>>>>> b286348e24de780e89f17288566621873e2ef04a
              <UserInfo/>
            </li>
            <li> <button href='#' className="nav-bar-button" onClick ={this.props.handleFavoritesClick}> Favorites </button>
                <Favorites/>
            </li>
            <li> <button href='#' className="nav-bar-button" onClick ={this.props.handleCocktailsClick}> Cocktails </button>
              <DrinkCardsContainer/>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar;
