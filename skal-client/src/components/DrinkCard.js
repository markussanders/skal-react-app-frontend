import React from 'react';
import DrinkSpecs from './DrinkSpecs';
import { Link } from 'react-router-dom'; 


const DrinkCard = props =>  {
    const {drink} = props;
    console.log(props)
    return (
        <div className="drink-card" onClick={() => {
            props.renderDrinkSpecs(drink);
        }} >
           <Link to={`drinks/${drink.id}`}>
            <img className="drink-card-img" src={drink.image_url} alt={drink.name}/>
           </Link>
            <h4 className="drink-card-name">{drink.name}</h4>
            <p className="drink-card-desc">{drink.description}</p>
        </div>
    )

}


export default DrinkCard;