import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@arco-design/web-react";

const MyContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #e0e0e0;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
  }
`;

const Progress = styled.div`
  position: absolute;
  height: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: ${(props) => props.width}%;
  background-color: lightblue;
  z-index: -1;
  transition: 0.4s ease;
`;

const Circle = styled.div`
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #e0e0e0;
  transition: 0.4s ease;
  &.active {
    background-color: lightblue;
  }
`;

function ProgressSteps() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 上一步
  const prevHandler = () => {
    setCurrentIndex(currentIndex - 1);
  };

  // 下一步
  const nextHandler = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <MyContainer>
      <ProgressContainer>
        <Progress width={(100 / 3) * currentIndex} />
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <Circle
              key={item}
              className={`${index <= currentIndex ? "active" : ""}`}
            >
              {item}
            </Circle>
          );
        })}
      </ProgressContainer>

      <div style={{ display: "flex", marginTop: 30 }}>
        <Button
          type="primary"
          style={{ marginRight: 30 }}
          disabled={currentIndex === 0}
          onClick={prevHandler}
        >
          上一步
        </Button>
        <Button
          type="primary"
          disabled={currentIndex === 3}
          onClick={nextHandler}
        >
          下一步
        </Button>
      </div>
    </MyContainer>
  );
}

export default ProgressSteps;
