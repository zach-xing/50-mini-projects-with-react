import React, { useState } from "react";
import { Main, LoginDiv, CustomInput, BgBlur } from "./styled";

function PasswordStrengthBackground() {
  const [pwd, setPwd] = useState("");

  const handleInputPwd = (e) => {
    setPwd(e.target.value.toString());
  }

  return (
    <Main>
      <BgBlur blur={pwd.length} />
      <LoginDiv>
        <h1>Image Password Strength</h1>
        <CustomInput>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" placeholder="Enter Email" />
        </CustomInput>

        <CustomInput>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={pwd}
            onInput={handleInputPwd}
          />
        </CustomInput>

        <button>Submit</button>
      </LoginDiv>
    </Main>
  );
}

export default PasswordStrengthBackground;
