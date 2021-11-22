/**
 * 自定义 setTimeout 钩子
 */
import { useRef, useEffect } from "react";

export default function useSetTimeout(cb, delay) {

  const ref = useRef();

  useEffect(() => {
    ref.current = cb;
  }, [cb])

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current();
    }, delay);
    return () => {
      clearTimeout(timer);
    }
  })
}
