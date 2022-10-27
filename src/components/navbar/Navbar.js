import React from 'react';
import './navbar.css'
// import { Routes, Route, useNavigate } from 'react-router-dom';
import Signup from '../signup/Signup';



const Navbar = () => {
    // const navigate = useNavigate();

    // const navigateToSignup = () => {
    //     // 👇️ navigate to /contacts
    //     navigate('./Signup');
    // };

    // const navigateHome = () => {
    //   // 👇️ navigate to /
    //   navigate('/');
    // };
    return (
        <div className="navbar navhover">
            <a href="#home" className="home">Home</a>
            <a href="#about" className="about">How it Works</a>
            <a href="#contact" className="contact">Contact</a>

            <div>
                <button className='btnSignup btn'>Sign Up</button>

                {/* <Routes>
                    <Route path="./Signup" element={<Signup />} />
                    
                </Routes> */}
            </div>

        </div>
    )
}

export default Navbar