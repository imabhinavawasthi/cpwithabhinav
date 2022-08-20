import React,{ useState } from 'react'
import { useNavigate } from 'react-router';
import { getAuth,sendPasswordResetEmail } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
const ForgotPassword = () => {
    const [email, setEmail] = useState();
    const [sucessmess, setSuccesmess] = useState('');
    const [errormess, setErrormess] = useState('');
    const auth = getAuth();
    const emailset = (e) => {
        setEmail(e.target.value);
    }
    const navigate = useNavigate();
    const submitclick = (e) => {
        e.preventDefault();
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // console.log("Password reset email sent!");
    let msg='Password reset email sent to '+email;
    setSuccesmess(msg);
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(errorMessage);
    if(errorMessage=='Firebase: Error (auth/invalid-email).')
    setErrormess('Invalid Email');
    else if(errorMessage=='Firebase: Error (auth/user-not-found).')
    setErrormess('User not found');
    setTimeout(() => {
        setErrormess('');
    }, 2000);
    // ..
  });
    }
  return (
    <div>
      <div>
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
                                {sucessmess&&<div>
                                    {sucessmess && <>
                                            <div className='alert alert-success'>{sucessmess}</div>
                                        </>}
                                        <div className='text-center'>
                                            <p class="small fw-bold mt-2 pt-1 mb-0">Click here to <NavLink to='/login'
                                                class="link-danger textdecorationnone">Login</NavLink></p>
                                        </div>
                                </div>}
                                    {!sucessmess&&<div>
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
                                        
                                        {errormess && <>
                                            <div className='alert alert-danger'>{errormess}</div>
                                        </>}
                                        {/* <!-- Email input --> */}
                                        <div className="form-outline mb-4">
                                            <input onChange={emailset} type="email" id="form3Example3" className="form-control" placeholder='Email' />
                                            {/* <label className="form-label" for="form3Example3">Email address</label> */}
                                        </div>

                                        {/* <!-- Submit button --> */}
                                        <button onClick={submitclick} type="submit" className="btn btn-primary btn-block mb-4">
                                            Reset Password
                                        </button>
                                        
                                        <div className='text-center'>
                                            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink to='/signup'
                                                class="link-danger textdecorationnone">Register</NavLink></p>
                                        </div>
                                    </form>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Section: Design Block --> */}
        </div>
    </div>
  )
}

export default ForgotPassword
