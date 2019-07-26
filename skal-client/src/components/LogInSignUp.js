import React from 'react';



class LogInSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
    }

    handleLogIn = () =>  {
        return (
            <div>
                <h2 id="welcome-back">Welcome Back</h2>
                <form onSubmit={this.props.logIn}>
                    <label>Username<input className="input-form"></input></label>
                    <label>Password<input className="input-form"></input></label>
                    <button type="submit" value="Enter">Enter</button>
                </form>
            </div>
        )
    }

    handleSignUp() {
        return (
            <div>
                <h2 id="welcome-back">Welcome</h2>
                <form onSubmit={this.props.signUp}>
                    <label>Username<input className="input-form"></input></label>
                    <label>Password<input className="input-form"></input></label>
                    <label>Password Confirmation<input className="input-form"></input></label>
                    <button type="submit" value="Enter">Enter</button>
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
                         this.handleLogIn()
                         this.setState({clicked: true})
                    }}>Login</button>
                     / 
                    <button id="signup-button" onClick={() => this.handleSignUp}>Signup</button>
                </div>
            </div>
        )
    }

    foo() {
        if (this.state.clicked) {
            return this.handleLogIn()
        } else {
            return this.renderLogoButtons();
        }
    }

    render () {
        return (
            <div id="landing-page-main-div">
               {this.foo()}
            </div>
        )
    }
}


export default LogInSignUp;