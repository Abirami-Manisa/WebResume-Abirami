import React from "react";

import NavBar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Publications from "./components/Publications";

const App:React.FC = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Resume />
      <Publications />
      <Portfolio />
      <Testimonial />
      <Footer />
    </>
  );
};

export default App;
