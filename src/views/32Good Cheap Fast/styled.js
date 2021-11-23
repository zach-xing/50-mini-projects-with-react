import styled, { keyframes } from "styled-components";

export const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const slideOff = keyframes`
  0% {
    transform: translateX(40px) scale(1);
  }
  50% {
    transform: translateX(20px) scale(1.2);
  }
  100% {
    transform: translateX(0) scale(1);
  }
`;

const slideOn = keyframes`
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(20px) scale(1.2);
  }
  100% {
    transform: translateX(40px) scale(1);
  }
`;

export const ToggleDiv = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  margin: 20px;
  .shell {
    position: relative;
    background-color: #d0d0d0;
    border-radius: 50px;
    cursor: pointer;
    display: inline-block;
    margin: 0 15px 0;
    width: 80px;
    height: 40px;
    .bell {
      position: absolute;
      top: 3px;
      left: 3px;
      background: #fff;
      height: 34px;
      width: 34px;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      animation: ${slideOff} 0.3s linear forwards;
    }
  }
  &.active {
    .shell {
      background-color: #8e44ad;
    }
    .bell {
      animation: ${slideOn} 0.3s linear forwards;
    }
  }
`;
