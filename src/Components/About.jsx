import React, { useState } from "react";

export default function About({ handleHover, handleLeave, icon }) {
  const [switchActive, setSwitchActive] = useState(true);

  function handleClick() {
    switchActive ? setSwitchActive(false) : setSwitchActive(true);
  }

  return (
    <div className={switchActive ? "dark__wrapper" : "light__wrapper"}>
      <h1 className={switchActive ? "dark__heading" : "light__heading"}>
        Find the light switch
      </h1>
      <div>
        <img
          className="light-switch"
          src={icon}
          alt=""
          onClick={handleClick}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        />
      </div>
    </div>
  );
}
