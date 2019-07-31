import React from 'react';
import DrinkCard from '../components/DrinkCard';
import DrinkSpecs from '../components/DrinkSpecs';


class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedCocktail: false,
        }
    }

    renderDrinkSpecs = drink => {
        this.setState({clickedCocktail: drink})
    }

    createDrinkCards = () => {
        if (!this.state.clickedCocktail){
            return this.props.drinks.map(drink => {
                return <DrinkCard drink={drink} key={drink.id} renderDrinkSpecs={this.renderDrinkSpecs} />
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.clickedCocktail ?
                    <div>
                        <DrinkSpecs drink={this.state.clickedCocktail} key={this.state.clickedCocktail.id} />
                    </div>
                :
                    <div id="random-drinks-container">
                        {this.createDrinkCards()}
                    </div>
                }
            </div>
        )
    }
}

export default Random