import React from 'react';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            currentUser: JSON.parse(localStorage.getItem('user')),
        }
    }

    handleUserInput = () => {

    }
    
    handleSubmit = e => {
        e.preventDefault();
        console.log('term = ', this.state.term);
        fetch('http://localhost:3000/searches', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                term: this.state.term,
                user_id: this.state.currentUser.id
            })
        }).then(resp => resp.json()).then(results => {
            this.props.handleSearch(results, this.state.term);
        })
    }
    
    render() {
        return (
            <div id="search-bar">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input 
                        id="search-bar-input" 
                        placeholder="Search for a cocktail" 
                        onChange={(e) => {
                            this.setState({term: e.target.value})
                        }}
                    ></input>
                    <button id="search-button" type="submit" 
                    //     onClick={(e) => {
                    //     e.preventDefault();
                    //     this.props.handleSearch(this.state.term)
                    // }}
                    >Search</button>
                </form>
            </div>
        )
    }
}

export default Search