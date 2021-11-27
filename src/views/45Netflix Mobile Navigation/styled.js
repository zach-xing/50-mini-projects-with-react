import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  position: relative;
`;

export const Me = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  padding: 36px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  img {
    border-radius: 20px;
    width: 50%;
  }
`;

export const OpenBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 24px;
  position: fixed;
  top: 15px;
  left: 15px;
`;

export const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  &.visible {
    transform: translateX(0);
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      margin: 20px 0;
    }
  }
  /* 黑色 */
  .navblack {
    background-color: rgb(34, 31, 31);
    width: 60%;
    max-width: 480px;
    min-width: 320px;
    transition-delay: 0.4s;
    &.visible {
      transition-delay: 0s;
    }
    /* 红色 */
    .navred {
      background-color: rgb(229, 9, 20);
      width: 95%;
      transition-delay: 0.2s;
      &.visible {
        transition-delay: 0.2s;
      }
      /* 白色 */
      .navwhite {
        background-color: #fff;
        width: 95%;
        padding: 40px;
        position: relative;
        transition-delay: 0s;
        &.visible {
          transition-delay: 0.4s;
        }
      }
    }
  }
`;

export const CloseBtn = styled.button`
  opacity: 0.3;
  position: absolute;
  top: 40px;
  right: 30px;
`;