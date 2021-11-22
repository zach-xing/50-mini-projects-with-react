import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  background-color: #e3e3e3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Speed = styled.div`
  font-size: 24px;
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  input {
    margin-left: 20px;
    height: 30px;
  }
`;