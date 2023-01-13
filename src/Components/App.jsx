import { useEffect } from "react";
import "../CSS/app.css";
import Home from "./Home";
import About from "./About";
import CursorAnimation from "./CursorAnimation";

function App() {
  useEffect(() => {
    CursorAnimation();
  }, []);

  return (
    <div>
      <Home />
      <About />
    </div>
  );
}

export default App;
