import React, {useState,useRef} from 'react'
import styled, {keyframes} from 'styled-components'

const Main = styled.div`
  height: 100vh;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const scale = keyframes`
  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(3);
  }
`;

const MyButton = styled.button`
  background-color: purple;
  color: #fff;
  border: 1px purple solid;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px 30px;
  overflow: hidden;
  margin: 10px 0;
  position: relative;
  &:focus {
    outline: none;
  }
  &.active::before {
    content: "";
    position: absolute;
    background-color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: ${scale} 0.5s ease-out;
  }
`;

function ButtonRippleEffect() {

  const [show, setShow] = useState(false)
  const timer = useRef()

  const handleClick = (e) => {
    setShow(true)
    timer.current = setTimeout(() => {
      setShow(false)
      clearTimeout(timer.current)
    }, 500)
  }

  return (
    <Main>
      <MyButton onClick={handleClick} className={show ? "active" : ""}>
        Click Me
      </MyButton>
    </Main>
  );
}

export default ButtonRippleEffect
