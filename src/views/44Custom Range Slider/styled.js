import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  background-color: lightblue;
  position: relative;
  h2 {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const RangeContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  input[type="range"] {
    width: 300px;
    margin: 18px 0;
  }
  label {
    background-color: #fff;
    position: absolute;
    top: -25px;
    left: ${(props) => props.labelLeft}px;
    width: 80px;
    padding: 5px 0;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;