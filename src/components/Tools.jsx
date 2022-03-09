import React from "react";
import {
  FaReact,
  FaHtml5,
  FaNpm,
  FaJs,
  FaCss3,
  FaBootstrap,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";
import "../style/tools.scss";
const Tools = () => {
  return (
    <div className="container">
      <h2 className="my_tools display-2 mt-5">Tools of the trade</h2>
      <div className="icons-container container">
        <div className="carousel slider">
          <div className="slide-track">
            <div className="slide">
              <FaReact />
            </div>
            <div className="slide">
              <FaCss3 />
            </div>
            <div className="slide">
              <FaJs />
            </div>
            <div className="slide">
              <FaNpm />
            </div>
            <div className="slide">
              <FaBootstrap />
            </div>
            <div className="slide">
              <FaGit />
            </div>
            <div className="slide">
              <FaHtml5 />
            </div>
            <div className="slide">
              <FaNodeJs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
