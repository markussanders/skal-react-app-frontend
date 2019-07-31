import React from 'react';
import Comment from './Comment';

class DrinkSpecs extends React.Component {
    constructor(props) {
        super(props);
        console.log('props =', props);
        this.state = {
            drinkComments: [],
        }
    }


    renderListItems = items => {
        return items.map(item => <li>{item}</li>)
    }

    fetchComments = () => {
        console.log("fetching")
        fetch('http://localhost:3000/comments')
            .then(resp => resp.json())
            .then(comments => {
                const drinkComments = comments.filter(comment => comment.drink_id === this.props.drinkid )
                console.log('drink comments = ', drinkComments)
                this.setState({drinkComments: drinkComments});
            })
    }

    renderComments = drinkComments => {
        return drinkComments.map(comment => <Comment key={comment.id} comment={comment} />);
    }

    componentWillMount() {
        this.fetchComments();
    }
    
    render () {
        const {drink} = this.props;
        console.log(drink);
        return (
            <div id="drink-spec-page">
                <img id="drink-spec-img" src={drink.image_url} alt={drink.name}/>
                <div id="drink-info">
                    <h4 id="drink-spec-name">{drink.name}</h4>
                <p id="drink-spec-desc">{drink.description}</p>
                <div id="drink-spec-ingredients-cont" > Ingredients:
                    <ul id="drink-spec-ingreditents">{this.renderListItems(drink.ingredients)}</ul></div>
                <div id="drink-spec-tools-cont"> Tools:
                    <ul id="drink-spec-tools">{this.renderListItems(drink.tools)}</ul>
                </div>
                <p id="drink-spec-directions">{drink.directions}</p>
                <br />
                <h5 id="favorites-cont">Favorited by: <span id="favorited-count">{drink.favorited_count}</span></h5>
                < br / >
                <div id="drink-spec-comments-cont"> Comments: 
                {console.log(this.state)}
                    {(this.state.drinkComments.map(comment => <Comment key={comment.id} comment={comment} />) || " None yet! Be the first!" )}
                </div>
                </div>
            </div>
        )
    }
}

export default DrinkSpecs