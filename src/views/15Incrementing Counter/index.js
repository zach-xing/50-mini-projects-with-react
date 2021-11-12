import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import {
  IconTwitter,
  IconWechat,
  IconFacebook,
} from "@arco-design/web-react/icon";

const Main = styled.main`
  height: 100vh;
  background-color: purple;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CounterDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  margin: 0 20px;
  .counter {
    font-size: 50px;
  }
  span {
    font-family: "Roboto Mono";
  }
`;

const CounterBlock = (props) => {

  const timer = useRef();
  const [num, setNum] = useState(0)

  useEffect(() => {
    const increment = Math.ceil(props.num / 100);
    const updateConter = () => {
      setNum((prev) => {
        if (prev === props.num - increment) {
          timer.current && clearTimeout(timer.current);
        }
        return prev + increment;
      });
    };
    timer.current = setInterval(updateConter, 15);
    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, [props.num]);

  return (
    <CounterDiv>
      {props.children}
      <div className="counter">{num}</div>
      <span>Twitter Followers</span>
    </CounterDiv>
  );
}

function IncrementingCounter() {

  return (
    <Main>
      <CounterBlock num={20000}>
        <IconTwitter style={{ fontSize: 50, margin: "10px auto" }} />
      </CounterBlock>
      <CounterBlock num={34000}>
        <IconWechat style={{ fontSize: 50, margin: "10px auto" }} />
      </CounterBlock>
      <CounterBlock num={1000}>
        <IconFacebook style={{ fontSize: 50, margin: "10px auto" }} />
      </CounterBlock>
    </Main>
  );
}

export default IncrementingCounter
