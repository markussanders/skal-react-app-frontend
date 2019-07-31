 import React from 'react'
 import Search from '../containers/Search';
 import Favorites from '../containers/Favorites'
 import DrinkCardsContainer from '../containers/DrinkCardsContainer';

 class EditProfile extends React.Component {
   constructor(props){
     super(props)
     this.state = {
       name: "",
       age: "",
       username: "",
       password: "",
       passwordConfirmation: "",
     }
   }

handleSubmitInfo=(e)=>{
  console.log(this.props)
  e.preventDefault()
  if (this.state.password === this.state.passwordConfirmation) {
    fetch(`http://localhost:3000/users/${this.props.currentUser.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        username: this.state.username,
        age: this.state.age,
        password: this.state.password,
      })
    }).then(resp => resp.json())
    .then(user => {
      this.props.setUser(user)
      this.props.history.push('/profile')
    })
  }
}

  handleDeleteUser = () => {
    fetch(`http://localhost:3000/users/${this.props.currentUser.id}`, {
      method: 'DELETE'
    })
  }

   render() {
     console.log(this.state)
     return(
       <div>
           <div>
             Would you like to edit your User Information? Please submit any changes.
           <form name="User Information"  onSubmit={(e) => this.handleSubmitInfo(e)} >
               <label >Name<input className="input-form" type="text" onChange={e => this.setState({name: e.target.value})}></input></label>
               <label >Age<input className="input-form" type="text" onChange={e => this.setState({age: e.target.value})} ></input> </label>
               <label >Username<input className="input-form" type="text" onChange={e => this.setState({username: e.target.value})}></input></label>
               <label >Password<input className="input-form" type="password" onChange={e => this.setState({password: e.target.value})}></input></label>
               <label >Password Confirmation<input className="input-form" type="password" onChange={e => this.setState({passwordConfirmation: e.target.value})}></input></label>
               <button type="submit" value="Enter" >Submit</button>
           </form>
           <button onClick={this.handleDeleteUser}> Delete My Account </button>
           </div>
       </div>
     )
   }
 }

 export default EditProfile;
