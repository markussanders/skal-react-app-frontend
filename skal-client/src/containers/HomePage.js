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



    render() {
        return (
            <div>
                <NavBar handleProfileClick={this.handleProfileClick} handleFavoritesClick={this.handleFavoritesClick} handleCocktailsClick={this.handleCocktailsClick}/>
            </div>
        )
    }

}
export default HomePage
