import React, { useState, useEffect } from "react";
import { Main, ToggleDiv } from "./styled";

const Toggle = (props) => {
  const [active, setActive] = useState(props.value);

  useEffect(() => {
    setActive(props.value);
  }, [props.value])

  return (
    <ToggleDiv className={active ? "active" : ""} onClick={props.onClick} >
      <div className="shell">
        <div className="bell"></div>
      </div>
      <span>{props.title}</span>
    </ToggleDiv>
  );
};

function GoodCheapFast() {

  const [good, setGood] = useState(false);
  const [cheap, setCheap] = useState(false);
  const [fast, setFast] = useState(false);

  useEffect(() => {
    if(good === true && cheap === true && fast === true) {
      setGood((prev) => !prev);
    }
  }, [good, cheap, fast])

  return (
    <Main>
      <h2>How do you want your project to be?</h2>

      {/* 这里的 onClick 自定义组件不是一个真实的 DOM，不存在点击事件
          需要传给真实的 DOM，也就是给传给子组件定义 */}
      <Toggle
        title="Good"
        value={good}
        onClick={() => setGood((prev) => !prev)}
      />
      <Toggle
        title="Cheap"
        value={cheap}
        onClick={() => setCheap((prev) => !prev)}
      />
      <Toggle
        title="Fast"
        value={fast}
        onClick={() => setFast((prev) => !prev)}
      />
    </Main>
  );
}

export default GoodCheapFast;
