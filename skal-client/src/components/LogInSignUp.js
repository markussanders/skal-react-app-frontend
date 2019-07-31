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
            < div id = "login-signup-container" >
                <h2 id="welcome-back">Welcome Back</h2>
                <form 
                    id="login-signup-form" 
                    onSubmit={(e) =>  {
                        e.preventDefault()
                        const credentials = {
                            username: this.state.username,
                            password: this.state.password,
                        }
                        if (this.props.login(credentials)) {
                            this.props.history.push('/home');
                        }
                    }}
                    >
                    <label className="input">Username<input className="input-form" type="text" onChange={e => this.setState({username: e.target.value})}></input></label>
                    <label className="input">Password<input className="input-form" type="password" onChange={e => this.setState({password: e.target.value})}></input></label>
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
            <div id="login-signup-container">
                <h2 id="welcome-back">Welcome</h2>
                <form id="login-signup-form" onSubmit={(e) => {
                    const credentials = {
                        username: this.state.username,
                        password: this.state.password,
                    }
                    this.props.signup(credentials);
                }}>
                    <label className="input">Username<input className="input-form" type="text" onChange={e => this.setState({username: e.target.value})}></input></label>
                    <label className="input">Password<input className="input-form" type="password" onChange={e => this.setState({password: e.target.value})}></input></label>
                    <label className="input">Password Confirmation<input className="input-form" type="password"></input></label>
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