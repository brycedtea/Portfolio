import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/about/AboutMe';
import Services from './components/services/Services';
import React from "react";


function App() {
 
  return (
    <>
      <Particles />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      
    </>
    
  );
}

export default App;
