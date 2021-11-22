import React from "react";
import ReactDOM from "react-dom";
import Heart from "./Heart";
import { Main, Photo } from "./styled";

let clickTime = 0;

function DoubleClickHeart() {

  const handleClick = (e) => {
    if(clickTime === 0) {
      clickTime = new Date().getTime();
    } else {
      if((new Date().getTime() - clickTime) < 800) {
        const xInside = e.clientX - e.target.offsetLeft;
        const yInside = e.clientY - e.target.offsetTop;
        ReactDOM.render(
          <Heart x={xInside} y={yInside} />,
          document.getElementById("container")
        );
        clickTime = 0
        setTimeout(() => {
          ReactDOM.unmountComponentAtNode(document.getElementById("container"));
        }, 1000)
      } else {
        clickTime = new Date().getTime();
      }
    }
  }

  return (
    <Main>
      <h3>Double click on the image to ❤ it</h3>

      <Photo onClick={handleClick} id="container" />
    </Main>
  );
}

export default DoubleClickHeart;
