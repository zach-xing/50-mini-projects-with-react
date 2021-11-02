import React, { useState } from "react";
import styled from "styled-components";

const MyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const MyCard = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.bgurl});
  height: 80vh;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  margin: 10px;
  flex: 0.5;
  position: relative;
  transition: all 700ms ease-in;
  h2 {
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: 0;
  }
  &.active {
    flex: 5;
  }
  &.active h2 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
  }
`;

const bgUrls = [
  "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
  "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
];

function ExpandingCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <MyContainer>
      {bgUrls.length &&
        bgUrls.map((item, index) => (
          <MyCard
            key={item}
            bgurl={item}
            className={`${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            <h2>Hello</h2>
          </MyCard>
        ))}
    </MyContainer>
  );
}

export default ExpandingCards;
