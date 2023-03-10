import React from "react";

import Data from "../assets/resumeData.json";

import "../css/layout.css";

const Testimonial: React.FC = () => {
  if (!Data) return null;
  const testimonials = Data.testimonials.map(function (testimonials) {
    return (
      <li key={testimonials.user}>
        <blockquote>
          <p>{testimonials.text}</p>
          <cite>{testimonials.user}</cite>
        </blockquote>
      </li>
    );
  });
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
