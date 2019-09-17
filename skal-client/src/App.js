import React from 'react';
import './App.css';
import LogInSignUp from './components/LogInSignUp';
import HomePage from './containers/HomePage';
import { Route, Redirect } from 'react-router-dom';
import DrinkCardsContainer from './containers/DrinkCardsContainer';
import UserInfo from './components/UserInfo';
import NavBar from './containers/NavBar';
import DrinkSpecs from './components/DrinkSpecs';
import EditProfile from './components/EditProfile'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      searchedDrinks: [],
      foundDrink: '',
      favorites: '',
      term: '',
      username: '',
      password: '',
      currentUser: localStorage.getItem('user'),
      isLoggedIn: false,
    }
  }

  signup = (credentials) => {
    this.setState({
      username: credentials.username
    })
    return this.state.username ? this.fetchUser(credentials) : null;
  }

  login = (credentials) => {
    this.setState({username: credentials.username});
    this.fetchUser(credentials.username);
    return this.state.isLoggedIn;
  }

   setUser = (foundUser) => {

     if (foundUser) {
       this.setState({
         currentUser: foundUser[0],
         isLoggedIn: true
        });
        localStorage.setItem('user', JSON.stringify(foundUser[0]))
      } else {
        this.props.history.push('/login');
      }
   }


  fetchUser = (username) => {
    fetch('http://localhost:3000/users')
      .then(resp => resp.json())
      .then(users => {
        let foundUser = users.filter(user => user.username === username)
        if (foundUser) {
          this.setState({currentUser: foundUser[0], isLoggedIn: true})
        }
      })
    }

    createUser  = (credentials) => {
      console.log('HERE');
      if (credentials.password === credentials.passwordConfirmation) {
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: credentials.name,
            username: credentials.username,
            age: credentials.age,
            password: credentials.password,
            bar_cart: [],
          })
        })
          .then(resp => resp.json())
          .then(user => {
            this.setState({currentUser: user, isLoggedIn: true});
            return true;
          })
      } else {
        return false;
      }
      return true;
    }

    componentDidMount() {
      fetch('http://localhost:3000/drinks')
      .then(resp => resp.json())
      .then(drinks => {
        this.setState({drinks})
      })
    }

    handleSearch = (results, term)=> {
      this.setState({
        searchedDrinks: results,
        term: term
      });
    }

    retrieveDrink = id => {
      fetch('http://localhost:3000/drinks')
        .then(resp => resp.json())
        .then(drinks => {
          this.setState({foundDrink: drinks.find(drink => drink.id.toString() === id)})
        });
    }

    resetFoundDrinkState = () => {
      this.setState({
        foundDrink:''
      })
    }

    setFavorites = (favorites) => {
      this.setState({
        favorites: favorites
      })
    }

  render() {
    const { drinks, currentUser } = this.state;
    return (
      <div className="App">

      <Route exact path='/' render={(routeProps) => <Redirect to = "/login" />}/>
        <Route exact path='/login' render={(routeProps) => {
        return (
          <LogInSignUp {...routeProps} login={this.login} setUser={this.setUser} createUser={this.createUser} />
        ) }}
        />

        <Route exact path='/home' render={(routeProps) => {
          return (
            <div id="home-page">
              <NavBar {...routeProps} />
              <HomePage {...routeProps} currentUser={this.state.currentUser} setFavorites={this.setFavorites} drinks={drinks} handleSearch={this.handleSearch} currentUser={this.state.currentUser} />
            </div>
          ) }}
        />

        <Route exact path='/cocktails' render={(routeProps) => {
          return (
            <div>
              <NavBar {...routeProps} drinks={this.state.drinks}/>
              <DrinkCardsContainer {...routeProps} drinks={drinks} />
            </div>
          )
        }} />

        <Route exact path={`/cocktails/${this.state.term}`} render={(routeProps) => {
          return (
            <div>
              <NavBar {...routeProps} drinks={this.state.drinks}/>
              <DrinkCardsContainer {...routeProps} drinks={this.state.searchedDrinks} />
            </div>
          )
        }} />

        <Route exact path='/profile' render={(routeProps) => {
          return (
            <div id="user-info-page">
              <NavBar {...routeProps} drinks={this.state.drinks}/>
              <UserInfo {...routeProps} favorites={this.state.favorites} currentUser={this.state.currentUser} drinks={this.state.drinks} />
            </div>
          )
        }} />

        <Route exact path='/edit-profile' render={(routeProps) => {
          return (
            <div id="edit-profile-page">
              <NavBar {...routeProps} drinks={this.state.drinks}  />
              <EditProfile {...routeProps} currentUser={currentUser} setUser={this.setUser}/>
            </div>
          )
        }} />

        <Route exact path='/drinks/:id' render={(routeProps) => {
          console.log('state=', this.state);
          return (
            <div>
              <NavBar {...routeProps} drinks={this.state.drinks} resetFoundDrinkState={this.resetFoundDrinkState}/>
              {this.state.foundDrink ? <DrinkSpecs favorites={this.state.favorites} user={this.state.currentUser}{...routeProps} drink={this.state.foundDrink} /> : this.retrieveDrink(routeProps.match.params.id)}
            </div>
          )
        }} />
      </div>
    );
  }
}

export default App;
