import React from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import Data from "../assets/resumeData.json";

import proj1 from "../assets/images/portfolio/01.jpg";
import proj2 from "../assets/images/portfolio/02.jpg";

import "../css/default.css";
let id = 0;

const Portfolio:React.FC = () => {
  if (!Data) return null;

  return (
    <section id="works">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h2>Check Out Some of My Works...</h2>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div key={id++} className="columns portfolio-item">
                <div className="item-wrap">
                  <Zmage alt="Employee Management System" src={proj1} />
                  <div style={{ textAlign: "center" }}>
                    Employee Management System
                  </div>
                </div>
              </div>
              <div key={id++} className="columns portfolio-item">
                <div className="item-wrap">
                  <Zmage alt="Web Resume" src={proj2} />
                  <div style={{ textAlign: "center" }}>Web Resume</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Portfolio;
