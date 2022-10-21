import React from "react";
import Typed from "react-typed";
import './header.css'

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
        <div className="main-info">
            <h1 className="welcome">Hi, my name is Bryce</h1>
            <Typed 
            className="typed-text"
            strings={["Web Design", "Web Development"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
            <a href="#" className="btn-main-offer">Contact Me</a>
        </div>
    </div>
  )
}

export default Header