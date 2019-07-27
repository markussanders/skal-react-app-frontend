import React from 'react';
import NavBar from './NavBar';
import Search from './Search';
import Random from './Random';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedDrinks: [],
        };
    }


    handleProfileClick = () => {
        
    }

    handleCocktailsClick = () => {

    }

    handleFavoritesClick = () => {

    }

    handleSearch = target => {
       let term = target.value;
       target.value = '';
       let searchedDrinks = this.props.drinks.filter(drink => drink.name.toLowerCase() === term.toLowerCase())
       console.log(searchedDrinks)
       this.setState({ searchedDrinks })
    }
    
    render() {
        return (
           <div>
              <div>
                <NavBar handleProfileClick={this.handleProfileClick} handleFavoritesClick={this.handleFavoritesClick} handleCocktailsClick={this.handleCocktailsClick}/>
              </div>
              <div>
                  <Search handleSearch={this.handleSearch} drinks={this.props.drinks}/>
              </div>
              <div>
                  <Random />
              </div>
           </div>
        )
    }

}
export default HomePage
