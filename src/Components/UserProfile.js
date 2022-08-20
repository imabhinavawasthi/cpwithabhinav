import React from 'react'
import Navbar from './Navbar';

const UserProfile = (props) => {
  const curruser = props.userdata;
  return (
    <div>
    <Navbar userdata={curruser}/>
      {curruser!=undefined?<div className='container text-center'>
      
      <h1>Hello {curruser.name}</h1>
      <h3>{curruser.email}</h3>
      <img src={curruser.profilepic} class="img-fluid rounded mx-auto d-block" alt="profile pic"></img>
      </div>:
    <div>
      <div className='container text-center'>
        
        Please Login
        
        </div>
    </div>  
    }
    </div>
  )
}

export default UserProfile
