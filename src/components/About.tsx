import React from "react";
import Fade from "react-reveal";

import { FaDownload } from "react-icons/fa";

import Resume from "../assets/Resume_Abirami_Manisa.pdf";
import Data from "../assets/resumeData.json";

import profilePic from "../assets/Abirami_profile_pic.jpg";
import "../css/layout.css";
import { Button } from "react-bootstrap";

const About = () => {
  if (!Data) return null;

  return (
    <section id="about">
      <Fade duration={2000}>
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilePic}
              alt="Abirami Manisa Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            {Data.main.bio}
            <p></p>
            <div className="row">
              <div>
                <a href={Resume} download="Resume-Abirami-Manisa">
                  <Button title="Download Button" variant="secondary" size="lg">
                    <FaDownload /> &nbsp; Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
