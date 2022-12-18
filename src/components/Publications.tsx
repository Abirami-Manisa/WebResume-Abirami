import React from "react";
import { Accordion, Button } from "react-bootstrap";
import Flip from "react-reveal"

import Data from "../assets/resumeData.json";
import "../css/layout.css";

const Publications: React.FC = () => {
  if (!Data) return null;
  const publication = Data.publications.map(function (publication) {
    return (
      <div key={publication.title}>
        <br />
        <h5>{publication.title}</h5>
        <p className="info">
          <b>
            {publication.journal} <span>&bull;</span>
          </b>
          <em className="date">{publication.year}</em>
        </p>
        <Button
          variant="secondary"
          size="lg"
          href={publication.url}
          target="_blank"
          rel="noreferrer"
        >
          Show Publication
        </Button>
        <hr />
      </div>
    );
  });

  const patent = Data.patent.map(function (patent) {
    return (
      <div key={patent.title}>
        <br />
        <h5>{patent.title}</h5>
        <p className="info">
          <b>
            {patent.number} <span>&bull;</span>
          </b>
          <em className="date">{patent.year}</em>
        </p>
      </div>
    );
  });

  return (
    <div style={{ background: "#c0c0c017" }}>
      <section id="publication">
        <Flip top>
          <h3>Publications and Patent</h3>
          <Accordion defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h4>
                  <span>Publications</span>
                </h4>
              </Accordion.Header>
              <Accordion.Body>{publication}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h4>
                  <span>Patent</span>
                </h4>
              </Accordion.Header>
              <Accordion.Body>{patent}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Flip>
      </section>
    </div>
  );
};

export default Publications;
