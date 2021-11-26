import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomBtn = styled.button`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  font-size: 16px;
  color: black;
`;

export const Boxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 500px;
  width: 500px;
  position: relative;
  transition: 0.4s ease;
  &.big {
    width: 600px;
    height: 600px;
    .box {
      transform: rotateZ(360deg);
    }
  }
  .box {
    background-image: url("https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif");
    background-repeat: no-repeat;
    background-size: 500px 500px;
    position: relative;
    height: 125px;
    width: 125px;
    transition: 0.4s ease;
    &::before {
      content: "";
      background-color: #f6e58d;
      position: absolute;
      top: 8px;
      right: -15px;
      height: 100%;
      width: 15px;
      transform: skewY(45deg);
    }
    &::after {
      content: "";
      background-color: #f9ca24;
      position: absolute;
      bottom: -15px;
      left: 8px;
      height: 15px;
      width: 100%;
      transform: skewX(45deg);
    }
  }
`;