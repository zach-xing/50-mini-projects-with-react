import React, {useState} from 'react'
import styled from 'styled-components'

const Main = styled.main`
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    #e3e3e3 0%,
    #e3e3e3 50%,
    lightblue 50%,
    lightblue 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  overflow-x: hidden;
  transition: width 0.6s linear;
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 0;
    transition: width 0.6s linear;
    li {
      margin: 0 10px;
      opacity: 0;
      transition: opacity 0.6s linear;
    }
  }
  &.active {
    width: 350px;
    ul {
      width: 100%;
      li {
        opacity: 1;
      }
    }
    .line1 {
      transform: rotate(-765deg) translateY(5.5px);
    }
    .line2 {
      transform: rotate(765deg) translateY(-5.5px);
    }
  }
`;

const Icon = styled.div`
  background-color: #fff;
  border: 0;
  cursor: pointer;
  padding: 0;
  position: relative;
  height: 30px;
  width: 30px;
  .line {
    background-color: #5290f9;
    height: 2px;
    width: 20px;
    position: absolute;
    top: 10px;
    left: 5px;
    transition: transform 0.6s linear;
    &.line2 {
      top: auto;
      bottom: 10px;
    }
  }
`;

function AnimatedNavigation() {

  const [isActive, setIsActive] = useState(true)

  return (
    <Main>
      <Nav className={isActive ? "active" : ""}>
        <ul>
          <li>Home</li>
          <li>Works</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <Icon onClick={() => setIsActive(prev => !prev)}>
          <div className="line line1"></div>
          <div className="line line2"></div>
        </Icon>
      </Nav>
    </Main>
  );
}

export default AnimatedNavigation
