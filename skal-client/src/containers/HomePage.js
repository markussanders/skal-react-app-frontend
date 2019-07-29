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
        console.log('in profile');
        
    }

    handleCocktailsClick = () =>  {
        this.setState({clickedCocktails: true});
        this.setState({searchedDrinks: []})
        console.log("handleCocktailsClick")
        // return <DrinkCardsContainer drinks={this.props.drinks} />;
    }

    handleFavoritesClick = () => {
        console.log('in favorites')

    }

    handleSearch = target => {
       let term = target.value;
       target.value = '';
       let searchedDrinks = this.props.drinks.filter(drink => drink.name.toLowerCase() === term.toLowerCase())
       this.setState({ searchedDrinks });
       this.setState({clickedCocktails: false});
    }

    renderDrinkCardsContainer = () => {
        let clickedCocktails = this.state.clickedCocktails;
        let searchedDrinks = this.state.searchedDrinks;
        if (clickedCocktails) {
            return <DrinkCardsContainer drinks={this.props.drinks} />;
        } else if (searchedDrinks.length > 0) {
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
