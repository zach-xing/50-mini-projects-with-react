import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PanelContainer = styled.div`
  background-color: #fff;
  border: 3px #000 solid;
  border-radius: 10px;
  padding: 30px;
  max-width: 1000px;
  text-align: center;
`;

export const CodeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

export const CodeDiv = styled.input`
  caret-color: transparent;
  border-radius: 5px;
  font-size: 75px;
  height: 120px;
  width: 100px;
  border: 1px solid #eee;
  margin: 1%;
  text-align: center;
  font-weight: 300;
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:valid {
    border-color: green;
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.25);
  }
  &:focus {
    border: 2px solid black;
  }
`;