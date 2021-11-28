import React, { useState, useRef } from "react";
import { Main, QuizContainer, CustomBtn } from "./styled";

const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

function QuizApp() {
  const [curIndex, setCurIndex] = useState(0);
  const answerRef = useRef();
  const correctCount = useRef(0);

  const handleSubmit = () => {
    for (let i = 0; i < answerRef.current.children.length; i++) {
      // 判断当前选中的，并且是正确答案时就累加一
      if (
        answerRef.current.children[i].children[0].checked &&
        answerRef.current.children[i].children[0].id ===
          quizData[curIndex].correct
      ) {
        correctCount.current++;
      }      
    }
    deselectAnswers();
    setCurIndex((prev) => prev + 1);
  };

  // 将所有设置成 false
  const deselectAnswers = () => {
    for (let i = 0; i < answerRef.current.children.length; i++) {
      answerRef.current.children[i].children[0].checked = false;
    }
  };

  return (
    <Main>
      <QuizContainer>
        {curIndex < quizData.length ? (
          <>
            <h2>{quizData[curIndex].question}</h2>
            <ul ref={answerRef}>
              <li>
                <input type="radio" name="answer" id="a" />
                <label htmlFor="a">{quizData[curIndex].a}</label>
              </li>
              <li>
                <input type="radio" name="answer" id="b" />
                <label htmlFor="b">{quizData[curIndex].b}</label>
              </li>
              <li>
                <input type="radio" name="answer" id="c" />
                <label htmlFor="c">{quizData[curIndex].c}</label>
              </li>
              <li>
                <input type="radio" name="answer" id="d" />
                <label htmlFor="d">{quizData[curIndex].d}</label>
              </li>
            </ul>
            <CustomBtn onClick={handleSubmit}>Submit</CustomBtn>
          </>
        ) : (
          <>
            <h2>
              You answered {correctCount.current}/{quizData.length} questions
              correctly
            </h2>
            <CustomBtn onClick={() => window.location.reload()}>
              Reload
            </CustomBtn>
          </>
        )}
      </QuizContainer>
    </Main>
  );
}

export default QuizApp;
