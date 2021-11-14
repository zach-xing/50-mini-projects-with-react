import React, {useState} from 'react'
import styled from 'styled-components'

const Main = styled.main`
  margin: 0;
  height: 100vh;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  width: 100vw;
  height: 100vh;
  .btn {
    position: fixed;
    background-color: transparent;
    color: #fff;
    width: 100px;
    padding: 20px;
    font-size: 24px;
    border: 2px solid orange;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .btn1 {
    left: calc(20vh - 100px);
  }
  .btn2 {
    right: calc(20vh - 100px);
  }
`;

const ImgDiv = styled.div`
  position: relative;
  box-shadow: inset 0 0 0 20vh rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  background: url("${(props) => props.img}") center/cover;
  transition: all 0.4s ease;
`;

const imgs = [
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
  "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
];

function BackgroundSlider() {

  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <Main>
      <SlideContainer>
        {imgs.map((item, index) => {
          return <ImgDiv img={imgs[currentIndex]} key={index} />;
        })}
        <button
          className="btn btn1"
          onClick={() =>
            setCurrentIndex((currentIndex + 1 + imgs.length) % imgs.length)
          }
        >
          up
        </button>
        <button
          className="btn btn2"
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + imgs.length) % imgs.length)
          }
        >
          down
        </button>
      </SlideContainer>
    </Main>
  );
}

export default BackgroundSlider
