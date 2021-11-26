import React, {useState} from 'react'
import { Main, Carousel, Imgs, ToggleButtons } from "./styled";
import useSetTimeout from '../../utils/useSetTimeout'

const iamges = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80",
  },
];

function ImageCarousel() {

  const [current, setCurrent] = useState(0)

  useSetTimeout(() => {
    setCurrent(prev => {
      return (prev + 1 + iamges.length) % iamges.length;
    })
  }, 1500)

  const handleToggle = (index) => {
    setCurrent((index + iamges.length) % iamges.length);
  }

  return (
    <Main>
      <Carousel>
        {iamges.map((item) => {
          return (
            <Imgs index={current} src={item.img} key={item.id} alt={item.id} />
          );
        })}
      </Carousel>

      <ToggleButtons>
        <button onClick={() => handleToggle(current - 1)}>prev</button>
        <button onClick={() => handleToggle(current + 1)}>next</button>
      </ToggleButtons>
    </Main>
  );
}

export default ImageCarousel
