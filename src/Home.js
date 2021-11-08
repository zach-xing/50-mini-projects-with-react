import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconGithub } from "@arco-design/web-react/icon";

// 主体
const MyContainner = styled.main`
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  padding: 20px 20%;
  font-size: 20px;
  color: white;
  background-color: #281839;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;

// 我的信息
const MyInfo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  border-radius: 0 0 0 100%;
  background-color: #663399;
  text-align: center;
  line-height: 100px;
`;

const MyOl = styled.ol`
  li {
    margin: 10px 0;
  }
  a {
    color: #ff9e11;
    font-weight: 550;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  text-indent: 40px;
  a {
    color: white;
  }
`;

const context = require.context("./views", true, /\.js$/);
const paths = context.keys();

function Home() {


  return (
    <MyContainner>
      <MyInfo>
        <a
          href="https://github.com/Zeekg-zk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconGithub style={{ fontSize: 30, color: "white" }} />
        </a>
      </MyInfo>

      <h1>50 unique mini-projects</h1>
      <Paragraph>
        这是来自 <code> 50 Projects in 50 Days </code>
        的项目，这个项目使用<code> HTML/CSS and JavaScript </code>
        来实现，所以自己就用<code> React.js ( Hooks ) + styled-components </code>
        来实现，然后还有些其他的小组件，比如按钮，是来自字节的UI组件
        <code> arco.design </code>的组件（因为不想自己来写了，哈哈~）
      </Paragraph>

      <h2>官方链接</h2>
      <MyOl>
        <li>
          <a
            href="https://github.com/bradtraversy/50projects50days"
            target="_blank"
            rel="noreferrer"
          >
            50 Projects in 50 Days
          </a>
        </li>
        <li>
          <a href="https://arco.design/" target="_blank" rel="noreferrer">
            arco.design
          </a>
        </li>
      </MyOl>
      <h2>在线 Demo</h2>
      <MyOl>
        {paths.length &&
          paths.map((item) => {
            let label = item.split("/")[1].slice(2);
            return (
              <li key={label}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={label}
                  title={label}
                >
                  {label}
                </Link>
              </li>
            );
          })}
      </MyOl>
    </MyContainner>
  );
}

export default Home;
