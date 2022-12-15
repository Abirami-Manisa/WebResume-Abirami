import React from 'react'
import Slide from "react-reveal";

import Data from "../assets/resumeData.json"

const Resume : React.FC= () => {
    if (!Data) return null;
    const skillmessage = Data.resume.skillmessage;
    const education = Data.resume.education.map(function (education) {
        return (
            <div key={education.school}>
                <h3>{education.school}</h3>
                <p className="info">
                    {education.degree} <span>&bull;</span>
                    <em className="date">{education.graduated}</em>
                </p>
                <p>{education.description}</p>
                <p></p>
            </div>
        );
    });

    const work = Data.resume.work.map(function (work) {
        return (
            <div key={work.company}>
                <h3>{work.company}</h3>
                <p className="info">
                    {work.title}
                    <span>&bull;</span> <em className="date">{work.years}</em>
                </p>
                <p>{work.description}</p>
                <span>&bull;</span> <p>{work.project}</p>
            </div>
        );
    });

    const skills = Data.resume.skills-core.map((skills) => {
        const backgroundColor = "#90EE90"
        const className = "bar-expand " + skills.name.toLowerCase();
        const width = skills.level;

        return (
            <li key={skills.name}>
                <span style={{ width, backgroundColor }} className={className}></span>
                <em>{skills.name}</em>
            </li>
        );
    });

    const skillsTools = Data.resume.skills-tools.map((skills) => {
        const backgroundColor = "#90EE90"
        const className = "bar-expand " + skills.name.toLowerCase();
        const width = skills.level;

        return (
            <li key={skills.name}>
                <span style={{ width, backgroundColor }} className={className}></span>
                <em>{skills.name}</em>
            </li>
        );
    });

    const skillsInterpersonal = Data.resume.skills-interpersonal.map((skills) => {
        const backgroundColor = "#90EE90"
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

                        <p>Core Skills</p>
                        <div className="bars">
                            <ul className="skills">{skills}</ul>
                        </div>
                        <p>Tools</p>
                        <div className="bars">
                            <ul className="skills">{skillsTools}</ul>
                        </div>
                        <p>Interpersonal Skills</p>
                        <div className="bars">
                            <ul className="skills">{skillsInterpersonal}</ul>
                        </div>
                    </div>
                </div>
            </Slide>
        </section>
    )
}

export default Resume