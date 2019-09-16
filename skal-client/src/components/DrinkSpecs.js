import React from 'react';
import Comment from './Comment';

class DrinkSpecs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinkComments: [],
            currentUser: JSON.parse(localStorage.getItem('user')),
        }
    }
    renderListItems = items => {
        return items.map(item => <li className="list-item">{item}</li>)
    }

    // fetchComments = () => {
    //     fetch('http://localhost:3000/comments')
    //         .then(resp => resp.json())
    //         .then(comments => {
    //             const drinkComments = comments.filter(comment => comment.drink_id === this.props.drinkid )
    //             this.setState({drinkComments: drinkComments});
    //         })
    // }

    renderComments = drinkComments => {
        return drinkComments.map(comment => <Comment key={comment.id} comment={comment} />);
    }

    // componentWillMount() {
    //     this.fetchComments();
    // }

    favoriteDrink = () => {
      if (this.state.currentUser) {
        fetch(`http://localhost:3000/favorites`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            drink_id: this.props.drink.id,
            user_id: this.state.currentUser.id,
          })
        })
      } else {
        this.props.history.push('/');
      }
    }

    render () {
        const {drink} = this.props;
        return (
            <div id="drink-spec-page">
                <img id="drink-spec-img" src={drink.image_url} alt={drink.name}/>
                <div id="drink-info">
                    <h4 id="drink-spec-name">{drink.name}</h4>
                    <p id="drink-spec-desc">{drink.description}</p>
                    <div id="drink-spec-ingredients-cont" > Ingredients:
                      <ul id="drink-spec-ingreditents">{this.renderListItems(drink.ingredients)}</ul>
                    </div>
                    <div id="drink-spec-tools-cont"> Tools:
                      <ul id="drink-spec-tools">{this.renderListItems(drink.tools)}</ul>
                    </div>
                    <div>
                      <h4 id="drink-spec-directions">Directions: </h4>
                      <p id="drink-spec-directions-content">{drink.directions}</p>
                    </div>
                    <br/>
                    <div id="drink-spec-favorites-cont">
                      <h5 id="favorites-cont">Favorited by: <span id="favorited-count">{drink.favorited_count}</span></h5>
                      <button id="fav-btn" onClick={this.favoriteDrink}> Favorite </button>
                    </div>
                    <br/>
                    {/* <div id="drink-spec-comments-cont"> Comments:
                      {(this.state.drinkComments.map(comment => <Comment key={comment.id} comment={comment} />) || " None yet! Be the first!" )}
                    </div> */}
                </div>
            </div>
        )
    }
}

export default DrinkSpecs
