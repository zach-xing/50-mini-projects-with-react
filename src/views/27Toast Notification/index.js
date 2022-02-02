import React, { useState } from "react";
import { Main, Toasts, ToastsGroup } from "./styled";
import { Button } from "@arco-design/web-react";

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "success", "error"];

// let createToast;
let uid = 0;

function ToastNotification() {
  const [toastArr, setToastArr] = useState([]);

  const remove = (removeKey) => {
    setToastArr(prev => (
      prev.filter(({ key }) => removeKey !== key)
    ))
  }

  // 创建一个 Toast
  const createToast = () => {
    const newToast = {
      info: messages[Math.floor(Math.random() * messages.length)],
      type: types[Math.floor(Math.random() * types.length)],
      key: uid++,
    };
    setToastArr((prev) => [newToast, ...prev])
    setTimeout(() => {
      remove(newToast.key);
    }, 3000)
  };

  return (
    <Main>
      <Button type="primary" size="large" onClick={createToast}>
        Show Notification
      </Button>
      <ToastsGroup>
        {toastArr.length
          ? toastArr.map((item, index) => {
            return (
              <Toasts type={item.type} key={index}>
                {item.info}
              </Toasts>
            );
          })
          : ""}
      </ToastsGroup>
    </Main>
  );
}

export default ToastNotification;
