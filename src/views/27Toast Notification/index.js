import React, { useState, useEffect, useRef} from "react";
import { Main, Toasts, ToastsGroup } from "./styled";
import { Button } from "@arco-design/web-react";

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "success", "error"];

function ToastNotification() {
  const [toastArr, setToastArr] = useState([]);
  const timer = useRef();

  const createToast = async () => {
    let arr = [...toastArr];
    arr.push({
      info: messages[Math.floor(Math.random() * messages.length)],
      type: types[Math.floor(Math.random() * types.length)],
    });
    setToastArr(arr);
  };

  useEffect(() => {
    if(toastArr.length > 0) {
      console.log('sdf');
      timer.current = setTimeout(() => {
        let arr = [...toastArr];
        arr.shift();
        setToastArr(arr)
      }, 2000)
    }
  }, [toastArr])


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
