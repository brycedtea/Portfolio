import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from './components/Particles'
import React from "react";


function App() {
 
  return (
    <>
      <Particles />
      <Navbar />
      <Header />
    </>
    
  );
}

export default App;
