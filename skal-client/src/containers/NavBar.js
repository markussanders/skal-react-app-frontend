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
            <li> <button href='#' className="nav-bar-button" > Profile </button>
              <UserInfo/>
            </li>
            <li> <button href='#' className="nav-bar-button"> Favorites </button>
                <Favorites/>
            </li>
            <li> <button href='#' className="nav-bar-button"> Cocktails </button>
              <DrinkCardsContainer/>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar;
