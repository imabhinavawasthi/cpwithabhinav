import React from 'react'
import Navbar from './Navbar'

const Learn = (props) => {
  const curruser=props.userdata;
  return (
    <div>
      <Navbar userdata={curruser}/>
    </div>
  )
}

export default Learn
