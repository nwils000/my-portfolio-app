import { Link } from "react-router-dom";
import circle from "../Photos/circle.png";

export default function Navbar({ cursorClass }) {
  return (
    <div className="nav__container">
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
        <Link className="nav__link">
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
