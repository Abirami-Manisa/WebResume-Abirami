import React from "react";
import Slide from "react-reveal";

import Data from "../assets/resumeData.json";

const Resume: React.FC = () => {
  if (!Data) return null;
  const skillmessage = Data.resume.skillmessage;
  const education = Data.resume.education.map(function (education) {
    return (
      <div key={education.school}>
        <br />
        <h3>{education.school}</h3>
        <p className="info">
          <b>
            {education.degree} <span>&bull;</span>
          </b>
          <em className="date">{education.graduated}</em>
        </p>
        <p>{education.score}</p>
        <span>&bull; </span>
        <em>{education.description}</em>
        
      </div>
    );
  });

  const work = Data.resume.work.map(function (work) {
    return (
      <div key={work.company}>
        <h3 style={{marginTop:"5px"}}>{work.company}</h3>
        <p className="info">
          <b>
            {work.title}
            <span>&bull;</span>
          </b>
          <em className="date">{work.years}</em>
        </p>
        <p>{work.description}</p>
        <span>&bull; </span>
        <em>{work.project}</em>
      </div>
    );
  });

  const skills = Data.resume.skillsCore.map((skills) => {
    const backgroundColor = "#90EE90";
    const className = "bar-expand " + skills.name.toLowerCase();
    const width = skills.level;

    return (
      <li key={skills.name}>
        <span style={{ width, backgroundColor }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });

  const skillsTools = Data.resume.skillsTools.map((skills) => {
    const backgroundColor = "#90EE90";
    const className = "bar-expand " + skills.name.toLowerCase();
    const width = skills.level;

    return (
      <li key={skills.name}>
        <span style={{ width, backgroundColor }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });

  const skillsInterpersonal = Data.resume.skillsInterpersonal.map((skills) => {
    const backgroundColor = "#90EE90";
    const className = "bar-expand " + skills.name.toLowerCase();
    const width = skills.level;

    return (
      <li key={skills.name}>
        <span style={{ width, backgroundColor }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });

  return (
    <section id="resume">
      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <p>
              <b>Core Skills</b>
            </p>
            <br />
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
            <p>
              <b>Tools</b>
            </p>
            <br />
            <div className="bars">
              <ul className="skills">{skillsTools}</ul>
            </div>
            <p>
              <b>Interpersonal Skills</b>
            </p>
            <br />
            <div className="bars">
              <ul className="skills">{skillsInterpersonal}</ul>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default Resume;
