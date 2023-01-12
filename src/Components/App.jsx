import { useEffect } from "react";
import "../CSS/app.css";
import Home from "./Home";
import CursorAnimation from "./CursorAnimation";

function App() {
  useEffect(() => {
    CursorAnimation();
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
