import { useState } from "react";
import { emit } from "../socketApi";

function Palette({ color }) {
  const [inputValue, setInputValue] = useState();

  const handleClick = () => {
    emit(inputValue);
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="palette">
      <input value={color} type="color" onChange={(e) => onInputChange(e)} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Palette;
