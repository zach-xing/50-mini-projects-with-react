import React, { useEffect, useState, useRef } from "react";
import { Main, Speed } from "./styled";

let idx = 0;
const initalStr = "We Love Programming!";

function AutoTextEffect() {
  const [str, setStr] = useState(initalStr);
  const [speed, setSpeed] = useState(1);
  const timer = useRef();

  useEffect(() => {
    const writeText = () => {
      setStr((prev) => initalStr.slice(0, idx + 1));
      idx = (idx + initalStr.length + 1) % initalStr.length;
      timer.current = setTimeout(() => {
        writeText();
      }, 300 / speed);
    };
    writeText();
    return () => {
      timer.current && clearTimeout(timer.current);
    }
  }, [speed]);

  const handleInput = (e) => {
    setSpeed(e.target.value);
  };

  return (
    <Main>
      <h1>{str}</h1>

      <Speed>
        <label for="speed">Speed:</label>
        <input
          type="number"
          name="speed"
          value={speed}
          min="1"
          max="10"
          step="1"
          onInput={handleInput}
        ></input>
      </Speed>
    </Main>
  );
}

export default AutoTextEffect;
