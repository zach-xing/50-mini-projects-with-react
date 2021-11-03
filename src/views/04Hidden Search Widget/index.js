import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components'
import { IconSearch } from "@arco-design/web-react/icon";

const Main = styled.div`
  background-color: lightblue;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0;
`;

const SearchBtn = styled.div`
  position: relative;
  border-radius: ${(props) => props.radius}px;
  .input {
    background-color: #fff;
    border: 0;
    padding: 10px;
    width: 50px;
    height: 50px;
    border-radius: ${(props) => props.radius}px;
    transition: width 0.3s ease;
  }
  .btn {
    background-color: #fff;
    border: 0;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    width: 50px;
    border-radius: ${(props) => props.radius}px;
    transition: transform 0.3s ease;
  }
  &.active {
    .input {
      width: 200px;
    }
    .btn {
      transform: translateX(${props => 200 - props.radius * 2}px);
    }
  }
`;

function HiddenSearch() {

  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  useEffect(() => {
    console.log(isActive);
    if (isActive) {
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  }, [isActive])

  return (
    <Main>
      <SearchBtn className={`${isActive ? "active" : ""}`} radius={20}>
        <input
          ref={inputRef}
          type="text"
          className="input"
          placeholder="Search..."
        />
        <button className="btn" onClick={handleClick}>
          <IconSearch />
        </button>
      </SearchBtn>
    </Main>
  );
}

export default HiddenSearch
