import styled from "styled-components";

export const Nav = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) => props.navColor.bgColor};
  color: ${(props) => props.navColor.color};
  padding: 0 20%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  .logo {
    font-size: 24px;
    transition: color 0.3s ease-in-out;
    cursor: pointer;
    margin: 0;
    line-height: 90px;
    &:hover {
      color: brown;
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    li {
      margin: 0 20px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const Container = styled.div`
  background: url("https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
    bottom center/cover no-repeat;
  z-index: -2;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
  h1 {
    font-size: 45px;
  }
  p {
    font-size: 24px;
  }
`;

export const Section = styled.div`
  padding: 0 20%;
  p {
    font-size: 15px;
    line-height: 30px;
    letter-spacing: 1.2px;
  }
`;