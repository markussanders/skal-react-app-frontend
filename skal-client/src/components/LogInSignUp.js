import React from 'react';



class LogInSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: '',
            name: '',
            age: '',
            username: '',
            password: '',
            passwordConfirmation: '',
        }
    }


    renderLogInForm = () =>  {
        return (
            <div id = "login-signup-container" >
                <h2 id="welcome-back">Welcome Back</h2>
                <form 
                    id="login-signup-form" 
                    onSubmit={(e) =>  {
                        e.preventDefault()
                        const credentials = {
                            username: this.state.username,
                            password: this.state.password,
                        }
                        fetch('http://localhost:3000/users')
                            .then(resp => resp.json())
                            .then(users => {
                                console.log(2)
                                let foundUser = users.filter(user => user.username === this.state.username)
                                if (foundUser) {
                                    this.props.setUser(foundUser)
                                    this.props.history.push('/home');
 
                                }
                            })

             
                    }}
                    >
                    <div className="username-div">
                        <label className="input">Username</label>
                        <input className="input-form" type="text" onChange={e => this.setState({username: e.target.value})}></input>
                    </div>
                    <div className="password-div">
                        <label className="input">Password</label>
                        <input className="input-form" type="password" onChange={e => this.setState({password: e.target.value})}></input>
                    </div>
                    <div className="buttons-div" id="log-in-buttons">
                        <button className="log-in-button" type="submit" value="Enter">Enter</button>
                        <button className="sign-up-button" onClick={(e) => {
                            this.setState({clicked: 'signup'});
                        }}>New here?</button>
                    </div>
                </form>
            </div>
        )
    }

    renderSignUpForm() {
        return (
            <div id="login-signup-container">
                <h2 id="welcome-back">Welcome</h2>
                <form id="login-signup-form" onSubmit={(e) => {
                    e.preventDefault();
                    const credentials = {
                        username: this.state.username,
                        password: this.state.password,
                        passwordConfirmation: this.state.passwordConfirmation,
                        age: this.state.age,
                        name: this.state.name,
                    }
                    console.log(this.state);
                    if (this.props.createUser(credentials)) {
                        this.props.history.push('/home');
                    }
                }}>
                    <div id="name-age-div">
                        <label className="input">Name</label>
                        <input className="input-form" type="text" onChange={e => this.setState({name: e.target.value})}></input><br/>
                        <label className="input">Age</label>
                        <input className="input-form" id="age-input" type="text" maxLength="3" size="3" onChange={e => this.setState({age: e.target.value})}></input>
                    </div>
                    <div className="username-div">
                        <label className="input">Username</label>
                        <input className="input-form" type="text" onChange={e => this.setState({username: e.target.value})}></input>
                    </div>
                    <div className="password-div">
                        <label className="input">Password</label>
                        <input className="input-form" type="password" onChange={e => this.setState({password: e.target.value})}></input>
                        <label className="input">Confirmation</label>
                        <input className="input-form" type="password" onChange={e => this.setState({passwordConfirmation: e.target.value})}></input>
                    </div>
                    <div className="buttons-div" id="sign-up-buttons">
                        <button className="sign-up-button"type="submit" value="Enter">Enter</button> 
                        <button className="log-in-button" onClick={(e) => {
                            this.setState({clicked: 'login'});
                        }}>Already a member?</button>
                    </div>
                </form>
            </div>
        )
    }

    renderLogoButtons = () => {
        return (
            <div id="landing-page-logo-container">
                <h2 id="Logo">SKÅL</h2>
                <div id="login-signup-button-container">
                    <button id="log-in-button" onClick={() =>  {
                         this.renderLogInForm();
                         this.setState({clicked: 'login'})
                    }}>Login</button>
                    <span id="divider"> / </span>
                    <button id="signup-button" onClick={() => {
                        this.renderSignUpForm();
                        this.setState({clicked: 'signup'})
                    }}>Signup</button>
                </div>
            </div>
        )
    }

    logInSignUp() {
        if (this.state.clicked === 'login') {
            return this.renderLogInForm();
        } else if (this.state.clicked === 'signup') {
            return this.renderSignUpForm();
        } else {
            return this.renderLogoButtons();
        }
    }

    render () {
        return (
            <div id="landing-page-main-div">
               {this.logInSignUp()}
            </div>
        )
    }
}


export default LogInSignUp;