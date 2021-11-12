import React, {useState} from 'react'
import styled from 'styled-components'

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3494e4;
  color: white;
`;

// 大杯子
const Cup = styled.div`
  position: relative;
  background-color: #fff;
  border: 4px solid blue;
  border-radius: 0 0 40px 40px;
  height: 330px;
  width: 150px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  h2 {
    margin: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: height 0.4s ease;
  }
  .bgColor {
    position: absolute;
    bottom: 0;
    background-color: #6ab3f8;
    width: 100%;
    height: ${(props) => props.percent}%;
  }
  .emptyBgColor {
    color: blue;
    height: ${(props) => 100 - props.percent}%;
  }
`;

// 小杯子集合
const Cups = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 280px;
  .cup-small {
    color: black;
    line-height: 95px;
    border: 4px solid blue;
    height: 95px;
    width: 50px;
    border-radius: 0 0 15px 15px;
    background-color: rgba(255, 255, 255, 0.9);
    cursor: pointer;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 5px;
  }
  .active {
    background-color: #6ab3f8;
  }
`;

function DrinkWater() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (index) => {
    setCurrentIndex(prev => {
      return prev === index ? index - 1: index;
    })
  }

  return (
    <Main>
      <h1>Drink Water</h1>
      <h3>Goal: 2 Liters</h3>
      <Cup percent={currentIndex * 12.5}>
        <h2 className="emptyBgColor">{100 - currentIndex * 12.5}%</h2>
        <h2 className="bgColor">{currentIndex * 12.5}%</h2>
      </Cup>

      <h3>Select how many glasses of water that you have drank</h3>

      <Cups>
        {Array.from(new Array(8)).map((item, index) => {
          return (
            <div
              className={`cup-small ${
                currentIndex >= index + 1 ? "active" : ""
              }`}
              key={index}
              onClick={() => handleClick(index + 1)}
            >
              250ml
            </div>
          );
        })}
      </Cups>
    </Main>
  );
}

export default DrinkWater
