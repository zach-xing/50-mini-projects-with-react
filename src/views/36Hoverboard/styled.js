import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SquareContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 400px;
`;

export const Square = styled.div`
  background-color: #1d1d1d;
  box-shadow: 0 0 2px #000;
  height: 16px;
  width: 16px;
  margin: 2px;
  transition: 2s ease;
  &:hover {
    transition-duration: 0s;
  }
`;