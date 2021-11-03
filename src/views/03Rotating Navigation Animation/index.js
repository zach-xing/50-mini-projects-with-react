import React, { useState } from "react";
import styled from "styled-components";
import { IconClose, IconApps } from "@arco-design/web-react/icon";

const Div = styled.div`
  background-color: #333;
  color: #222;
  overflow-x: hidden;
  margin: 0;
`;

const MyContainer = styled.div`
  padding: 50px 14%;
  width: 100vw;
  min-height: 100vh;
  background-color: #fafafa;
  transform-origin: top left;
  transition: transform 0.5s linear;
  &.active {
    transform: rotate(-20deg);
  }
`;

const CircleContainer = styled.div`
  position: fixed;
  top: -100px;
  left: -100px;
  .circle {
    background-color: #ff7979;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    position: relative;
    transition: transform 0.5s linear;
    &.active {
      transform: rotate(-70deg);
    }
    .open {
      position: absolute;
      height: 100px;
      top: 50%;
      left: 60%;
      font-size: 26px;
      color: #fff;
    }
    .close {
      position: absolute;
      height: 100px;
      top: 50%;
      left: 50%;
      top: 60%;
      font-size: 26px;
      color: #fff;
      transform: rotate(90deg);
      transform-origin: top left;
    }
  }
`;

const Nav = styled.ul`
  position: fixed;
  bottom: 40px;
  left: 0;
  z-index: 100;
  list-style-type: none;
  padding-left: 30px;
  li {
    font-size: 18px;
    margin-top: 10px;
    margin-left: 50px;
    text-transform: uppercase;
    color: #fff;
    transform: translateX(-100%);
    transition: transform 0.4s ease-in;
  }
`;

const Content = styled.div`
  margin: 50px auto;
  &.active {
    transform: rotate(-20deg);
  }
  h1 {
    margin: 0;
  }
  small {
    color: #555;
    font-style: italic;
  }
  p {
    color: #333;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
  }
`;

function RotatingNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Div>
      <MyContainer className={`${isOpen ? "active" : ""}`}>
        <CircleContainer>
          <div className={`circle ${isOpen ? "active" : ""}`}>
            <IconClose className="close" onClick={() => setIsOpen(false)} />
            <IconApps className="open" onClick={() => setIsOpen(true)} />
          </div>
        </CircleContainer>

        <Content>
          <h1>Amazing Article</h1>
          <small>Florin Pop</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quia in ratione dolores cupiditate, maxime aliquid impedit dolorem
            nam dolor omnis atque fuga labore modi veritatis porro laborum
            minus, illo, maiores recusandae cumque ipsa quos. Tenetur,
            consequuntur mollitia labore pariatur sunt quia harum aut. Eum
            maxime dolorem provident natus veritatis molestiae cumque quod
            voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa.
            Corrupti, laudantium iure aliquam rerum sint nam quas dolor
            dignissimos in error placeat quae temporibus minus optio eum soluta
            cupiditate! Cupiditate saepe voluptates laudantium. Ducimus
            consequuntur perferendis consequatur nobis exercitationem molestias
            fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
          </p>

          <h3>My Dog</h3>
          <img
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            alt="doggy"
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
            deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
            facere earum unde harum. Ea culpa veritatis magnam at aliquid.
            Perferendis totam placeat molestias illo laudantium? Minus id minima
            doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
            temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
            explicabo provident. Voluptates sint, neque fuga cum illum, tempore
            autem maxime similique laborum odio, magnam esse. Aperiam?
          </p>
        </Content>
      </MyContainer>

      <Nav>
        <li>home</li>
        <li>blog</li>
        <li>about</li>
      </Nav>
    </Div>
  );
}

export default RotatingNavigation;
