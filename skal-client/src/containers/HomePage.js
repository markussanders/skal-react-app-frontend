import React from 'react';
import NavBar from './NavBar';
import Search from './Search';
import Random from './Random';
import DrinkCardsContainer from './DrinkCardsContainer';
import UserInfo from '../components/UserInfo';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedDrinks: [],
            clickedCocktails: false,
            randomDrinks: [],
            clickedProfile: false
        };
    }

    componentDidMount() {
        this.generateRandomDrinks();
    }


    handleProfileClick = () => {
        this.setState({clickedProfile: true});
        this.setState({clickedCocktails: false});
        this.setState({searchedDrinks: []})
        console.log('in profile');
        return <UserInfo drinks={this.props.drinks}/>

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

    handleHomePage = () => {
      this.setState({clickedCocktails: false});
      this.setState({searchedDrinks: []})
      this.setState({clickedProfile: false});
      this.generateRandomDrinks()
      this.renderDrinkCardsContainer()
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
        else if (this.state.clickedProfile === true) {
            return <UserInfo />;
        }
        return <Random drinks = {this.state.randomDrinks} />;
    }


    render() {
        console.log('hp', this.props)
        return (
           <div>
              <div>
                <NavBar handleProfileClick={this.handleProfileClick} handleFavoritesClick={this.handleFavoritesClick} handleCocktailsClick={this.handleCocktailsClick} handleHomePage={this.handleHomePage}/>
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
