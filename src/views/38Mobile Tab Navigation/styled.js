import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  background-color: lightpink;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhoneDiv = styled.div`
  position: relative;
  border: 3px solid #eee;
  border-radius: 15px;
  height: 600px;
  width: 340px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: calc(100% - 60px);
    opacity: 0;
    transition: opacity 0.4s ease;
    &.show {
      opacity: 1;
    }
  }
`;

export const PhoneNav = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #fff;
  .nav {
    height: 60px;
    color: #777;
    cursor: pointer;
    flex: 1;
    padding: 10px;
    text-align: center;
    &:hover {
      color: #8e44ad;
    }
    &.active {
      color: #8e44ad;
    }
  }
`;
