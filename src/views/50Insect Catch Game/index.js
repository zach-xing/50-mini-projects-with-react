import React, { useState } from "react";
import {
  Main,
  Screen,
  CustomBtn,
  InsectsList,
  InsectDiv,
  Tips,
  MessageDiv,
} from "./styled";

const insects = [
  {
    text: "Fly",
    imgUrl: "http://pngimg.com/uploads/fly/fly_PNG3946.png",
  },
  {
    text: "Mosquito",
    imgUrl: "http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png",
  },
  {
    text: "Spider",
    imgUrl: "http://pngimg.com/uploads/spider/spider_PNG12.png",
  },
  {
    text: "Roach",
    imgUrl: "http://pngimg.com/uploads/roach/roach_PNG12163.png",
  },
];

let score = 0;

function InsectCatchGame() {
  const [curIndex, setCurIndex] = useState(0);
  const [insectImg, setInsectImg] = useState("");
  const [insectArr, setInsectArr] = useState([]);

  const handleImg = (index) => {
    setCurIndex(2);
    setInsectImg(insects[index].imgUrl);
    createInsect()
  };

  // 随机位置
  const getRandomLocation = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    console.log(x, y);
    const rotate = Math.random() * 360;
    return { x, y, rotate };
  };

  // 生成昆虫
  const createInsect = () => {
    setInsectArr(prev => {
      let arr = [...prev];
      arr.push(getRandomLocation());
      return arr;
    });
  };

  // 删除昆虫
  const handleDelete = (index) => {
    let arr = [...insectArr];
    arr.splice(index, 1);
    setInsectArr(arr)
    score++
    setTimeout(createInsect, 200);
    setTimeout(createInsect, 500);
  }

  return (
    <Main index={curIndex}>
      <Screen className={curIndex >= 1 ? "up" : ""}>
        <h1>Catch The Insect</h1>
        <CustomBtn onClick={() => setCurIndex(1)}>开始游戏</CustomBtn>
      </Screen>
      <Screen className={curIndex >= 2 ? "up" : ""}>
        <h1>What is your "favorite" insect?</h1>
        <InsectsList>
          {insects.map((item, index) => {
            return (
              <li key={item.text}>
                <button onClick={() => handleImg(index)}>
                  <p>{item.text}</p>
                  <img src={item.imgUrl} alt="" />
                </button>
              </li>
            );
          })}
        </InsectsList>
      </Screen>
      <Screen>
        <Tips>Score: {score}</Tips>
        <MessageDiv className={score>=20 ? "visible" : ""}>
          <h3>Are you annnoyed yet? </h3>
          <h3>You are playing an impossible game!!</h3>
        </MessageDiv>
        {insectArr.map((item, index) => {
          return (
            <InsectDiv
              key={index}
              left={item.x}
              top={item.y}
              rotate={item.rotate}
              src={insectImg}
              alt=""
              onClick={() => handleDelete(index)}
            />
          );
        })}
      </Screen>
    </Main>
  );
}

export default InsectCatchGame;
