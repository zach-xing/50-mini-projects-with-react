import React, { useState } from "react";
import { Main, Me, OpenBtn, Nav, CloseBtn } from "./styled";
import { IconList, IconClose } from "@arco-design/web-react/icon";

function NetflixMobileNavigation() {
  const [show, setShow] = useState(false);

  return (
    <Main>
      <OpenBtn onClick={() => setShow(true)}>
        <IconList />
      </OpenBtn>

      <Nav className={`${show ? "visible" : ""}`}>
        <Nav className={`navblack ${show ? "visible" : ""}`}>
          <Nav className={`navred ${show ? "visible" : ""}`}>
            <Nav className={`navwhite ${show ? "visible" : ""}`}>
              <CloseBtn onClick={() => setShow(false)}>
                <IconClose />
              </CloseBtn>
              <ul>
                <li>黄梅时节家家雨</li>
                <li>青草池塘处处蛙</li>
                <li>有约不来过夜半</li>
                <li>闲敲棋子落灯花</li>
                <li>
                  <a
                    href="https://github.com/Zeekg-zk/50-mini-projects-with-react"
                    target="_blank"
                    rel="noreferrer"
                  >
                    我的GITHUB
                  </a>
                </li>
              </ul>
            </Nav>
          </Nav>
        </Nav>
      </Nav>

      <Me>
        <img
          src="https://avatars.githubusercontent.com/u/54023155?v=4"
          alt=""
        />
        <h3>Zeekg</h3>
      </Me>
    </Main>
  );
}

export default NetflixMobileNavigation;
