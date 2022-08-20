import React from 'react';
import con from '../Media/construct.gif';
import { NavLink } from "react-router-dom";
import Common from './Common';
import Navbar from './Navbar';

const Youtube = (props) => {
    const curruser=props.userdata;
    return (
        <>
        <Navbar userdata={curruser}/>
            <Common name="Youtube" />
        </>
    );
}

export default Youtube;