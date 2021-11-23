import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: steelblue;
`;

export const Generator = styled.div`
  background-color: #23235b;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
  padding: 20px;
  width: 350px;
  color: white;
  display: flex;
  flex-direction: column;
  .result {
    display: flex;
    p {
      margin: 0;
      flex: 1;
      padding: 5px;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;

export const Setting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const MyButton = styled.div`
  border: none;
  background-color: #3b3b98;
  text-align: center;
  color: #fff;
  font-size: 16px;
  padding: 8px 12px;
  cursor: pointer;
`;