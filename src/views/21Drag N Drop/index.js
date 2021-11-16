import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.main`
  padding: 0 20%;
  height: 100vh;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const EmptyBlock = styled.div`
  height: 150px;
  width: 150px;
  border: 3px solid black;
  background-color: white;
  border-radius: 20px;
`;

const FillBlock = styled.div`
  border-radius: 20px;
  cursor: pointer;
  height: 100%;
  width: 100%;
  background: url("https://source.unsplash.com/random/800x600") center/cover;
`;

function DragNDrop() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dragEnter = (e, index) => {
    e.preventDefault();
    setCurrentIndex(index);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Main>
      {Array.from(new Array(5)).map((item, index) => {
        return (
          <EmptyBlock
            key={index}
            onDragOver={dragOver}
            onDragEnter={(e) => dragEnter(e, index)}
          >
            {currentIndex === index ? (
              <FillBlock
                draggable="true"
              />
            ) : null}
          </EmptyBlock>
        );
      })}
    </Main>
  );
}

export default DragNDrop;
