import React from 'react';
import Comments from './Comments';

const DrinkSpecs = props => {
    console.log("IN DRINK SPECS");
    console.log(props);

    const drink = props.drink;
    const renderListItems = items => {
        return items.map(item => <li>{item}</li>)
    }

    console.log("THIS DRINK = ", drink)
    return (
        <div>
            <img id="drink-spec-img" src={drink.image_url} alt={drink.name}/>
            <h4 id="drink-spec-name">{drink.name}</h4>
            <p id="drink-spec-desc">{drink.description}</p>
            <p id="drink-spec-ingredients-cont" > Ingredients:
                <ul id="drink-spec-ingreditents">{renderListItems(drink.ingredients)}</ul>
            </p>
            <p id="drink-spec-tools-cont"> Tools:
                <ul id="drink-spec-tools">{renderListItems(drink.tools)}</ul>
            </p>
            <p id="drink-spect-directions">{drink.directions}</p>
            <h5>Favorited by: <span id="favorited-count">{drink.favorited_count}</span></h5>
            <div id="drink-spec-comments-cont">
                <Comments />
            </div>
        </div>
    )
}

export default DrinkSpecs