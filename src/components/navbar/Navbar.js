import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

// import Login from '../login/Login';




const Navbar = () => {


    
    return (
        <div className="navbar navhover">
            <Link to="/home">Home</Link>
            <a href="#about" className="about">How it Works</a>
            <a href="#contact" className="contact">Contact</a>

            <div>
            <Link to="/signup" className='btnSignup btn'>Signup</Link>
            <Link to="/login" className='btnSignup btn'>Login</Link>
  
            </div>

        </div>
    )
}

export default Navbar


























                {/* <Link to="./signup"  className='btnSignup btn'>Signup</Link> */}