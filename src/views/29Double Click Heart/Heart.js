import React from "react";
import { HeartDiv } from "./styled";

function Heart(props) {
  return (
    <HeartDiv x={props.x} y={props.y}>
      ❤
    </HeartDiv>
  );
}

export default Heart;
