import React from "react";
import { Main, SquareContainer, Square } from "./styled";

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

function Hoverboard() {
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleMouseOver = (e) => {
    let color = getRandomColor();
    e.target.style.backgroundColor = color;
    e.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  };

  const handleMouseOut = (e) => {
    e.target.style.background = "#1d1d1d";
    e.target.style.boxShadow = "0 0 2px #000";
  };

  return (
    <Main>
      <SquareContainer>
        {Array.from(new Array(500)).map((item, index) => {
          return (
            <Square
              key={index}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          );
        })}
      </SquareContainer>
    </Main>
  );
}

export default Hoverboard;
