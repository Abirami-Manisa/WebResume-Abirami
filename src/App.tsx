import React from 'react';
import './App.css';

import NavBar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';


const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>

  );
}

export default App;
