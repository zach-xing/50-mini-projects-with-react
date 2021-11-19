import React, { useState } from "react";
import { Main, LeftSlide, RightSlide, DownButton, UpButton } from "./styled";

const infos = [
  {
    title: "1",
    desc: "qqq",
    bgColor: "#2E4C6D",
    bgImg: "https://source.unsplash.com/random/800x600",
  },
  {
    title: "2",
    desc: "qqq",
    bgColor: "#B983FF",
    bgImg: "https://source.unsplash.com/random/900x600",
  },
  {
    title: "3",
    desc: "qqq",
    bgColor: "#009DAE",
    bgImg: "https://source.unsplash.com/random/800x670",
  },
  {
    title: "4",
    desc: "qqq",
    bgColor: "#753188",
    bgImg: "https://source.unsplash.com/random/800x650",
  },
];

function DoubleVerticalSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Main>
      <LeftSlide count={infos.length - 1} index={activeIndex}>
        {infos.map((item) => {
          return (
            <div
              key={item.title}
              className="info"
              style={{ backgroundColor: item.bgColor }}
            >
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </LeftSlide>
      <RightSlide index={activeIndex}>
        {[...infos].reverse().map((item, index) => {
          return (
            <div
              className="info"
              key={index}
              style={{ backgroundImage: `url(${item.bgImg})` }}
            >
              {item.title}
            </div>
          );
        })}
      </RightSlide>

      <DownButton
        onClick={() =>
          setActiveIndex((prev) => (prev + 1 + infos.length) % infos.length)
        }
      >
        DOWN
      </DownButton>
      <UpButton
        onClick={() =>
          setActiveIndex((prev) => (prev - 1 + infos.length) % infos.length)
        }
      >
        UP
      </UpButton>
    </Main>
  );
}

export default DoubleVerticalSlider;
