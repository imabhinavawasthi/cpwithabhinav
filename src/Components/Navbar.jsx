import React, { useState } from 'react';
import logo from '../Media/logog.png';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router';
import { db, auth } from '../Firebasecong/Firebasecong';
import { signOut } from 'firebase/auth';
import './Login2.css'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

const Navbar = (props) => {
    const navigate = useNavigate();
    const [infomess, setInfoMess] = useState('');
    const logoutuser = () => {
        signOut(auth).then(() => {
            navigate('./');
        }).catch((error) => {
            console.log(error.message);
        })
        setInfoMess('Logged Out Successfully!');
        setTimeout(() => {
            setInfoMess('');
        }, 4000)
    }

    const curruser = props.userdata;
    return (
        <div >
            {curruser != undefined ? <div>
                <div className="container-fluid nav_bg navbar-dark ">
                    <div className="row">
                        <div className="col-11 mx-auto">
                            <div>
                                <nav className="navbar navbar-expand-lg ">
                                    <div className="container-fluid">
                                        <NavLink className="navbar-brand" to="../"><img src={logo} alt="logo" width="30" height="30" class="d-inline-block align-text-top" /><span className='fw-bold ls-tight st3'><strong>  CrackDSA</strong>.<strong>com</strong></span></NavLink>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                    <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="../">Home</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink activeClassName="menu_active" className="nav-link " to="../courses">Courses</NavLink>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <NavLink activeClassName="menu_active" className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        CP Editorials
                                                    </NavLink>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <li><NavLink activeClassName="menu_active" className="dropdown-item" to="../youtube">Codeforces</NavLink></li>
                                                        <li><NavLink activeClassName="menu_active" className="dropdown-item" to="../youtube">Codechef</NavLink></li>
                                                        <li><hr className="dropdown-divider" /></li>
                                                        <li><NavLink activeClassName="menu_active" className="dropdown-item" to="../youtube">Youtube</NavLink></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink activeClassName="menu_active" className="nav-link " to="../about">About</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink activeClassName="menu_active" className="nav-link" to="../contact">Contact</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink activeClassName="menu_active" className="nav-link mr-2" to='../' onClick={logoutuser}>Logout</NavLink>
                                                </li>
                                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span class="navbar-toggler-icon"></span>
                                                </button>
                                                <div class="collapse navbar-collapse" id="navbar-list-4">
                                                    <ul class="navbar-nav">
                                                        <li class="nav-item dropdown">
                                                            <NavLink class="nav-link dropdown-toggle" to="/profile" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <img src={curruser.profilepic} width="40" height="40" class="rounded-circle" />
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </div> : <div className="container-fluid nav_bg navbar-dark">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div>
                            <nav className="navbar navbar-expand-lg ">
                                <div className="container-fluid">
                                    <NavLink className="navbar-brand" to="../"><img src={logo} alt="logo" width="30" height="30" class="d-inline-block align-text-top" /><span className='fw-bold ls-tight st3'><strong>  CrackDSA</strong>.<strong>com</strong></span></NavLink>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="../">Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink activeClassName="menu_active" className="nav-link" to="../courses">Courses</NavLink>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <NavLink activeClassName="menu_active" className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    CP Editorials
                                                </NavLink>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><NavLink activeClassName="menu_active" className="dropdown-item" to="../youtube">Codeforces</NavLink></li>
                                                    <li><NavLink activeClassName="menu_active" className="dropdown-item" to="../youtube">Codechef</NavLink></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><NavLink activeClassName="menu_active" className="dropdown-item" to="../youtube">Youtube</NavLink></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink activeClassName="menu_active" className="nav-link " to="../about">About</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink activeClassName="menu_active" className="nav-link mr-2 mb-2" to="../contact">Contact</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="btn btn-info navbar-btn mr-2 mb-2 remainw" to='/login'>Login <i class="fa fa-solid fa-arrow-right"></i></NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="btn btn-warning navbar-btn remainw" to='/signup'>Signup <i class="fa fa-regular fa-user-plus"></i></NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        {infomess && <>
                            <div className="containner alert alert-warning alert-dismissible fade show " role="alert">
                                <strong>{infomess}</strong>
                                <button onClick={() => { setInfoMess('') }} type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </>
                        }
                    </div>
                </div>
            </div>}

        </div>
    );
}

export default Navbar;