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
            drinks: props.drinks,
            currentUser: JSON.stringify(localStorage.getItem('user')),
        };
    }

    componentDidMount() {
        if (this.state.currentUser) {
            fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
            .then(resp => resp.json())
            .then(user => {
                if (user.favorites) {
                    let drinkIds = user.favorites.map(fav => fav.drink_id);
                    const faveDrinks = this.props.drinks.filter( drink => drinkIds.includes(drink.id))
                    this.setState({favorites: faveDrinks});
                    this.props.setFavorites(faveDrinks)
                }
            })
        } else {
            this.props.history.push('/');
        }
    }

    generateRandomDrinks = () => {
        return shuffle(this.props.drinks).slice(0, 3);
    }

    renderDrinkSpecs = drink => {
        this.setState({
            specificDrink: drink
        });
    }

    handleSearch = (results, term) => {
        this.props.handleSearch(results, term);
        this.props.history.push(`/cocktails/${term}`);
    }

    render() {
        let randomDrinks = this.state.randomDrinks;
        return (
           <div>
               {this.state.currentUser ? 
                <div>
                    <Search history={this.props.history} handleSearch={this.handleSearch} drinks={this.state.drinks} currentUser={this.props.currentUser} />
                    <DrinkCardsContainer drinks={randomDrinks} history={this.props.history} />
                </div>
             : this.props.history.push('/') }
           </div>
        )
    }

}
export default HomePage
