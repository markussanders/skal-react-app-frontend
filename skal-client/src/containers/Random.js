import React from 'react';
import DrinkCard from '../components/DrinkCard';


class Random extends React.Component {

    constructor(props){
        super(props);
    }

    createDrinkCards = () => {
        return this.props.drinks.map(drink => {
            return <DrinkCard drink={drink} />
        });
    }

    render() {
        return (
            <div id="random-drinks-container">
                {this.createDrinkCards()}
            </div>
        )
    }
}

export default Random