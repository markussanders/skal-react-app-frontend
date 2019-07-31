import React from 'react';
import NavBar from './NavBar';
import Search from './Search';
import Random from './Random';
import DrinkCardsContainer from './DrinkCardsContainer';
import DrinkSpecs from '../components/DrinkSpecs';
import UserInfo from '../components/UserInfo';



class HomePage extends React.Component {
        constructor(props) {
            super(props);
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

        // handleHomePage = () => {
        //     // this.setState({
        //     //     clickedCocktails: false,
        //     //     clickedProfile: false, 
        //     //     searchedDrinks: []
        //     // });

        //     this.generateRandomDrinks()
        //     this.renderDrinkCardsContainer()
        // }

        generateRandomDrinks = () => {
            const arr = this.state.drinks;
            let randomElements = [];
            for (let i = 0; i < 3; i++) {
                let randomElement = arr[Math.floor(Math.random() * arr.length)];
                if (!randomElements.includes(randomElement)) {
                    randomElements.push(randomElement);
                } else if (randomElements.includes(randomElement)) {
                    i--;
                }
            }
            this.setState({
                randomDrinks: randomElements
            })
        }

        renderDrinkSpecs = drink => {
            this.setState({
                specificDrink: drink
            });
        }


        // renderDrinkCardsContainer = () => {
        //     let clickedCocktails = this.state.clickedCocktails;
        //     let searchedDrinks = this.state.searchedDrinks;
        //     if (clickedCocktails) {
        //         return <DrinkCardsContainer drinks = {
        //             this.props.drinks
        //         }
        //         />;
        //     } else if (searchedDrinks.length > 0) {
        //         return <DrinkCardsContainer drinks = {
        //             this.state.searchedDrinks
        //         }
        //         />;
        //     } else if (this.state.specificDrink) {
        //         return <DrinkSpecs drink = {
        //             this.state.specificDrink
        //         }
        //         renderDrinkSpecs = {
        //             this.renderDrinkSpecs
        //         }
        //         />
        //     } else if (this.state.clickedProfile === true) {
        //         return <UserInfo / > ;
        //     }
        //     return <Random drinks = {
        //         this.state.randomDrinks
        //     }
        //     />;
        // }

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
