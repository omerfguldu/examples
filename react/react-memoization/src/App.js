import "./App.css";
import { useState, useMemo, useCallback } from "react";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const data = useMemo(() => {
    return calculateObject();
  }, []);
  // const data = calculateObject();

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []);

  return (
    <div className="App">
      <Header
        number={number < 5 ? 0 : number}
        data={data}
        increment={increment}
      />
      <hr />
      <h1>{number}</h1>

      <input
        value={text}
        type="text"
        onChange={({ target }) => setText(target.value)}
      />
    </div>
  );
}

function calculateObject() {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {}
  console.log("Calculating completed...");

  return { name: "Omer" };
}

export default App;
