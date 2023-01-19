import { useEffect } from "react";
import Navbar from "./Navbar";
import CursorAnimation from "./CursorAnimation";
import birthdayDataApp from "../Videos/birthdayDataApp.mp4";

export default function Projects({ cursorClass }) {
  useEffect(() => {
    CursorAnimation();
  }, []);

  return (
    <div className="projects__wrapper">
      <Navbar cursorClass={cursorClass} />
      <div className="projects__grid">
        <div className="projects__container">
          {" "}
          <div className="projects__content">
            <video autoPlay muted loop src={birthdayDataApp}></video>
          </div>
        </div>
        <div className="projects__container">
          {" "}
          <div className="projects__content">
            <video autoPlay muted loop src={birthdayDataApp}></video>
          </div>
        </div>
        <div className="projects__container">
          {" "}
          <div className="projects__content">
            <video autoPlay muted loop src={birthdayDataApp}></video>
          </div>
        </div>
        <div className="projects__container">
          {" "}
          <div className="projects__content">
            <video autoPlay muted loop src={birthdayDataApp}></video>
          </div>
        </div>
      </div>
    </div>
  );
}
