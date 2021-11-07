import React from 'react'
import styled from 'styled-components'

const Main  = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #e3e3e3;
  align-items: center;
`;

const FAQdiv = styled.div`
  margin: 20px 0;
  width: 35%;
  height: 100px;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background-color: lightblue;
  text-align: center;
  line-height: 100px;
  h3 {
    margin: 0;
  }
`;

function FaqCollapse() {
  return (
    <Main>
      <h1>Frequently Asked Questions</h1>
      <FAQdiv>
        <h3>Why shouldn't we trust atoms?</h3>
      </FAQdiv>
      <FAQdiv>3</FAQdiv>
      <FAQdiv>3</FAQdiv>
    </Main>
  );
}

export default FaqCollapse
