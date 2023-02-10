import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CursorAnimation from "./CursorAnimation";

export default function About({ cursorClass }) {
  const [pictureClass, setPictureClass] = useState(
    "about-pictures__grid__BandW"
  );

  useEffect(() => {
    CursorAnimation();
  }, []);

  return (
    <div className="about__wrapper" id="about">
      <Navbar cursorClass={cursorClass} />
      <div className="about__container">
        <div className="about-pictures__wrapper">
          <div
            onMouseEnter={() => setPictureClass("about-pictures__grid")}
            onMouseLeave={() => setPictureClass("about-pictures__grid__BandW")}
            className={pictureClass}
          >
            <div className="spriteBandW IMG_6658"></div>
            <div className="spriteBandW IMG_6655"></div>
            <div className="spriteBandW IMG_6653"></div>
            <div className="spriteBandW IMG_6651"></div>
            <div className="spriteBandW IMG_6649"></div>
            <div className="spriteBandW IMG_6659"></div>
            <div className="spriteBandW IMG_6650"></div>
            <div className="spriteClear IMG_6657"></div>
            <div className="spriteClear IMG_6656"></div>
            <div className="spriteClear IMG_6654"></div>
            <div className="spriteClear IMG_6660"></div>
            <div className="spriteClear IMG_6647"></div>
            <div className="spriteClear IMG_6652"></div>
            <div className="spriteClear IMG_6661"></div>
          </div>
        </div>
        <div className="about__content">
          <h1>Hello,</h1>
          <h2>I'm a Front-end Web Developer.</h2>
          <h3>
            I'm proficient in HTML, CSS, JavaScript, React, and the
            frameworks/libraries listed below.
          </h3>
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>Git</li>
            <li>Bootstrap</li>
            <li>Sass</li>
            <li>VS Code</li>
            <li>CSS Sprites</li>
            <li>Communicating with API's</li>
            <li>DOM Manipulation</li>
            <li>Routing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
