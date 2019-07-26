import React from 'react';


class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <input id="search-bar-input" placeholder="Search for a cocktail"></input>
                    <button type="submit" onClick={() => this.handleClick}>Search</button>
                </form>
            </div>
        )
    }
}

export default Search