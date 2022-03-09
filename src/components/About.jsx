import React, { useState } from "react";
import { ABOUTME } from "./utils/content";
import { FaArrowAltCircleRight, FaSmile } from "react-icons/fa";
import "../style/about.css";

const About = () => {
  const [count, setCount] = useState(0);

  const changeImg = () => {
    if (count === 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className="about-container">
      <div className="container">
        <h2 className="display-2 my_name">Gabe Who?</h2>
        <div className="about_content">
          <div className="caraousel">
            {ABOUTME.map((item, i) => {
              if (count === i) {
                return (
                  <div key={item.id}>
                    <div className={item.class + " pic_active"}>
                      <img src={item.img} alt="" />
                    </div>
                    <p className="subHeading">{item.subHeading}</p>
                  </div>
                );
              }
            })}
            <div className="arrow">
              <FaArrowAltCircleRight onClick={changeImg} />
            </div>
          </div>
          <p>
            Hello! Make it look good and make it work. I love taking a design
            and bringing it to life. My focus is frontend using technologies
            like React.js and Bootstrap.
            <br></br>
            <br></br> In my free time I enjoy cooking in the kitchen, hiking for
            the views and bourbon picking.
            <FaSmile />
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
