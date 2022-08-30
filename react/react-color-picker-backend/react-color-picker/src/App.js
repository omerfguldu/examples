import "./App.css";
import { useState, useEffect } from "react";
import { init, subscribe } from "./socketApi";
import Palette from "./components/Palette";

function App() {
  useEffect(() => {
    init();

    subscribe((color) => {
      setColor(color);
    });
  }, []);
  const [color, setColor] = useState("#282c34");

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <Palette color={color} />
    </div>
  );
}

export default App;
