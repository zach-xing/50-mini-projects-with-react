import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Button } from "@arco-design/web-react";

const Main = styled.main`
  height: 100vh;
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  .active {
    width: 75%;
  }
  .noactive {
    width: 25%;
  }
`;

const SplitDiv = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 50%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 1s ease-in-out;
`;

function SplitLandingPage() {
  const container = useRef()
  const leftRef = useRef()
  const rightRef = useRef();

  const addClass = (node, className) => {
    node.classList.add(className);
  }

  const removeClass = (node, className) => {
    node.classList.remove(className);
  };

  useEffect(() => {
    leftRef.current.addEventListener("mouseenter", () => {
      addClass(leftRef.current, "active");
      addClass(rightRef.current, "noactive");
    })
    leftRef.current.addEventListener("mouseleave", () => {
      removeClass(leftRef.current, "active");
      removeClass(rightRef.current, "noactive");
    });
    rightRef.current.addEventListener("mouseenter", () => {
      addClass(rightRef.current, "active");
      addClass(leftRef.current, "noactive");
    });
    rightRef.current.addEventListener("mouseleave", () => {
      removeClass(rightRef.current, "active");
      removeClass(leftRef.current, "noactive");
    });
  }, [])

  return (
    <Main ref={container}>
      <SplitDiv
        ref={leftRef}
        backgroundImage={
          "https://pic2.zhimg.com/80/v2-d03be396471ceda63e3877b2012f3f60_720w.jpg?source=1940ef5c"
        }
      >
        <h1>Hello</h1>
        <Button shape="round" type="primary" size="large">
          Click me
        </Button>
      </SplitDiv>
      <SplitDiv
        ref={rightRef}
        backgroundImage={
          "https://pic2.zhimg.com/80/v2-7fe865da8dc0277e598a73105dc35cfa_720w.jpg?source=1940ef5c"
        }
      >
        <h1>World</h1>
        <Button shape="round" type="primary" size="large">
          Click me
        </Button>
      </SplitDiv>
    </Main>
  );
}

export default SplitLandingPage;
