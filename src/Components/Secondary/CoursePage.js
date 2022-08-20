import React from 'react'
import SideBar from './Sidebar'
import Navbar from '../Navbar'

const CoursePage = (props) => {
  const curruser=props.userdata;
  return (
    <div>
    <Navbar userdata={curruser}/>
      <SideBar/>
    </div>
  )
}


export default CoursePage;
