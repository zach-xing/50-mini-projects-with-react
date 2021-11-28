import styled from 'styled-components'

export const Main = styled.main`
  background-color: #daddfc;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 0;
    color: black;
    font-size: 10rem;
    text-align: center;
    opacity: 0.4;
  }
  input {
    border: none;
    color: #444;
    font-size: 2rem;
    padding: 1rem 2rem;
    display: block;
    width: 400px;
  }
`;

export const Todos = styled.ul`
  background-color: #fff;
  margin: 0;
  width: 400px;
  list-style-type: none;
  li {
    border-top: 1px solid #e5e5e5;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    &.completed {
      color: #b6b6b6;
      text-decoration: line-through;
    }
  }
`;