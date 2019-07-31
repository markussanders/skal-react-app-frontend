import React from 'react';
import Search from './Search';
import { shuffle } from 'lodash'
import DrinkCardsContainer from './DrinkCardsContainer';




class HomePage extends React.Component {
        constructor(props) {
            super(props);
            console.log(props)
            this.state = {
                searchedDrinks: [],
                randomDrinks: [],
                drinks: props.drinks
            };
        }

        componentDidMount() {
            this.generateRandomDrinks();
        }

        handleSearch = target => {
            let term = target.value;
            target.value = '';
            let searchedDrinks = this.state.drinks.filter(drink => drink.name.toLowerCase() === term.toLowerCase())

            this.setState({
                clickedCocktails: false,
                specificDrink: false,
                searchedDrinks: searchedDrinks,
            });
        }

        generateRandomDrinks = () => {
            let randomElements = shuffle(this.state.drinks).slice(0, 3)
            this.setState({
                randomDrinks: randomElements
            })
        }

        renderDrinkSpecs = drink => {
            this.setState({
                specificDrink: drink
            });
        }

    render() {
        return (
           <div>
              <div>
                <Search handleSearch={this.handleSearch} drinks={this.state.drinks}/>
                <DrinkCardsContainer  drinks={this.state.randomDrinks} />
              </div>
           </div>
        )
    }

}
export default HomePage
