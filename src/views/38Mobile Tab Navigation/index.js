import React, { useState } from "react";
import { Main, PhoneDiv, PhoneNav } from "./styled";
import { IconTag } from "@arco-design/web-react/icon";

const images = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
];

function MobileTabNavigation() {
  const [curIndex, setCurIndex] = useState(0);

  return (
    <Main>
      <PhoneDiv>
        {
          images.map((item, index) => {
            return (
              <img
                src={images[index]}
                alt=""
                className={curIndex === index ? "show" : ""}
              />
            );
          })
        }
        <PhoneNav>
          {["Home", "Work", "Blog", "About Us"].map((item, index) => {
            return (
              <div
                key={index}
                className={`nav ${curIndex === index ? "active" : ""}`}
                onClick={() => setCurIndex(index)}
              >
                <div style={{ margin: 0, padding: 0 }}>
                  <IconTag style={{ fontSize: 20 }} />
                </div>
                {item}
              </div>
            );
          })}
        </PhoneNav>
      </PhoneDiv>
    </Main>
  );
}

export default MobileTabNavigation;
