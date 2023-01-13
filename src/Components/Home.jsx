import React from "react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="home__wrapper">
      <div className="name__wrapper">
        <Navbar />
        <div href="#" className="hover-this">
          <div className="home__name">
            <h1>Nathan Wilson</h1>
            <h2>Web Developer</h2>
          </div>
        </div>
        <div className="cursor"></div>
      </div>
    </div>
  );
}
