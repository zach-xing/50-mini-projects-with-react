import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const BgImg = styled.div`
  height: 100vh;
  background-image: url("https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/97cb2cde4b804c7b9fc167b85099abf1~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp");
  background-size: cover;
  /* z-index: -1; */
  filter: blur(${(props) => props.blur / 10}px);
`;

const LoadText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  color: white;
  opacity: ${(props) => props.opacity / 100};
`;

function BlurryLoading() {
  const [blur, setBlur] = useState(100);

  // useRef 所创出的 ref 对象有一个 current 属性可变并且可以容纳任意值的通用容器
  // 可以参考 https://zh-hans.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables
  // 我这里是放的 一个定时器 ID
  const intervalRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      setBlur((prev) => prev - 1);
    }, 30);
    intervalRef.current = timer;
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (blur <= 0) {
      clearInterval(intervalRef.current);
    }
  }, [blur]);

  return (
    <>
      <BgImg blur={blur} />
      <LoadText opacity={blur}> {100 - blur}% </LoadText>
    </>
  );
}

export default BlurryLoading;
