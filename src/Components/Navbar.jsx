import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar__container">
      <div className="navbar__line line1">
        <Link className="nav__link">Link 1</Link>
      </div>
      <div className="navbar__line line2">
        <Link className="nav__link">Link 2</Link>
      </div>
      <div className="navbar__line line3">
        <Link className="nav__link">Link 3</Link>
      </div>
      <div className="navbar__line line4">
        <Link className="nav__link">Link 4</Link>
      </div>
    </div>
  );
}
