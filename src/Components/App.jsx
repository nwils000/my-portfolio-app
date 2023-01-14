import { useEffect, useState } from "react";
import "../CSS/app.css";
import Home from "./Home";
import About from "./About";
import CursorAnimation from "./CursorAnimation";
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

  useEffect(() => {
    CursorAnimation();
  }, []);

  return (
    <div>
      <Home cursorClass={cursorClass} />
      <About handleHover={handleHover} handleLeave={handleLeave} icon={icon} />
    </div>
  );
}

export default App;
