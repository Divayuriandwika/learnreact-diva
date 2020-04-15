import React from 'react';
import './Navbar.css';


let Navbar = () => {
    return(
  <div className = "container">
   <div className="topnav">
  <a className="active" href="#home">About</a>
  <a href="#news">Experience</a>
  <a href="#contact">Skills</a>
  <a href="#about">Education</a>
  <a href="#about">Works</a>
  <a href="#about">Contact</a>
</div>
        
  </div>
    )
}








export default Navbar;