import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { FaSortDown } from "react-icons/fa";
import Data from "../assets/resumeData.json";

import "../css/layout.css";

const Home = () => {
  if (!Data) return null;
  return (
    <div>
      <header id="home">
        <ParticlesBg type="circle" bg={true}/>
        <div className="banner">
          <div className="banner-text">
            <Fade bottom duration={2000}>
              <h1 className="responsive-headline">{Data.main.name}</h1>
            </Fade>
            <Fade bottom duration={2000}>
              <h3>{Data.main.description}</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={Data.main.github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <FaSortDown size={40} color="black" />
          </a>
        </p>
      </header>
    </div>
  );
};

export default Home;
