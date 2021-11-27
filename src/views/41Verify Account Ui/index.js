import React, { useRef } from "react";
import { Main, PanelContainer, CodeContainer, CodeDiv } from "./styled";

function VerifyAccountUi() {
  const focusRef = useRef();

  const handleKeydown = (e, index) => {
    if (e.key >= 0 && e.key <= 9) {
      focusRef.current.children[index].value = "";
      index < 5 &&
        setTimeout(() => focusRef.current.children[index + 1].focus(), 10);
    } else if (e.key === "Backspace") {
      index > 0 &&
        setTimeout(() => focusRef.current.children[index - 1].focus(), 10);
    }
  };

  return (
    <Main>
      <PanelContainer>
        <h2>Verify Your Account</h2>
        <p>
          We emailed you the six digit code to cool_guy@email.com Enter the code
          below to confirm your email address.
        </p>
        <CodeContainer ref={focusRef}>
          {Array.from(Array(6)).map((item, index) => {
            return (
              <CodeDiv
                key={index}
                type="number"
                placeholder="0"
                min="0"
                max="9"
                required
                onKeyDown={(e) => handleKeydown(e, index)}
              />
            );
          })}
        </CodeContainer>
      </PanelContainer>
    </Main>
  );
}

export default VerifyAccountUi;
