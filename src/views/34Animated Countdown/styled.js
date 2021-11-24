import styled, { keyframes } from "styled-components";

export const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .hidden {
    display: none;
  }
`;

export const CountDown = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const goIn = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(120deg);
  }

  30% {
    transform: translate(-50%, -50%) rotate(-20deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(10deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
`;

export const goOut = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(20deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-120deg);
  }
`;

export const NumsDiv = styled.div`
  color: #3498db;
  font-size: 50px;
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 50px;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(120deg);
    transform-origin: bottom center;
  }
  .in {
    transform: translate(-50%, -50%) rotate(0deg);
    animation: ${goIn} 0.5s ease-in-out;
  }
  .out {
    animation: ${goOut} 0.5s ease-in-out;
  }
`;

export const FinalDiv = styled.div`
  button {
    background-color: lightgreen;
    border: 0;
    padding: 10px;
    font-size: 16px;
    border-radius: 20px;
    cursor: pointer;
  }
`;