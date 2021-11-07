import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  height: 100vh;
  background-color: lightblue;
  justify-content: space-around;
  align-items: center;
  padding: 0 20%;
  font-size: 24px;
  font-weight: bold;
  div {
    width: 180px;
    height: 100px;
    background-color: lightgreen;
    text-align: center;
    line-height: 100px;
    outline: 1px solid black;
  }
`;

function EventKeycodes() {

  const [content, setContent] = useState("Press any key to get the keyCode");

  const handleKeydown = (event) => {
    setContent(`
      <div>${event.key === " " ? "Space" : event.key}</div>
      <div>${event.keyCode}</div>
      <div>${event.code}</div
    `);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    }
  }, []);

  return (
    <Main dangerouslySetInnerHTML={{ __html: content }}>
    </Main>
  );
}

export default EventKeycodes;
