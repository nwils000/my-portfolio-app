import { useEffect } from "react";
import "../CSS/app.css";
import Navbar from "./Navbar";
import Home from "./Home";
import CursorAnimation from "./CursorAnimation";

function App() {
  useEffect(() => {
    CursorAnimation();
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
