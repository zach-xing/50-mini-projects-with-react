import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
`;

export const Header = styled.header`
  background-color: #3e57db;
  color: #fff;
  padding: 30px 20px;
  input {
    background-color: rgba(0, 0, 0, 0.3);
    border: 0;
    border-radius: 50px;
    color: #fff;
    font-size: 14px;
    padding: 10px 15px;
    width: 100%;
  }
`;

export const ResultDiv = styled.ul`
  background-color: #fff;
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-height: 400px;
  overflow-y: auto;
  li {
    display: flex;
    padding: 20px;
    img {
      border-radius: 50%;
      object-fit: cover;
      height: 50px;
      width: 50px;
      margin-right: 15px;
    }
    h4 {
      margin: 0 0 10px;
    }
    p {
      font-size: 12px;
    }
    &.hide {
      display: none;
    }
  }
`;