import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import circle from "../Photos/circle.png";
import circle2 from "../Photos/circleDropdown.png";
import cross from "../Photos/cross.png";

export default function Navbar({ cursorClass }) {
  const [dropdownClass, setDropdownClass] = useState("dropdown");

  return (
    <div className="nav__container">
      <div className={dropdownClass}>
        <div
          onClick={() => setDropdownClass("dropdown__active")}
          className="circle"
        >
          <div></div>
          <div></div>
          <img src={circle2} alt="" />
        </div>
        <div className="cross">
          <div className="dropdown-flex">
            <div onClick={() => setDropdownClass("dropdown")}>
              <img src={cross} alt="" />
            </div>
            <Link to="#about">About</Link>
            <Link to="#home">Home</Link>
          </div>
          <div className="dropdown-flex-second-row">
            <Link to="#contact">Contact</Link>
            <Link to="#projects">Projects</Link>
          </div>
        </div>
      </div>
      <div className="nav__line line1">
        <h2 className="heading1">Home</h2>
        <Link className="nav__link" to="#home">
          <img src={circle} alt="" />
        </Link>
      </div>
      <div className="nav__line line2">
        <h2 className="heading2">About</h2>
        <Link className="nav__link" to="#about">
          <img src={circle} alt="" />
        </Link>
      </div>
      <div className="nav__line line3">
        <h2 className="heading3">Projects</h2>
        <Link className="nav__link" to="#projects">
          <img src={circle} alt="" />
        </Link>
      </div>
      <div className="nav__line line4">
        <h2 className="heading4">Contact</h2>
        <Link className="nav__link" to="#contact">
          <img src={circle} alt="" />
        </Link>
      </div>
      <div className={cursorClass}></div>
    </div>
  );
}
