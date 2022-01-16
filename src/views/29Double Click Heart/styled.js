import styled, { keyframes } from "styled-components";

export const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Photo = styled.div`
  height: 440px;
  width: 300px;
  background: url("https://avatars.githubusercontent.com/u/54023155?v=4")
    no-repeat center center/cover;
  margin: auto;
  cursor: pointer;
  max-width: 100%;
  position: relative;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  overflow: hidden;
`;

const grow = keyframes`
  to {
    transform: translate(-50%, -50%) scale(10);
    opacity: 0;
  }
`;

export const HeartDiv = styled.div`
  position: absolute;
  color: red;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  animation: ${grow} 0.6s linear;
  transform: translate(-50%, -50%) scale(0);
`;
