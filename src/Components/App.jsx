import { useState } from "react";
import "../CSS/app.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
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

  function handleInputHover() {
    setCursorClass("cursor-input-hovered");
  }
  function handleInputLeave() {
    setCursorClass("cursor");
  }

  return (
    <div>
      <Home cursorClass={cursorClass} />
      <About
        handleHover={handleHover}
        handleLeave={handleLeave}
        icon={icon}
        cursorClass={cursorClass}
      />

      <Projects cursorClass={cursorClass} />

      <Contact
        handleInputHover={handleInputHover}
        handleInputLeave={handleInputLeave}
        cursorClass={cursorClass}
      />
    </div>
  );
}

export default App;
