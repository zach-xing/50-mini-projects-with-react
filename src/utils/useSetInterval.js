/**
 * 自定义 setInterval 钩子
 */
import { useRef, useEffect } from "react";

export default function useSetInterval(cb, delay) {
  const ref = useRef();

  useEffect(() => {
    ref.current = cb;
  }, [cb]);

  useEffect(() => {
    const timer = setInterval(() => {
      ref.current();
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  });
}
