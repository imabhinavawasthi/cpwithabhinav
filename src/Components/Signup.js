import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import { storage, db } from '../Firebasecong/Firebasecong'
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import logo from '../Media/logo.jpg';
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';

const Signup = (props) => {
    const curruser=props.userdata;
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [profilepic, setProfilepic] = useState();
    const [sucessmess, setSuccesmess] = useState('');
    const [errormess, setErrormess] = useState('');
    const [infomess, setInfomess] = useState('');
    const [vermess, setVerMess] = useState('a');

    const nameset = (e) => {
        setName(e.target.value);
    }
    const emailset = (e) => {
        setEmail(e.target.value);
    }
    const passwordset = (e) => {
        setPassword(e.target.value);
    }
    const profilepicset = (e) => {
        let selectedimage = e.target.files[0];

        if (selectedimage) {
            setProfilepic(selectedimage);
        }
        else {
            setErrormess('Please select profile pic');
            setTimeout(
                () => {
                    setErrormess('');
                }, 2000
            )
        }
    }
    const auth = getAuth();
    const navigate = useNavigate();
    const submitclick = (e) => {
        e.preventDefault();
        setInfomess('Registering New User...');
        console.log("hello");
        if (!name) {
            setInfomess('');
            setErrormess('Please enter Name');
            setTimeout(
                () => {
                    setErrormess('');
                }, 2000
            )
        }
        else if (!profilepic) {
            setInfomess('');
            setErrormess('Please select profile pic');
            setTimeout(
                () => {
                    setErrormess('');
                }, 2000
            )
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredentials) => {

                    const user = userCredentials.user;
                    const storageRef = ref(storage, `profile-images/${Date.now()}`);
                    // const storageRef =storage().ref(`profile-images`);
                    console.log("ok");
                    uploadBytes(storageRef, profilepic).then(() => {
                        getDownloadURL(storageRef).then((url) => {
                            addDoc(collection(db, 'users'), {
                                name, email, password, profilepic: url, uid: user.uid
                            }).then(() => {
                                setInfomess('');
                                setSuccesmess('User Registered!');

                                const auth = getAuth();

                                sendEmailVerification(user);
                                let msg = 'An email verification link has been sent to ' + user.email;
                                setVerMess('');
                                setInfomess(msg);
                                setSuccesmess('');
                                // setTimeout(
                                //     () => {
                                //         setErrormess('');
                                //         navigate('/login');
                                //     }, 4000)
                            }).catch((error) => {
                                setInfomess('');
                                setErrormess('error');
                                setTimeout(
                                    () => {
                                        setErrormess('');
                                    }, 2000
                                )
                            })

                        })
                    })
                })
                .catch((error) => {
                    console.log(error.message);
                    if (error.message == 'Firebase: Error (auth/email-already-in-use).') { setInfomess(''); setErrormess('User Already Exists! Please Login'); }
                    else if (error.message == 'Firebase: Error (auth/missing-email).') { setInfomess(''); setErrormess('Please Enter Email'); }
                    else if (error.message == 'Firebase: Error (auth/admin-restricted-operation).') { setInfomess(''); setErrormess('Please enter all the fields'); }
                    else if (error.message == 'Firebase: Error (auth/invalid-email).') { setInfomess(''); setErrormess('Invalid Email'); }
                    else if (error.message == 'Firebase: Error (auth/internal-error).') { setInfomess(''); setErrormess('Please Enter Password'); }
                    else if (error.message == 'Firebase: Error (auth/network-request-failed).') { setInfomess(''); setErrormess('Login Failed, Please check internet connection.'); }
                    else if (error.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).') { setInfomess(''); setErrormess('Password should be at least 6 characters'); }
                    setTimeout(
                        () => {
                            setErrormess('');
                        }, 4000)
                })

        }
    }
    return (
        <div>
        <Navbar userdata={curruser}/>
            {/* <!-- Section: Design Block --> */}
            <section className="background-radial-gradient overflow-hidden">

                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-lg-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0 st1">
                            <h1 className="my-5 display-5 fw-bold ls-tight st2" >
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
                                    {!vermess&&<div>
                                        {infomess && <>
                                                <div className='alert alert-info'>{infomess}</div>
                                            </>}
                                            <div>
                                            <p class="small fw-bold mt-2 pt-1 mb-0">Verify your email and <NavLink to='/login'
                                                class="link-danger textdecorationnone">Login Now!</NavLink></p>
                                            </div>
                                    </div>}
                                        {vermess&&<div>
                                            {sucessmess && <>
                                                <div className='alert alert-success'>{sucessmess}</div>
                                            </>}
                                            {errormess && <>
                                                <div className='alert alert-danger'>{errormess}</div>
                                            </>}
                                            {infomess && <>
                                                <div className='alert alert-info'>{infomess}</div>
                                            </>}
                                            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                            {/* <div className="row">
                                            <div className="col mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1" className="form-control" placeholder='Name'/>
                                                    <label className="form-label" for="form3Example1">Name</label>
                                                </div>
                                            </div>
                                        </div> */}

                                            {/* <!-- Name input --> */}
                                            <div className="form-outline mb-4">
                                                <input onChange={nameset} type="text" id="form3Example1" className="form-control" placeholder='Name' />
                                                {/* <label className="form-label" for="form3Example3">Email address</label> */}
                                            </div>

                                            {/* <!-- Email input --> */}
                                            <div className="form-outline mb-4">
                                                <input onChange={emailset} type="email" id="form3Example3" className="form-control" placeholder='Email' />
                                                {/* <label className="form-label" for="form3Example3">Email address</label> */}
                                            </div>
                                            <div className='mb-4'>
                                                <input onChange={profilepicset} accept="image/png, image/jpg, image/gif, image/jpeg" class="form-control" type="file" id="formFile" required />
                                                <p className='small fw-bold pt-1 mb-0'>*Upload Profile Pic</p>
                                            </div>

                                            {/* <!-- Password input --> */}
                                            <div className="form-outline mb-4">
                                                <input onChange={passwordset} type="password" id="form3Example4" className="form-control" placeholder='Password' />
                                                {/* <label className="form-label" for="form3Example4">Password</label> */}
                                            </div>

                                            {/* <!-- Submit button --> */}
                                            <button onClick={submitclick} type="submit" className="btn btn-primary btn-block mb-4">
                                                Sign Up
                                            </button>

                                            {/* <!-- Register buttons --> */}
                                            <div className="text-center">
                                                <p>or sign up with:</p>
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
                                            <p class="small fw-bold mt-2 pt-1 mb-0">Already a user? <NavLink to='/login'
                                                class="link-danger textdecorationnone">Login</NavLink></p>
                                        </div>
                                        </div>}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup;
