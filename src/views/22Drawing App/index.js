import React, {useState} from 'react'
import styled from 'styled-components'
import Draw from './draw'

const Main = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Toolbox = styled.div`
  width: 800px;
  padding: 20px;
  background-color: steelblue;
  font-size: 30px;
  display: flex;
  * {
    background-color: #fff;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    height: 50px;
    width: 50px;
    margin: 0.25rem;
    padding: 0.25rem;
    cursor: pointer;
  }
`;

function DrawingApp() {

  const [size, setSize] = useState(10)
  const [currentColor, setCurrentColor] = useState("#000")
  const [isClear, setIsClear] = useState(false);

  const decrease = () => {
    if(size > 5) {
      setSize(size - 5)
    }
  }

  const increase = () => {
    if(size < 50) {
      setSize(size + 5)
    }
  }

  const changeColor = (e) => {
    setCurrentColor(e.target.value);
  }

  // 清除 canvas
  const clearCanvas = () => {
    setIsClear(true);
    const timer = setTimeout(() => {
      setIsClear(false)
      clearTimeout(timer)
    }, 500)
  }

  return (
    <Main>
      <Draw color={currentColor} size={size} isClear={isClear} />
      <Toolbox>
        <button onClick={decrease}>-</button>
        <span>{size}</span>
        <button onClick={increase}>+</button>
        <input type="color" onBlur={changeColor} />
        <button style={{ marginLeft: "auto" }} onClick={clearCanvas}>x</button>
      </Toolbox>
    </Main>
  );
}

export default DrawingApp
