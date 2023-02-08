import { useState } from "react";
import { Link } from "react-router-dom";
import circle from "../Photos/circle.png";

export default function Navbar({ cursorClass }) {
  const [dropdownClass, setDropdownClass] = useState("dropdown");

  return (
    <div className="nav__container">
      <div className={dropdownClass}>
        <button
          onClick={() => setDropdownClass("dropdown__active")}
          className="circle"
        >
          <img src="" alt="" />
        </button>
        <div className="cross">
          <button onClick={() => setDropdownClass("dropdown")}>
            <img src="" alt="" />
          </button>
          <div className="dropdown-links__flex">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="nav__line line1">
        <h2 className="heading1">Home</h2>
        <Link className="nav__link" to="/">
          <img src={circle} alt="" />
        </Link>
      </div>
      <div className="nav__line line2">
        <h2 className="heading2">About</h2>
        <Link className="nav__link" to="/about">
          <img src={circle} alt="" />
        </Link>
      </div>
      <div className="nav__line line3">
        <h2 className="heading3">Projects</h2>
        <Link className="nav__link" to="/projects">
          <img src={circle} alt="" />
        </Link>
      </div>
      <div className="nav__line line4">
        <h2 className="heading4">Contact</h2>
        <Link className="nav__link" to="/contact">
          <img src={circle} alt="" />
        </Link>
      </div>
      <div className={cursorClass}></div>
    </div>
  );
}
