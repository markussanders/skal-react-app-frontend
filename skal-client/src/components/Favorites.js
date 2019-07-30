import React from 'react';
import DrinkCard from './DrinkCard'

class Favorites extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            Here are your favorite cocktails:
            {console.log("favorite drinks")}

            </div>
        )
    }
}

export default Favorites;
