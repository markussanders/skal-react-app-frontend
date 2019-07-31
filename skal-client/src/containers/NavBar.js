import React from 'react'
import { Route, Link } from 'react-router-dom';
import '../App.css';

class NavBar extends React.Component {

  render() {
    return(

      <div>
        <nav>
          <ul id = "nav-bar" >
            <li> <Link to="/home"><button className="nav-bar-button"> Home </button></Link>
            </li>
           <li> <Link to="/profile"><button className="nav-bar-button"> Profile </button></Link>
            </li>
            <li> <Link to="/cocktails"><button className="nav-bar-button"> Cocktails </button></Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar;
