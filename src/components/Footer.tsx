import React from "react";
import { FaSortUp } from "react-icons/fa";
import Fade from "react-reveal";

import Data from "../assets/resumeData.json";

import "../css/layout.css";
import "../css/font-awesome/css/font-awesome.css";
import "../css/font-awesome/css/font-awesome.min.css";

const Footer: React.FC = () => {
  if (!Data) return null;
  const networks = Data.main.social.map(function (network) {

    return (
      <li key={network.name}>
        <a href={network.url} target="_blank" rel="noreferrer">
          <i className={network.className}></i>
        </a>
      </li>
    );
  });
  return (
    <div id="footer">
    <footer>
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaSortUp size={40} />
        </a>
      </div>
      <div className="row" style={{display:"flex",flexDirection:"column"}}>
        <Fade bottom>
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>
          </div>
        </Fade>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
