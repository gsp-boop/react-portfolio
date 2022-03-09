import React from "react";
import "../style/hero.css";


const Hero = () => {



  return (
    <div className="hero_container">
      <div className="container-sm">
        <div className="h1_1">
          <h1 className="display-1 text-center">Frontend</h1>
        </div>
        <div className="h1_2">
          <h1 className="display-1 text-center">Developer</h1>
        </div>
        <div className="under-header">
          <p className="fs-3">
            I use <span> modern tech </span> to make your digital vision come
            true.
          </p>
        </div>
      <div className="quote">
        <figure>
          <blockquote className="blockquote">
            <p>"For a list of all the ways technology has failed to improve the quality of life, please press three."</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Alice Kahn
          </figcaption>
        </figure>
      </div>
    </div>
    <div className="angle"></div>
    </div>
  );
};

export default Hero;
