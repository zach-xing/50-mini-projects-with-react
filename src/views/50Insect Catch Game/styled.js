import styled from "styled-components";

export const Main = styled.main`
  color: #fff;
  font-family: "Press Start 2P", sans-serif;
  height: 100vh;
  overflow: hidden;
  text-align: center;
`;

export const Screen = styled.div`
  position: relative;
  background-color: #516dff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  transition: margin 0.5s ease-out;
  &.up {
    margin-top: -100vh;
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`;

export const CustomBtn = styled.button`
  border: 0;
  background-color: #fff;
  color: #516dff;
  padding: 15px 20px;
  font-family: inherit;
  cursor: pointer;
`;

export const InsectsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  li {
    margin: 10px;
    button {
      background-color: transparent;
      border: 2px solid #fff;
      color: #fff;
      cursor: pointer;
      font-family: inherit;
      width: 150px;
      height: 150px;      
    }
  }
`;

export const InsectDiv = styled.img`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  transform: rotate(${(props) => props.rotate}deg);
`;

export const Tips = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
  font-size: 24px;
`;

export const MessageDiv = styled.div`
  line-height: 1.7;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 20px;
  z-index: 100;
  text-align: center;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  transition: transform 0.4s ease-in;
  &.visible {
    transform: translate(-50%, 150%);
    opacity: 1;
  }
`;