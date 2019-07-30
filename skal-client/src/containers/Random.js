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
        console.log('specific drink =', drink)
    }

    createDrinkCards = () => {
        if (!this.state.clickedCocktail){
            return this.props.drinks.map(drink => {
                return <DrinkCard drink={drink} renderDrinkSpecs={this.renderDrinkSpecs} />
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.clickedCocktail ?
                    <div>
                        <DrinkSpecs drink={this.state.clickedCocktail} />
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