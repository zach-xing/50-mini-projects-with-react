import React, { useState } from "react";
import { Main, Generator, Settings, Setting, MyButton } from "./styled";
import { settings } from "./data";
import randomFunc from './randomFunc'

function PasswordGenerator() {
  const [result, setResult] = useState("sdfsdfsdfsdf");
  const [settingOptions, setSettingOptions] = useState([
    20,
    false,
    false,
    false,
    false,
  ]);

  // 复制
  const handleCopy = async (e) => {
    // 详见 Clipboard API https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard_API
    await navigator.clipboard.writeText(result);
    alert("Copied");
  }

  // 生成密码
  const generateClick = () => {
    let [length, lower, upper, number, symbol] = settingOptions;
    const typesCount = lower + upper + number + symbol;
    if (typesCount === 0) {
      return "";
    }
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0]
    );
    let pwd = "";
    for (let i = 0; i < length; i += typesCount) {
      for (let type of typesArr) {
        pwd += randomFunc[Object.keys(type)[0]]();
      }
    }
    setResult(pwd.slice(0, length));
  };

  // 选项配置
  const optionsChange = (e, index) => {
    let arr = [...settingOptions];
    if (index === 0) {
      let v = e.target.value;
      if (Number(v) <= 0) {
        v = 1;
      } else if (Number(v) >= 20) {
        v = 20;
      }
      arr[0] = v;
    } else {
      arr[index] = e.target.checked;
    }
    setSettingOptions(arr);
  };

  return (
    <Main>
      <Generator>
        <h2 style={{ textAlign: "center" }}>Password Generator</h2>
        <div className="result">
          <p>{result}</p>
          <button onClick={handleCopy}>Copy</button>
        </div>

        <Settings>
          {settings.map((item, index) => {
            return (
              <Setting key={index}>
                <label>{item.label}</label>
                <input
                  type={item.type}
                  value={settingOptions[index]}
                  onChange={(e) => optionsChange(e, index)}
                />
              </Setting>
            );
          })}
        </Settings>

        <MyButton onClick={generateClick}>Generate Password</MyButton>
      </Generator>
    </Main>
  );
}

export default PasswordGenerator;
