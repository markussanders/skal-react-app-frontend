import React from 'react';



class LogInSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: '',
            username: '',
            password: '',
        }
    }


    renderLogInForm = () =>  {
        return (
            <div>
                <h2 id="welcome-back">Welcome Back</h2>
                <form 
                    id="login-signup-form" 
                    onSubmit={(e) =>  {
                        e.preventDefault()
                        console.log(e.target.value)
                        this.props.login(e.target.value);
                    }}
                    value={() => console.log('value of form')}>
                    <label>Username<input className="input-form"></input></label>
                    <label>Password<input className="input-form" type="password"></input></label>
                    <button type="submit" value="Enter">Enter</button>
                     <button onClick={(e) => {
                        this.setState({clicked: 'signup'});
                    }}>New here?</button>
                </form>
            </div>
        )
    }

    renderSignUpForm() {
        return (
            <div>
                <h2 id="welcome-back">Welcome</h2>
                <form id="login-signup-form" onSubmit={(e) => {
                    console.log(this.props)
                    this.props.signup(e.target.value);
                }}>
                    <label>Username<input className="input-form"></input></label>
                    <label>Password<input className="input-form" type="password"></input></label>
                    <label>Password Confirmation<input className="input-form" type="password"></input></label>
                    <button type="submit" value="Enter" onClick={e => e.preventDefault()}>Enter</button>
                    <button onClick={(e) => {
                        this.setState({clicked: 'login'});
                    }}>Already a member?</button>
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
                     / 
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