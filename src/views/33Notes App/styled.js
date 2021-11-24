import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  background-color: steelblue;
  padding: 36px;
  display: flex;
`;

export const AddButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  border: 0;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

export const Editor = styled.div`
  width: 350px;
  height: 450px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  background-color: white;
  margin: 10px 20px;
  .header{
    display: flex;
    justify-content: center;
    height: 30px;
    border-bottom: 1px solid blue;
    button {
      margin: 0 5px;
      padding: 5px;
    }
  }
  textarea {
    width: 100%;
    height: 100%;
  }
  .hidden {
    display: none;
  }
`;