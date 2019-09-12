import React from 'react';
import Search from './Search';
import { shuffle } from 'lodash'
import DrinkCardsContainer from './DrinkCardsContainer';




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

        handleSearch = (results, term) => {
            this.props.handleSearch(results, term)
            this.props.history.push(`/cocktails/${term}`);
        }

    render() {
        console.log('this.state.searchedDrinks', this.state.searchedDrinks);
        console.log('THIS.PROPS in homepage', this.props)
        return (
           <div>
              <div>
                <Search history={this.props.history} handleSearch={this.handleSearch} drinks={this.state.drinks} currentUser={this.props.currentUser} />
                <DrinkCardsContainer drinks={this.state.randomDrinks} />
              </div>
           </div>
        )
    }

}
export default HomePage
