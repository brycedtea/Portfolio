import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from './components/particles/Particles';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import AboutMe from './components/about/AboutMe';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Reviews from './components/reviews/Reviews';
import Contact from './components/contact/Contact';
import React from "react";
import ScrollButton from './components/scrollbutton/ScrollButton';

function App() {
 
  return (
    <>
      <Particles />
      <ScrollButton />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Reviews />
      <Contact />
    </>
    
  );
}

export default App;
