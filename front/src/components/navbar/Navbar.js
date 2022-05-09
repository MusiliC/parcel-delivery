import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css" 

function Navbar() {
  return (
    <div className="navbar">
      <div className="icon">
        <img src="/pics/bg.png" alt="" /><div className="logo"> <span>D</span>elivery</div>
      </div>
      <div className="links">
        <div className="home-link"> <Link to='/'>Home</Link></div>             
         <div className="service-link"><Link to='services'>Services</Link></div> 
         <div className="About-link"><Link to='about'>About</Link></div> 
        <div className="login-link"> <Link to="login">Log in</Link></div>
         <div className="profile-link"><Link to='/profile'>Profile</Link></div>      
      </div>
    </div>
  );
}

export default Navbar;
