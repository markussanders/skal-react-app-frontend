import React from 'react';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
    }
    
    render() {
        return (
            <div id="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        id="search-bar-input" 
                        placeholder="Search for a cocktail" 
                        onChange={(e) => {
                            this.setState({term: e.target})
                        }}
                    ></input>
                    <button type="submit" onClick={() => this.props.handleSearch(this.state.term)}>Search</button>
                </form>
            </div>
        )
    }
}

export default Search