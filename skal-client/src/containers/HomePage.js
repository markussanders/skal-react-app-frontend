import React from 'react';
import NavBar from './NavBar';
import Search from './Search';
import Random from './Random';
import DrinkCardsContainer from './DrinkCardsContainer';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedDrinks: [],
            clickedCocktails: false,
            randomDrinks: [],
        };
    }

    componentDidMount() {
        this.generateRandomDrinks();
    }


    handleProfileClick = () => {
        console.log('in profile');
        
    }

    handleCocktailsClick = () =>  {
        this.setState({clickedCocktails: true});
        this.setState({searchedDrinks: []})
        console.log("handleCocktailsClick")
        return <DrinkCardsContainer drinks={this.props.drinks} />;
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

    generateRandomDrinks = () => {
        const arr = this.props.drinks;
        let randomElements = [];
        for (let i = 0; i < 3; i++) {
            let randomElement = arr[Math.floor(Math.random() * arr.length)];
            console.log(randomElement)
            if (!randomElements.includes(randomElement)) {
                randomElements.push(randomElement);
            } else if (randomElements.includes(randomElement)) {
                i--;
            }
        }        
        this.setState({randomDrinks: randomElements})
    }


    renderDrinkCardsContainer = () => {
        let clickedCocktails = this.state.clickedCocktails;
        let searchedDrinks = this.state.searchedDrinks;
        if (clickedCocktails) {
            return <DrinkCardsContainer drinks={this.props.drinks} />;
        } else if (searchedDrinks.length > 0) {
            return <DrinkCardsContainer drinks={this.state.searchedDrinks} />;
        } 
        return <Random drinks = {this.state.randomDrinks} />;
    }
    
    render() {
        console.log('hp', this.props)
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
