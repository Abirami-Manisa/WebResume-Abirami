import React from "react";

import { Fade, Slide } from "react-reveal";

import Data from "../assets/resumeData.json";

import "../css/layout.css";
import "../css/default.css";
import "../css/font-awesome/css/font-awesome.css";
import "../css/font-awesome/css/font-awesome.min.css";

const Contact: React.FC = () => {
  if (!Data) return null;
  const name = Data.main.name;
  const street = Data.main.address.street;
  const city = Data.main.address.city;
  const state = Data.main.address.state;
  const zip = Data.main.address.zip;
  const phone = Data.main.phone;
  const mail = Data.main.email;
  const message = Data.main.contactmessage;

  return (
    <section id="contact">
      <Fade bottom duration={2000}>
        <div className="row">
          <div>
            <h4>{message}</h4>
          </div>
        </div>
      </Fade>

      <Slide right duration={2000}>
        <div>
          <p style={{margin:"0 0 0 10%"}}>
            {name}
            <br />
            {street} <br />
            {city}, {state} {zip}
            <br />
            <span>{phone}</span>
            <br />
            <span>{mail}</span>
          </p>
        </div>
      </Slide>
    </section>
  );
};

export default Contact;
