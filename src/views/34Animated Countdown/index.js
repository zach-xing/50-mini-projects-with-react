import React, { useState } from "react";
import { Main, CountDown, NumsDiv, FinalDiv } from "./styled";

const initalArr = [
  {
    text: 3,
    className: "in",
  },
  {
    text: 2,
    className: "",
  },
  {
    text: 1,
    className: "",
  },
];

function AnimatedCountdown() {
  const [numArr, setNumArr] = useState(initalArr);
  const [finalShow, setFinalShow] = useState(false);
  
  const handleAnimationEnd = (e, index) => {
    let curclass = e.nativeEvent.target.className;
    // 这里需要使用深拷贝（避免修改 initalArr 的值）
    let tempArr = JSON.parse(JSON.stringify(numArr));
    if (curclass === "in") {
      tempArr[index].className = "out";
    } else if (curclass === "out" && numArr[index + 1]) {
      tempArr[index + 1].className = "in";
    } else {
      setFinalShow(true);
    }
    setNumArr(tempArr);
  };

  // 重新播放
  const handleAgain = () => {
    setNumArr(initalArr);
    setFinalShow(false);
  };

  return (
    <Main>
      <CountDown>
        <NumsDiv className={finalShow ? "hidden" : ""}>
          {numArr.map((item, index) => {
            return (
              <span
                key={item.text + "" + index}
                className={item.className}
                onAnimationEnd={(e) => handleAnimationEnd(e, index)}
              >
                {item.text}
              </span>
            );
          })}
        </NumsDiv>

        <FinalDiv className={finalShow ? "" : "hidden"}>
          <p>播放结束</p>
          <button onClick={handleAgain}>AGAIN</button>
        </FinalDiv>
      </CountDown>
    </Main>
  );
}

export default AnimatedCountdown;
