import React, {useState} from 'react'
import styled from 'styled-components'
import { IconUp, IconDown } from "@arco-design/web-react/icon";

const Main  = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #e3e3e3;
  align-items: center;
`;

const FAQdiv = styled.div`
  position: relative;
  margin: 20px 0;
  width: 35%;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background-color: #e3e3e3;
  text-align: center;
  line-height: 100px;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
    display: none;
    font-size: 16px;
  }
  &.active {
    background-color: white;
    p {
      display: block;
    }
    ::after {
      content: "\f075";
      font-family: "Font Awesome 5 Free";
      color: #2ecc71;
      font-size: 7rem;
      position: absolute;
      opacity: 0.2;
      top: 20px;
      left: 20px;
      z-index: 0;
    }
  }
`;

const ToggleBtn = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
`;

const data = [
  {
    title: "Why shouldn't we trust atoms?",
    ans: "They make up everything.",
  },
  {
    title: "What do you call someone with no body and no nose?",
    ans: "Nobody knows.",
  },
  {
    title: "What's the object-oriented way to become wealthy?",
    ans: "Inheritance.",
  },
  {
    title: "How many tickles does it take to tickle an octopus?",
    ans: "Ten-tickles!",
  },
  {
    title: "What is: 1 + 1?",
    ans: "Depends on who are you asking.",
  },
];

function FaqCollapse() {

  const [activeArr, setActiveArr] = useState(() => {
    return Array.from(new Array(data.length), () => false)
  });

  const handleActiveArr = (index) => {
    setActiveArr(prevArr => {
      // 这里要重新新创一个数组，不然的话会被判定为值未改变而不会重渲染组件
      let tempArr = prevArr.slice(0)
      tempArr[index] = !tempArr[index];
      return tempArr;
    })
  }

  return (
    <Main>
      <h1>Frequently Asked Questions</h1>
      {
        data.map((item, index) => {
          return (
            <FAQdiv key={item.ans} className={activeArr[index] ? "active" : ""}>
              <h3>{item.title}</h3>
              <p>{item.ans}</p>
              <ToggleBtn onClick={() => handleActiveArr(index)}>
                {activeArr[index] ? <IconUp /> : <IconDown />}
              </ToggleBtn>
            </FAQdiv>
          );
        })
      }
    </Main>
  );
}

export default FaqCollapse
