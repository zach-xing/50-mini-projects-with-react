import React, {useState} from 'react'
import styled from 'styled-components'

const Main = styled.main`
  height: 100vh;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  textarea {
    border: 0;
    height: 150px;
    width: 360px;
    margin: 20px 0;
  }
`;

const Tag = styled.div`
  display: inline-block;
  padding: 3px 15px;
  height: 30px;
  border-radius: 20px;
  background-color: #f0932b;
  text-align: center;
  line-height: 30px;
  margin: 0 5px;

`;

function RandomChoicePicker() {

  const [tags, setTags] = useState([])

  // 防抖
  const debance = (fn, delay) => {
    let timer = null;
    return (e) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn(e);
      }, delay);
    };
  };

  const onInputChange = debance((e) => {
    let arr = e.target.value.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim());
    setTags(arr)
  }, 300)

  return (
    <Main>
      <h3>Enter all of the choices divided by a comma (','). </h3>
      <h3>Press enter when you're done</h3>
      <textarea placeholder="Enter choices here..." onChange={onInputChange}></textarea>
      <div style={{width: "500px"}}>
        {tags.map((item, index) => {
          return <Tag key={index}>{item}</Tag>;
        })}
      </div>
    </Main>
  );
}

export default RandomChoicePicker
