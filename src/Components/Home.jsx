import React from "react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="home__wrapper">
      <div className="name__wrapper">
        <Navbar />
        <div href="#" className="hover-this">
          <div className="home__name">Nathan Wilson</div>
        </div>
        <div className="cursor"></div>
      </div>
    </div>
  );
}
