import React from "react";
import logo from "./logo.png";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './navbar.css'
import {Link} from "react-scroll";



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container">
  <Link className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="about" className="nav-link" href="#">About Me</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="services" className="nav-link" href="#">Services</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="experience" className="nav-link" href="#">Work Experience</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="portfolio" className="nav-link" href="#">Projects</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="reviews" className="nav-link" href="#">Reviews</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="socials" className="nav-link" href="#">Socials</Link>
      </li>

    </ul>
  </div>
</div>
</nav>
  )
}

export default Navbar