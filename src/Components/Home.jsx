import React from "react";
import Navbar from "./Navbar";

export default function Home({ cursorClass }) {
  return (
    <div className="home__wrapper">
      <div className="name__wrapper">
        <Navbar cursorClass={cursorClass} />
        <div href="#" className="hover-this">
          <div className="home__name">
            <div className="home__titles">
              <h1>Nathan Wilson</h1>
              <h2>Web Developer</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
