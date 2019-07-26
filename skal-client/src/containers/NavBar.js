import React from 'react'
import './App.css';
import UserInfo from '../components/UserInfo'
import Favorites from '../components/Favorites'
import DrinkIndex from '../components/DrinkIndex'

class NavBar extends React.Component {
  constructor(props){
    super(props)
  }

  render()
    return(){
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
              <DrinkIndex>
            </li>
          </ul>
        </nav>
      </div>
    }
}

export default NavBar;
