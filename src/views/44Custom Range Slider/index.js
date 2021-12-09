import React, { useState, useRef } from "react";
import { Main, RangeContainer } from "./styled";

function CustomRangeSlider() {
  const [num, setNum] = useState(50);
  const [left, setLeft] = useState(110);
  const label = useRef();

  const handleInput = (e) => {
    const value = e.target.value;
    setNum(value)
    const max = e.target.max;
    const min = e.target.min;
    const inputWidth = e.target.getBoundingClientRect().width;
    const labelWidth = label.current.getBoundingClientRect().width;
    const res = scale(value, min, max, 0, inputWidth);
    setLeft(res - labelWidth / 2);
  };

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - in_min)) / (in_max - in_min) + out_min;
  };

  return (
    <Main>
      <h2>Custom Range Slider</h2>
      <RangeContainer labelLeft={left}>
        <input type="range" min="0" max="100" onInput={handleInput} />
        <label ref={label} htmlFor="range">
          {num}
        </label>
      </RangeContainer>
    </Main>
  );
}

export default CustomRangeSlider;
