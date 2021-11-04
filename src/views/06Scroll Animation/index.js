import React, { useEffect } from "react";
import styled from "styled-components";

const Main = styled.main`
  background-color: #efedd6;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  overflow-x: hidden;
`;

const Div = styled.div`
  background-color: blue;
  line-height: 200px;
  text-align: center;
  font-size: 25px;
  color: white;
  width: 400px;
  height: 200px;
  margin: 20px;
  border-radius: 20px;
  transform: translateX(400%);
  transition: transform 0.4s ease;
  &:nth-child(even) {
    transform: translateX(-400%);
  }
  &.show {
    transform: translateX(0);
  }
`;

function ScrollAnimation() {

  useEffect(() => {
    let boxList = document.querySelectorAll(".scrollBox");

    const setBoxshow = (box, triggerBottom) => {
      const top = box.getBoundingClientRect().top;
      console.log(box);
      if (top <= triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    };

    const showBox = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;
      boxList.forEach((box) => {
        setBoxshow(box, triggerBottom);
      });
    };

    showBox()
    window.addEventListener("scroll", showBox);
  }, []);

  return (
    <Main>
      <h1>Scroll to see the animation</h1>
      {new Array(15).fill("Hello").map((item, index) => {
        return (
          <Div className={`scrollBox`} key={item + index}>
            {item} {index}
          </Div>
        );
      })}
    </Main>
  );
}

export default ScrollAnimation;
