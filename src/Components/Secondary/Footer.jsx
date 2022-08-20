import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Login2.css';
const Footer = () => {
    return (
        <div>
            <footer className="footbelow text-white text-center text-lg-start">
                <hr />
                {/* <!-- Grid container --> */}
                <div className="container p-4">
                    {/* <!--Grid row--> */}
                    <div className="row">
                        {/* <!--Grid column--> */}
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h3><strong className=" st3">About crackDSA</strong></h3>

                            <p>
                                We are writing the content!
                            </p>
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase st3"><strong>Roadmaps</strong></h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    {/* <NavLink className="text-white">DSA</NavLink> */}
                                </li>
                            </ul>
                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase st3"><strong>Connect With Us</strong></h5>

                            <ul className="list-unstyled">
                                <li>
                                    {/* <strong><NavLink to="/" className="text-white text-decoration-none">Linkedin</NavLink></strong> */}
                                </li>
                            </ul>
                        </div>
                        {/* <!--Grid column--> */}
                    </div>
                    {/* <!--Grid row--> */}
                </div>
                {/* <!-- Grid container --> */}
                <hr />
                {/* <!-- Copyright --> */}
                <div className="text-center p-3" >
                    Made with ❤️ in India
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </div>
    )
}

export default Footer
