import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CursorAnimation from "./CursorAnimation";

export default function About({ handleHover, handleLeave, icon, cursorClass }) {
  const [switchActive, setSwitchActive] = useState(true);

  useEffect(() => {
    CursorAnimation();
  }, []);

  function handleClick() {
    switchActive ? setSwitchActive(false) : setSwitchActive(true);
  }

  return (
    <div className={switchActive ? "dark__wrapper" : "light__wrapper"}>
      <Navbar cursorClass={cursorClass} />
      <div className="dark__content">
        <h1>
          Light Switch
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8595;
        </h1>
        <img
          className="light-switch"
          src={icon}
          alt=""
          onClick={handleClick}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        />
      </div>
      <div className="light__container">
        <div className="personal__content">
          <h2>Personal Bio</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            harum sapiente odit quisquam dolorem suscipit maxime sunt quis
            beatae dolorum id pariatur voluptatem praesentium quidem qui
            aliquid. Eligendi, ratione odit.
          </p>
        </div>
        <div className="personal__content">
          <h2>Work Bio</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            harum sapiente odit quisquam dolorem suscipit maxime sunt quis
            beatae dolorum id pariatur voluptatem praesentium quidem qui
            aliquid. Eligendi, ratione odit.
          </p>
        </div>
      </div>
    </div>
  );
}
