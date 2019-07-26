import React from 'react';
import NavBar from './NavBar';
import Search from './Search';
import Random from './Random';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    handleProfileClick = () => {

    }

    handleCocktailsClick = () => {

    }

    handleFavoritesClick = () => {

    }

    handleSearch = term => {

    }
    
    render() {
        return (
           <div>
              <div>
                <NavBar handleProfileClick={this.handleProfileClick} handleFavoritesClick={this.handleFavoritesClick} handleCocktailsClick={this.handleCocktailsClick}/>
              </div>
              <div>
                  <Search handleSearch={this.handleSearch}/>
              </div>
              <div>
                  <Random />
              </div>
           </div>
        )
    }

}
export default HomePage
