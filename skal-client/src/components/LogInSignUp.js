import React from 'react';



class LogInSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleLogIn = (event) =>  {
        event.preventDefault();
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

    handleSignUp(e) {
        e.preventDefault();
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
                    <button id="log-in-button" onClick={(event) => this.handleLogIn}>Login</button>
                     / 
                    <button id="signup-button" onClick={e => this.handleSignUp}>Signup</button>
                </div>
            </div>
        )
    }

    render () {
        return (
            <div id="landing-page-main-div">
               {this.renderLogoButtons()}
            </div>
        )
    }
}


export default LogInSignUp;