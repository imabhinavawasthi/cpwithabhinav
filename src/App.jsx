import React, { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Courses from './Components/Courses'
import Youtube from './Components/Youtube'
import Error from './Components/Error'
import Login from './Components/Login'
import Signup from './Components/Signup'
import UserProfile from './Components/UserProfile'
import Welcome from './Components/Welcome'
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth, db } from './Firebasecong/Firebasecong'
import { doc, collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import ForgotPassword from './Components/Secondary/ForgotPassword';
import Footer from './Components/Secondary/Footer';
import CoursePage from './Components/Secondary/CoursePage'
import E404 from './Components/Secondary/E404'
import ProductSlide from './Components/Cards/ProductSlide';
import ProductHover from './Components/Cards/ProductHover';


const App = () => {
    const [user, setUser] = useState('');
    function GetCurrentUser() {
        useEffect(() => {
            auth.onAuthStateChanged(userlogged => {
                if (userlogged) {
                    const getUser = async () => {
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                        const data = await getDocs(q);
                        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                    }
                    getUser();
                }
                else {
                    setUser(null);
                }
            })
        }, [])
        return user;
    }
    GetCurrentUser();
    return (
        <div>
            {user ? <div>

                <BrowserRouter>
                    {/* <Navbar userdata={user[0]} /> */}
                    <Routes>
                        <Route exact path="/" element={<Home userdata={user[0]} />} />
                        <Route exact path="/courses" element={<Courses userdata={user[0]} />} />
                        <Route exact path="/courses/coursepage" element={<CoursePage userdata={user[0]}/>} />
                        <Route exact path="/about" element={<About userdata={user[0]} />} />
                        <Route exact path="/contact" element={<Contact userdata={user[0]} />} />
                        <Route exact path="/youtube" element={<Youtube userdata={user[0]} />} />
                        <Route exact path="/error404" element={<E404 userdata={user[0]} />} />
                        <Route exact path="/login" element={<Login userdata={user[0]} />} />
                        <Route exact path="/signup" element={<Signup userdata={user[0]} />} />
                        <Route exact path="/profile" element={<UserProfile userdata={user[0]} />} />
                        <Route exact path="/welcome" element={<Welcome userdata={user[0]} />} />
                        <Route exact path="/login/forgotpassword" element={<ForgotPassword userdata={user[0]} />} />
                        <Route path="*" element={<Navigate replace to="/error404" />} />
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </div> : <div>
                <BrowserRouter>
                    {/* <Navbar /> */}
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/courses" element={<Courses />} />
                        <Route exact path="/courses/coursepage" element={<CoursePage />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route exact path="/youtube" element={<Youtube />} />
                        <Route exact path="/error404" element={<E404 />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/signup" element={<Signup />} />
                        <Route exact path="/login/forgotpassword" element={<ForgotPassword />} />
                        <Route exact path="/beta/check" element={<ProductSlide/>}/>
                        <Route path="*" element={<Navigate replace to="/error404" />} />
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </div>}
        </div>
    );
}

export default App;