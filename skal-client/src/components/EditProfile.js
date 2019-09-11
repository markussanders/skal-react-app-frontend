


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

handleSubmitInfo=()=>{
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
    })
  }
}

   render() {
     return(
       <div>

           <div>
             Would you like to edit your User Information? Please submit any changes.
           <form name="User Information" >
               <label >Name<input className="input-form" type="text" onChange={e => this.setState({name: e.target.value})}></input></label>
               <label >Age<input className="input-form" type="text" onChange={e => this.setState({age: e.target.value})} ></input> </label>
               <label >Username<input className="input-form" type="text" onChange={e => this.setState({username: e.target.value})}></input></label>
               <label >Password<input className="input-form" type="password" onChange={e => this.setState({password: e.target.value})}></input></label>
               <label >Password Confirmation<input className="input-form" type="password" onChange={e => this.setState({passwordConfirmation: e.target.value})}></input></label>
               <button type="submit" value="Enter" onClick={() => this.handleSubmitInfo()}>Submit</button>
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
