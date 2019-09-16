import React from 'react'
import Search from '../containers/Search';
import DrinkCardsContainer from '../containers/DrinkCardsContainer';

class UserInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: this.props.currentUser,
    }
  }

  render() {
    return(
      <div>
          <div>
              <ul id = "profile-nav-bar" >
                <li className="list-item">
                <button href='#' className="nav-bar-button" onClick={() => this.props.history.push('/edit-profile')}> Edit Profile </button>
                </li>
                <li className="list-item"> <button href='#' className="nav-bar-button" onClick={this.handleViewBarCartClick}> View Bar Cart </button>
                </li>
              </ul>
              <div>
                <Search handleSearch={this.handleSearch} drinks={this.props.drinks}/>
              </div>
          </div>
          < div >
            {this.props.favorites ?
              <div>
                <h2 id="favorite-drinks-message">Your favorite drinks: </h2>
                <DrinkCardsContainer history={this.props.history} drinks={this.props.favorites}/>
              </div>
            : <h2 id="no-favorites-message">Your favorite drinks will appear here</h2>
              }
          </div>
      </div>
    )
  }
}

export default UserInfo;
//this is user
