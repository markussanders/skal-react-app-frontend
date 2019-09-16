 import React from 'react'

 class EditProfile extends React.Component {
   constructor(props){
     super(props)
     this.state = {
       name: "",
       age: "",
       username: "",
       password: "",
       passwordConfirmation: "",
       currentUser: JSON.parse(localStorage.getItem('user')),
     }
   }

  handleSubmitInfo=()=>{
    if (this.state.password === this.state.passwordConfirmation) {
      fetch(`http://localhost:3000/users/${this.props.currentUser.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: (this.state.name || this.state.currentUser.name),
          username: (this.state.username || this.state.currentUser.username),
          age: (this.state.age || this.state.currentUser.age),
          password: (this.state.password || this.state.currentUser.password),
        })
      })
    }
  }
  
   render() {
     console.log('state = ', this.state.currentUser);

     return(
       <div id="edit-profile-content">
          <div id="edit-profile-text">
            <h2 id="account-prompt">Edit Your Account</h2>
            <ul id="current-user-info">
              {this.state.currentUser ? 
                <div>
                  <li id="current-info-prompt">Your current information:</li>
                  <li>{`Name: ${this.state.currentUser.name}`}</li>
                  <li>{`Username: ${this.state.currentUser.username}`}</li>
                  <li>{`Age: ${this.state.currentUser.age}`}</li> 
                </div>
              : this.props.history.push('/')}
            </ul>
          </div>
          <div>
            <h2 id="changes-prompt">Please submit any changes.</h2>
            <form id="edit-profile-form" >
                <label className="edit-input-label">Name<input className="edit-input" type="text" onChange={e => this.setState({name: e.target.value})}></input></label>
                <label className="edit-input-label">Age<input className="edit-input" type="text" onChange={e => this.setState({age: e.target.value})} ></input> </label>
                <label className="edit-input-label">Username<input className="edit-input" type="text" onChange={e => this.setState({username: e.target.value})}></input></label>
                <label className="edit-input-label">Password<input className="edit-input" type="password" onChange={e => this.setState({password: e.target.value})}></input></label>
                <label className="edit-input-label">Password Confirmation<input className="edit-input" type="password" onChange={e => this.setState({passwordConfirmation: e.target.value})}></input></label>
                <button className="log-in-button" type="submit" value="Enter" onClick={() => this.handleSubmitInfo()}>Submit Changes</button>
            </form>
          </div>
       </div>
     )
   }
 }

 export default EditProfile;

 //
 // <form name="User Information" action="/action_page.php" method="post">
 //     <label className="input">Name<input className="input-form" type="text"  ></input></label>
 //     <label className="input">Age<input className="input-form" type="text" ></input> </label>
 //     <label className="input">Username<input className="input-form" type="text" ></input></label>
 //     <label className="input">Password<input className="input-form" type="password" ></input></label>
 //     <label className="input">Password Confirmation<input className="input-form" type="password"></input></label>
 //     <button type="submit" value="Enter">Enter</button>
 // </form>

 // onChange={e => this.setState({name: e.target.value})}
// onChange={e => this.setState({age: e.target.value})}>
// onChange={e => this.setState({username: e.target.value})}
// onChange={e => this.setState({password: e.target.value})}
//  onChange={e => this.setState({passwordConfirmation: e.target.value})}
