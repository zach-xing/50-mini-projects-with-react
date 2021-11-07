import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@arco-design/web-react";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #686de0;
  margin: 0;
  height: 100vh;
  overflow: hidden;
`;

const ShowDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 50%;
  background-color: white;
  border: 0;
  border-radius: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  h1 {
    color: #281839;
    margin: 0;
    text-align: center;
  }
  p {
    width: 80%;
    font-size: 30px;
    margin: 50px auto;
  }
`;

function DadJokes() {

  const [joke, setJoke] = useState("")
  const [query, setQuery] = useState(0);

  useEffect(() => {
    // 发送请求
    const fetchData = async () => {
      const res = await fetch("https://icanhazdadjoke.com", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await res.json();
      return data.joke;
    };
    fetchData().then((res) => {
      setJoke(res);
    });
  }, [query]);

  return (
    <Main>
      <ShowDiv>
        <h1>Don't Laugh Challenge</h1>
        <p>{joke}</p>
        <Button type="primary" size="large" onClick={() => setQuery(query + 1)}>
          Change
        </Button>
      </ShowDiv>
    </Main>
  );
}

export default DadJokes;
