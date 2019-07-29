import React from 'react';
import NavBar from './NavBar';
import Search from './Search';
import Random from './Random';
import DrinkCard from '../components/DrinkCard';
import DrinkCardsContainer from './DrinkCardsContainer';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedDrinks: [],
            clickedCocktails: false,
        };
    }


    handleProfileClick = () => {
        
    }

    handleCocktailsClick = () => {
        this.setState({clickedCocktails: true});
    }

    handleFavoritesClick = () => {

    }

    handleSearch = target => {
       let term = target.value;
       target.value = '';
       let searchedDrinks = this.props.drinks.filter(drink => drink.name.toLowerCase() === term.toLowerCase())
       this.setState({ searchedDrinks })
    }

    renderDrinkCardsContainer = () => {
        let clickedCocktails = this.state.clickedCocktails;
        let searchedDrinks = this.state.searchedDrinks;
        if (clickedCocktails) {
            this.setState({searchedDrinks: []})
            return <DrinkCardsContainer drinks={this.props.drinks} />;
        } else if (searchedDrinks.length > 0) {
            this.setState({clickedCocktails: false});
            return  <DrinkCardsContainer drinks={this.state.searchedDrinks} />;
        }
        return <Random />;
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
                {this.renderDrinkCardsContainer()}
              </div> 
           </div>
        )
    }

}
export default HomePage
