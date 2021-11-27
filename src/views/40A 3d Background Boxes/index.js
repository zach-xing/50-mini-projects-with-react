import React, {useState} from "react";
import { Main, CustomBtn, Boxes } from "./styled";

function A3dBackgroundBoxes() {

  const [showBig, setShowBig] = useState(true);

  return (
    <Main>
      <CustomBtn onClick={() => setShowBig((prev) => !prev)}>
        Magic 🎩
      </CustomBtn>
      <Boxes className={showBig ? "big" : ""}>
        {Array.from(Array(4)).map((item1, i) => {
          return Array.from(Array(4)).map((item2, j) => {
            return (
              <div
                key={`${i + j}id${i * j}`}
                className="box"
                style={{ backgroundPosition: `${-j * 125}px ${-i * 125}px` }}
              ></div>
            );
          });
        })}
      </Boxes>
    </Main>
  );
}

export default A3dBackgroundBoxes;
