import React from 'react'
import Search from '../containers/Search';
import Favorites from './Favorites'

class UserInfo extends React.Component {
  constructor(props){
    super(props)
  }


  handleEditProfileClick(){

  }

  handleViewBarCartClick(){

  }

  render() {
    return(
      <div>
          <div>
              <ul id = "profile-nav-bar" >
                <li>
                <button href='#' className="nav-bar-button" onClick={this.handleEditProfileClick}> Edit Profile </button>
                </li>
                <li> <button href='#' className="nav-bar-button" onClick={this.handleViewBarCartClick}> View Bar Cart </button>
                </li>
              </ul>
              <div>
                <Search handleSearch={this.handleSearch} drinks={this.props.drinks}/>
              </div>
          </div>
          <div>
            {/* <Favorites /> */}
          </div>
      </div>
    )
  }
}

export default UserInfo;
//this is user
