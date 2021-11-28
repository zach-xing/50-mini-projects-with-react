import React, { useState, useEffect } from "react";
import { Main, Container } from "./styled";

function RandomImageFeed() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRandomSize = () => {
      return `${getRandom()}x${getRandom()}`;
    };
    const getRandom = () => {
      return Math.floor(Math.random() * 10) + 300;
    };
    let arr = []
    for(let i=0;i<15;i++) {
      arr.push(`https://source.unsplash.com/random/${getRandomSize()}`);
    }
    setData(arr);
  }, []);

  return (
    <Main>
      <h1>Random Image Feed</h1>
      <Container>
        {
          data.map(item => {
            return (
              <img src={item} alt="" key={item} />
            )
          })
        }
      </Container>
    </Main>
  );
}

export default RandomImageFeed;
