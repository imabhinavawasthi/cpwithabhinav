import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { signInWithEmailAndPassword, getAuth, emailVerified, sendPasswordResetEmail } from 'firebase/auth';
import logo from '../Media/logog.gif';
import { NavLink } from "react-router-dom";
import './Login2.css'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';

const Login = (props) => {
    const curruser=props.userdata;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [sucessmess, setSuccesmess] = useState('');
    const [errormess, setErrormess] = useState('');
    const auth = getAuth();
    const emailset = (e) => {
        setEmail(e.target.value);
    }
    const passwordset = (e) => {
        setPassword(e.target.value);
    }
    const navigate = useNavigate();
    const submitclick = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            const user = userCredentials.user;
            setSuccesmess('Logged in successfully');
            setTimeout(() => {
                navigate('/');
                window.location.reload();
            }, 2000);

        }).catch((error) => {
            console.log(error.message);
            if (error.message == 'Firebase: Error (auth/missing-email).')
                setErrormess('Enter Email');
            else if (error.message == 'Firebase: Error (auth/internal-error).')
                setErrormess('Enter Password');
            else if (error.message == 'Firebase: Error (auth/wrong-password).')
                setErrormess('Wrong Password');
            else if (error.message == 'Firebase: Error (auth/user-not-found).')
                setErrormess('User not found');
            else if (error.message == 'Firebase: Error (auth/invalid-email).')
                setErrormess('Invalid Email');
            else if (error.message == 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).')
                setErrormess('Access to this account has been temporarily disabled due to many failed login attempts. Try again later.');
            setTimeout(
                () => {
                    setErrormess('');
                }, 4000)
        })
    }
    return (
        <div>
        <Navbar userdata={curruser}/>
            {/* <!-- Section: Design Block --> */}
            <section className="background-radial-gradient overflow-hidden">

                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-lg-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0 st1">
                            <h1 className="my-lg-5 display-5 fw-bold ls-tight st2" >
                                Welcome To<br />
                                <span className='st3'>crackDSA</span>
                            </h1>
                            <p className="mb-4 opacity-70 st4" >
                                We are here for you to revise and learn DSA. Master competitive programming concepts.
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form>
                                        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                        {/* <div className="row">
                                            <div className="col mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1" className="form-control" placeholder='Name'/>
                                                    <label className="form-label" for="form3Example1">Name</label>
                                                </div>
                                            </div>
                                        </div> */}
                                        {sucessmess && <>
                                            <div className='alert alert-success'>{sucessmess}</div>
                                        </>}
                                        {errormess && <>
                                            <div className='alert alert-danger'>{errormess}</div>
                                        </>}
                                        {/* <!-- Email input --> */}
                                        <div className="form-outline mb-4">
                                            <input onChange={emailset} type="email" id="form3Example3" className="form-control" placeholder='Email' />
                                            {/* <label className="form-label" for="form3Example3">Email address</label> */}
                                        </div>

                                        {/* <!-- Password input --> */}
                                        <div className="form-outline mb-4">
                                            <input onChange={passwordset} type="password" id="form3Example4" className="form-control" placeholder='Password' />
                                            {/* <label className="form-label" for="form3Example4">Password</label> */}
                                        </div>

                                        {/* <!-- Submit button --> */}
                                        <button onClick={submitclick} type="submit" className="btn btn-primary btn-block mb-2">
                                            Login
                                        </button>
                                        <div className='text-center'>
                                            <p class="small fw-bold mt-0 pt-1 mb-2">Forgot Password? <NavLink  to='/login/forgotpassword'
                                                class="link-danger textdecorationnone">Reset</NavLink></p>
                                        </div>
                                        {/* <!-- Register buttons --> */}
                                        <div className="text-center">
                                            <p>or log in with:</p>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-google"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-twitter"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-github"></i>
                                            </button>
                                        </div>
                                        <div className='text-center'>
                                            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink to='/signup'
                                                class="link-danger textdecorationnone">Register</NavLink></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Section: Design Block --> */}
        </div>
    );
}

export default Login;
