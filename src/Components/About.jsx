import { useEffect } from "react";
import Navbar from "./Navbar";
import CursorAnimation from "./CursorAnimation";

export default function About({ handleHover, handleLeave, icon, cursorClass }) {
  useEffect(() => {
    CursorAnimation();
  }, []);

  return (
    <div className="about__wrapper">
      <Navbar cursorClass={cursorClass} />
      <div className="about__container">
        <div className="about__content">
          <h1>Hello,</h1>
          <h2>I am a creator with a strong passion for web development.</h2>
          <h3>
            Over the last year and a half, I have become obsessed with creating
            beautiful, unique, and functional websites. My natural creativity
            and close attention to detail have helped me excel quickly in this
            field.
          </h3>
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>VS Code</li>
            <li>Bootstrap</li>
            <li>Sass</li>
            <li>Redux</li>
            <li>Git</li>
            <li>Routing</li>
            <li>Connecting to API's</li>
            <li>Custom Fonts</li>
            <li>Sprites</li>
            <li>HandBrake</li>
          </ul>

          <h2>Why Hire Me?</h2>
          <div className="hire-me__intro">Heres a few reasons...</div>
          <div className="reason__block">
            <h4>1:</h4>
            <h3>
              I have all the skills necessary to succeed in the job you're
              considering me for. If there are any additional skills / specific
              tools I need to learn to work for you, I guarantee that I will
              learn and become efficient with them quickly.
            </h3>
          </div>
          <div className="reason__block">
            <h4>2:</h4>
            <h3>
              I'm motivated. I'm motivated by my passion for web development.
              I'm motivated by my wife and daughter to support them financially.
              I'm motivated by my natural desire to excel in all that I do.
            </h3>
          </div>
          <div className="reason__block">
            <h4>3:</h4>
            <h3>
              I've been a great leader, and I've also been a great follower. I
              have good interpersonal skills. I know how to take and give
              compliments as well as constructive criticism. I don't enjoy
              drama, and you'll never have a problem with my conduct in the
              workplace.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
