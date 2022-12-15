import React from 'react'

import { Fade, Slide } from "react-reveal";

import Data from "../assets/resumeData.json"

import "../css/layout.css"

const Contact = () => {
    if (!Data) return null;
    const name = Data.main.name;
    const street = Data.main.address.street;
    const city = Data.main.address.city;
    const state = Data.main.address.state;
    const zip = Data.main.address.zip;
    const phone = Data.main.phone;
    const message = Data.main.contactmessage;


    return (
        <section id="contact">
            <Fade bottom duration={1000}>
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1>
                            <span>Get In Touch.</span>
                        </h1>
                    </div>

                    <div className="ten columns">
                        <p className="lead">{message}</p>
                    </div>
                </div>
            </Fade>

            <Slide right duration={1000}>
                <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">
                        <h4>Address and Phone</h4>
                        <p className="address">
                            {name}
                            <br />
                            {street} <br />
                            {city}, {state} {zip}
                            <br />
                            <span>{phone}</span>
                        </p>
                    </div>
                </aside>
            </Slide>
        </section>
    )
}

export default Contact