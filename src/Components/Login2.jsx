import React from 'react'
import './Login2.css'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

const Login2 = () => {
    return (
        <div>
            {/* <!-- Section: Design Block --> */}
            <section className="background-radial-gradient overflow-hidden">

                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
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
                                        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                        {/* <div className="row">
                                            <div className="col mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1" className="form-control" placeholder='Name'/>
                                                    <label className="form-label" for="form3Example1">Name</label>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* <!-- Email input --> */}
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example3" className="form-control" placeholder='Email' />
                                            {/* <label className="form-label" for="form3Example3">Email address</label> */}
                                        </div>

                                        {/* <!-- Password input --> */}
                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4" className="form-control" placeholder='Password' />
                                            {/* <label className="form-label" for="form3Example4">Password</label> */}
                                        </div>

                                        {/* <!-- Submit button --> */}
                                        <button type="submit" className="btn btn-primary btn-block mb-4">
                                            Login
                                        </button>

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
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Section: Design Block --> */}
        </div>
    )
}

export default Login2
