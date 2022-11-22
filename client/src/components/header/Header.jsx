import React from "react";
import Typed from "react-typed";
import './header.css'

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
        <div className="main-info">
            <h1 className="welcome">Hi, I'm Bryce &#128075;&#127997;</h1>
            <Typed 
            className="typed-text"
            strings={["Software Engineer", "Full Stack Web Developer", "IT Professional"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
            <a href="mailto: brycealvir@gmail.com" className="btn-main-offer">Contact Me</a>
            
        </div>
    </div>
    
  )
}

export default Header