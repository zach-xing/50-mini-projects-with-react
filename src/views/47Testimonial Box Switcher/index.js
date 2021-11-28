import React, {useState} from 'react'
import { Main, Card, ProgressBar, UserDiv } from "./styled";
import testimonials from './data'
import useSetInterval from '../../utils/useSetInterval';

function TestimonialBoxSwitcher() {

  const [curIndex, setCurIndex] = useState(0)

  useSetInterval(() => {
    setCurIndex(prev => prev+1)
  }, 10000)

  return (
    <Main>
      <Card>
        <ProgressBar />
        <p>{testimonials[curIndex].text}</p>
        <UserDiv>
          <img src={testimonials[curIndex].photo} alt="" />
          <div className="info">
            Name：{testimonials[curIndex].name} | Position：
            {testimonials[curIndex].position}
          </div>
        </UserDiv>
      </Card>
    </Main>
  );
}

export default TestimonialBoxSwitcher
