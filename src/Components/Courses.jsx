import React from 'react';
import con from '../Media/construct.gif';
import { NavLink } from "react-router-dom";
import Card from './Card';
import CoursePage from './Secondary/CoursePage';
import './Login2.css'
import Navbar from './Navbar';
import ProductSlide from './Cards/ProductSlide';

const Courses = (props) => {
    const curruser=props.userdata;
    return (
        <div>
        <Navbar userdata={curruser}/>
            <div className='mt-5 container'>
            <ProductSlide/>
            <div className='row'>
                <h1 className=" display-5 fw-bold ls-tight st2" >
                    Amazing
                    <span className='st3'> DSA Content</span> For You!
                </h1>
                <p className="mb-4 opacity-70 st4" >
                    We are here for you to revise and learn DSA. Master competitive programming concepts.
                </p>
            </div>
            <div className='row mt-3'>
                <div className="col-lg-6">

                    <Card />
                </div>
                <div className="col-lg-6">

                    <Card />
                </div>
            </div>
            <div className='row mt-3'>
                <div className="col-lg-6">

                    <Card />
                </div>
                <div className="col-lg-6">

                    <Card />
                </div>
            </div>
            <div className='row mt-3'>
                <div className="col-lg-6">

                    <Card />
                </div>
                <div className="col-lg-6">

                    <Card />
                </div>
            </div>
            <div className='row mt-3'>
                <div className="col-lg-6">

                    <Card />
                </div>
                <div className="col-lg-6">

                    <Card />
                </div>
            </div>
            <div className='row mt-3'>
                <div className="col-lg-6">

                    <Card />
                </div>
                <div className="col-lg-6">

                    <Card />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Courses;