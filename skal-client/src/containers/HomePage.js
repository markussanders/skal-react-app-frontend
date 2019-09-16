import React from 'react';
import Search from './Search';
import { shuffle } from 'lodash'
import DrinkCardsContainer from './DrinkCardsContainer';




class HomePage extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                searchedDrinks: [],
                randomDrinks: this.generateRandomDrinks(),
                drinks: props.drinks
            };
        }

        // componentDidMount() {
        //     this.generateRandomDrinks();
        // }

        generateRandomDrinks = () => {
            // let randomElements = shuffle(this.state.drinks).slice(0, 3)
            // this.setState({
            //     randomDrinks: randomElements
            // })
            return shuffle(this.props.drinks).slice(0, 3);
        }

        renderDrinkSpecs = drink => {
            this.setState({
                specificDrink: drink
            });
        }

        handleSearch = (results, term) => {
            this.props.handleSearch(results, term)
            this.props.history.push(`/cocktails/${term}`);
        }

    render() {
        let randomDrinks = this.state.randomDrinks;
        return (
           <div>
              <div>
                <Search history={this.props.history} handleSearch={this.handleSearch} drinks={this.state.drinks} currentUser={this.props.currentUser} />
                <h2 id="featured-prompt">Featured cocktails:</h2>
                <div id="random-drinks-container">
                    <DrinkCardsContainer drinks={randomDrinks} history={this.props.history} />
                </div>
              </div>
           </div>
        )
    }

}
export default HomePage
