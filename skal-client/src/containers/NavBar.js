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
          <ul className = "NavBar">
            <li> <a href='#'> Profile </a>
              <UserInfo/>
            </li>
            <li><a href='#'> Favorites </a>
              <Favorites/>
            </li>
            <li><a href='#'> Drink List </a>
              <DrinkCardsContainer/>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar;
