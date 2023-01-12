import { Link } from "react-router-dom";
import circle from "../Photos/circle.png";
import Home from "./Home";

export default function Navbar() {
  return (
    <div className="nav__container">
      <div className="nav__line line1">
        <h2 className="heading1">Home</h2>
        <Link className="nav__link">
          <img src={circle} />
        </Link>
      </div>
      <div className="nav__line line2">
        <h2 className="heading2">About</h2>
        <Link className="nav__link">
          <img src={circle} />
        </Link>
      </div>
      <div className="nav__line line3">
        <h2 className="heading3">Projects</h2>
        <Link className="nav__link">
          <img src={circle} />
        </Link>
      </div>
      <div className="nav__line line4">
        <h2 className="heading4">Contact</h2>
        <Link className="nav__link">
          <img src={circle} />
        </Link>
      </div>
      <div className="cursor"></div>
    </div>
  );
}
