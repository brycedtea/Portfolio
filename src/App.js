import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from './components/Particles';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import AboutMe from './components/about/AboutMe';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import React from "react";

function App() {
 
  return (
    <>
      <Particles />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
    </>
    
  );
}

export default App;
