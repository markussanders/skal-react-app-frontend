import React from 'react';
import DrinkSpecs from './DrinkSpecs';


const DrinkCard = props =>  {
    const {drink} = props;
    return (
        <div className="drink-card" onClick={() => {
            props.renderDrinkSpecs(drink);
        }} >
            <img className="drink-card-img" src={drink.image_url} alt={drink.name}/>
            <h4 className="drink-card-name">{drink.name}</h4>
            <p className="drink-card-desc">{drink.description}</p>
        </div>
    )

}


export default DrinkCard;