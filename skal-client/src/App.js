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
      username: '',
      password: '',
      currentUser: {},
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
       this.setState({
         currentUser: foundUser[0],
         isLoggedIn: true
       })
   }


  fetchUser = (username) => {
    fetch('http://localhost:3000/users')
      .then(resp => resp.json())
      .then(users => {
              console.log(2)
        let foundUser = users.filter(user => user.username === username)
        if (foundUser) {
          this.setState({currentUser: foundUser[0], isLoggedIn: true})
        }
      })
    }

    createUser  = (credentials) => {
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
    }

      componentDidMount() {
        fetch('http://localhost:3000/drinks')
        .then(resp => resp.json())
        .then(drinks => {
          this.setState({drinks})
        });
      }



  render() {
    const { drinks, currentUser } = this.state
     console.log(this.state.currentUser)
    return (
      <div className="App">


      <Route exact path='/' render={(routeProps) => {
        return <Redirect to = "/login" / >
        }
        }
        />
        <Route exact path='/login' render={(routeProps) => {
        return <LogInSignUp {...routeProps} login={this.login} setUser={this.setUser} createUser={this.createUser} /> }}
        />

        <Route exact path='/home' render={(routeProps) => {
          console.log(this.state.currentUser)
          return (
            <div id="home-page">
              <video autoPlay muted loop id="fizz-video">
                <source src="./media/fizz.mp4" type="video/mp4" />
              </video>
              <NavBar {...routeProps} />
              <HomePage {...routeProps} drinks={drinks} currentUser={currentUser} />
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



        <Route exact path='/profile' render={(routeProps) => {
          return (
            <div>
              <NavBar {...routeProps} drinks={this.state.drinks}/>
              <UserInfo {...routeProps} currentUser={currentUser} drinks={this.state.drinks} />
            </div>
          )
        }} />

        <Route exact path='/edit-profile' render={(routeProps) => {
          return (
            <div>
              <NavBar {...routeProps} drinks={this.state.drinks}/>
              <EditProfile currentUser={currentUser}/>
            </div>
          )
        }} />

        <Route exact path='/drinks/:id' render={(routeProps) => {
          const foundDrink = this.state.drinks.find(drink => drink.id === routeProps.match.params.id);
          console.log(foundDrink)
          return (
            <div>
              <NavBar {...routeProps} drinks={this.state.drinks}/>
              <DrinkSpecs drink={foundDrink} />
            </div>
          )

        }} />

      </div>
    );
  }
}

export default App;
