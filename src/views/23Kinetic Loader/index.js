import React from 'react'
import styled, { keyframes } from 'styled-components'

const Main = styled.main`
  height: 100vh;
  background-color: steelblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotateA = keyframes`
  0%, 25% {
    transform: rotate(0deg);
  }
  50%, 75% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const rotateB = keyframes`
  0%, 25% {
    transform: rotate(90deg);
  }
  50%, 75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(450deg);
  }
`;

const KineticDiv = styled.div`
  position: relative;
  height: 80px;
  width: 80px;
  ::before,
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    border: 50px solid transparent;
    border-bottom-color: white;
    animation: ${rotateA} 2s linear infinite 0.5s;
  }
  ::after {
    transform: rotate(90deg);
    animation: ${rotateB} 2s linear infinite;
  }
`;

function KineticLoader() {
  return (
    <Main>
      <KineticDiv />
    </Main>
  )
}

export default KineticLoader
