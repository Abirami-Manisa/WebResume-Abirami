import React from 'react'
import { FaSortUp } from 'react-icons/fa';
import Fade from "react-reveal";

import Data from "../assets/resumeData.json"

import "../css/layout.css"
import "../css/font-awesome/css/font-awesome.css"
import "../css/font-awesome/css/font-awesome.min.css"

const Footer = () => {
    if (!Data) return null;
    const networks = Data.main.social.map(function (network) {
        return (
            <li key={network.name}>
                <a href={network.url}>
                    <i className={network.className}></i>
                </a>
            </li>
        );
    });
    return (
        <footer>
            <div className="row">
                <Fade bottom>
                    <div className="twelve columns">
                        <ul className="social-links">{networks}</ul>

                        <ul className="copyright">
                            <li>&copy; By Abirami Manisa</li>
                        </ul>
                    </div>
                </Fade>

                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home">
                        <FaSortUp size={40} color="black" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer