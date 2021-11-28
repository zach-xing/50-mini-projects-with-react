import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  background-color: #b8c6db;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuizContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
  width: 600px;
  overflow: hidden;
  padding: 50px;
  h2 {
    text-align: center;
    margin-bottom: 60px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 40px;
    li {
      font-size: 1.2rem;
      margin: 1rem 0;
      input {
        margin-right: 30px;
      }
      label {
        cursor: pointer;
      }
    }
  }
`;

export const CustomBtn = styled.button`
  background-color: #8e44ad;
  color: #fff;
  border: none;
  display: block;
  width: 100%;
  cursor: pointer;
  font-size: 1.1rem;
  font-family: inherit;
  padding: 1.3rem;
  &:hover {
    background-color: #732d91;
  }
  &:focus {
    outline: none;
    background-color: #5e3370;
  }
`;