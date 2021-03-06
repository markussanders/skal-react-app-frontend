import React from 'react';

const DrinkCard = props =>  {
    const {drink} = props;
    console.log('DRINK =' , drink)

    return (
        <div className="drink-card" onClick={() => {
            props.history.push(`/drinks/${drink.id}`)
        }} >
            <img className="drink-card-img" src={drink.image_url} alt={drink.name}/>
            <div className="drink-card-info">
                <h4 className="drink-card-name">{drink.name}</h4>
                <p className="drink-card-desc">{drink.description}</p>
            </div>
        </div>
    )

}


export default DrinkCard;
