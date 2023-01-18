import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../CSS/app.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import whiteSwitch from "../Photos/whiteSwitch.png";
import blackSwitch from "../Photos/blackSwitch.png";

function App() {
  const [cursorClass, setCursorClass] = useState("cursor");
  const [icon, setIcon] = useState(blackSwitch);

  function handleHover() {
    setCursorClass("cursor-hovered");
    setIcon(whiteSwitch);
  }
  function handleLeave() {
    setCursorClass("cursor");
    setIcon(blackSwitch);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home cursorClass={cursorClass} />}></Route>
        <Route
          path="/about"
          element={
            <About
              handleHover={handleHover}
              handleLeave={handleLeave}
              icon={icon}
              cursorClass={cursorClass}
            />
          }
        ></Route>
        <Route
          path="/contact"
          element={<Contact cursorClass={cursorClass} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
