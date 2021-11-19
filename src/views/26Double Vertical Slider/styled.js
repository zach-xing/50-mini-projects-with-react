import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  height: 100vh;
  overflow-y: hidden;
  position: relative;
`;

export const LeftSlide = styled.div`
  width: 30%;
  position: relative;
  top: -${(props) => props.count * 100}vh;
  transform: translateY(${(props) => props.index * 100}vh);
  transition: transform 0.5s ease-in-out;
  .info {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const RightSlide = styled.div`
  width: 70%;
  transform: translateY(-${(props) => props.index * 100}vh);
  transition: transform 0.5s ease-in-out;
  .info {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const DownButton = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  left: calc(30% - 60px);
  width: 60px;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px 0 0 10px;
  background-color: white;
`;

export const UpButton = styled.div`
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translateY(-100%);
  left: 30%;
  width: 60px;
  padding: 10px;
  cursor: pointer;
  border-radius: 0 10px 10px 0;
  background-color: white;
`;
