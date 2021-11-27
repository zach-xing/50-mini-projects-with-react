import React, { useState } from "react";
import {
  Main,
  Panel,
  RatingsContainer,
  Rating,
  CustomBtn,
  ResultDiv,
} from "./styled";

const infos = ["😞 Unhappy", "😑 Neutral", "😀 Satisfied"];

function FeedbackUiDesign() {
  const [info, setInfo] = useState("")
  const [showResult, setShowResult] = useState(false);

  // 选择满意程度
  const handleRate = (index) => {
    setInfo(infos[index])
  }

  const handleSend = () => {
    setShowResult(true);
  }

  return (
    <Main>
      <Panel>
        {showResult ? (
          <ResultDiv>
            <h3>Thank You!</h3>
            <h3>Feedback: {info}</h3>
          </ResultDiv>
        ) : (
          <>
            <h3>How satisfied are you with our</h3>
            <h3>customer support performance?</h3>
            <RatingsContainer>
              {infos.map((item, index) => {
                return (
                  <Rating
                    key={item}
                    onClick={() => handleRate(index)}
                    className={info === infos[index] ? "active" : ""}
                  >
                    {item}
                  </Rating>
                );
              })}
            </RatingsContainer>
            <CustomBtn onClick={handleSend}>Send</CustomBtn>
          </>
        )}
      </Panel>
    </Main>
  );
}

export default FeedbackUiDesign;
