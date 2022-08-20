import React, { useState, useEffect } from 'react';
import anilogo from '../Media/coding1.png';
import { NavLink } from "react-router-dom";
import { auth, db } from '../Firebasecong/Firebasecong'
import { doc, collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import './Login2.css'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar'
import CourseCard from './Secondary/CourseCard';
import ProductSlide from './Cards/ProductSlide';

const Home = (props) => {
    const curruser = props.userdata;
    return (
        <div>
        <Navbar userdata={curruser}/>
            {curruser != undefined ? <div>
                <section id="header" className=" align-items-center " >

                    <div className="container-fluid nav_bg">
                        <div className='row'>
                            <div className='col-10 mx-auto'>
                                {/* <div id="radius-shape-3" className="position-absolute rounded-circle shadow-5-strong"></div> */}
                                <div class="alert alert-primary" role="alert">
                                    Hello <strong>{curruser.name}</strong>
                                    , Welcome. Explore <NavLink to="../courses" ><strong>Our Courses</strong></NavLink>. Happy Coding!
                                </div>
                                <div className='row'>

                                    <div className='col-md-8 pt-0 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column animated'>
                                        <h1 className='my-3 display-5 fw-bold ls-tight st2'>Learn <strong className='st3'><i class="fa fa-solid fa-laptop-code"></i> Data Structures </strong>And <strong className='st3'>Algorithms</strong></h1>
                                        <h2 className='my-3 display-7 fw-bold ls-tight st2'>
                                        <strong className='st3'><i class="fa fa-solid fa-code"></i></strong> Master <strong className='st3'>Competitive Programming </strong>Concepts
                                        </h2>
                                        <div className='mt-3'>

                                            <NavLink className=" display-7 fw-bold ls-tight btn btn-outline-info navbar-btn mr-2 mb-2" to="../courses">Get Started   <i class="fa fa-solid fa-terminal"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 order-2 order-lg-1 header-img mt-4'>
                                        {/* <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div> */}
                                        <img src={anilogo} className="img-fluid animated" alt="logo_animated" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div> :
                <div>
                    <section id="header" className="align-items-center " >
                        <div className="container-fluid nav_bg ">

                            <div className='row'>
                                <div className='col-10 mx-auto'>

                                    <div className='row'>
                                        {/* <div id="radius-shape-3" className="position-absolute rounded-circle shadow-5-strong"></div> */}

                                        <div className='col-md-8 pt-0 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column animated'>
                                            <h1 className='my-3 display-5 fw-bold ls-tight st2'>Learn <strong className='st3'><i class="fa fa-solid fa-laptop-code"></i> Data Structures </strong>And <strong className='st3'>Algorithms</strong></h1>
                                            <h2 className='my-3 display-7 fw-bold ls-tight st2'>
                                            <strong className='st3'><i class="fa fa-solid fa-code"></i></strong> Master <strong className='st3'>Competitive Programming </strong>Concepts
                                            </h2>
                                            <div className='mt-3'>
                                            <NavLink className="  display-7 fw-bold ls-tight btn btn-outline-info navbar-btn" to='/login'>Login <i class="fa fa-solid fa-arrow-right"></i></NavLink>
                                            </div>
                                            
                                        </div>
                                        <div className='col-lg-4 order-2 order-lg-1 header-img mt-4'>
                                            {/* <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div> */}
                                            <img src={anilogo} className="img-fluid animated" alt="logo_animated" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <CourseCard/>
                    <ProductSlide/>
                </div>}
        </div>
    );
}

export default Home;