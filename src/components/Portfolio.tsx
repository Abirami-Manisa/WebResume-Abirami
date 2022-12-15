import React from 'react'
import Zmage from "react-zmage";
import Fade from "react-reveal";
import Data from "../assets/resumeData.json"

import "../css/default.css"
let id = 0;


const Portfolio = () => {
  if (!Data) return null;

  const projects = Data.portfolio.projects.map(function (projects) {
    let projectImage = "images/portfolio/" + projects.image;

    return (
      <div key={id++} className="columns portfolio-item">
        <div className="item-wrap">
          <Zmage alt={projects.title} src={projectImage} />
          <div style={{ textAlign: "center" }}>{projects.title}</div>
        </div>
      </div>
    );
  });

  return (
    <section id="works">
    <Fade left duration={1000} distance="40px">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </Fade>
  </section>
  )
}

export default Portfolio