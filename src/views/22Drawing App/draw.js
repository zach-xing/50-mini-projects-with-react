import React, { useState, useEffect, useRef } from "react";

let isPressed = false;

function Draw(props) {

  const {size, color} = props;
  const canvasRef = useRef();
  const [ctx, setCtx]  = useState();
  const [position, setPosition] = useState({
    x: undefined,
    y: undefined
  });

  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, []);

  useEffect(() => {
    console.log(props.isClear);
    if(props.isClear === true) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }, [ctx, props.isClear]);

  // 控制线的粗细
  const drawCircle = (x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  };

  // 绘制点到点的线
  const drawLine = (x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.lineCap = "round";
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };

  const handleMouseDown = (e) => {
    isPressed = true;
    setPosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    });
  }

  const handleMouseOver = (e) => {
    if (isPressed) {
      const x = e.nativeEvent.offsetX;
      const y = e.nativeEvent.offsetY;
      drawCircle(x, y);
      drawLine(position.x, position.y, x, y);
      setPosition({
        x, y
      });
    }
  }

  const handleMouseUp = () => {
    isPressed = false;
    setPosition({
      x: undefined,
      y: undefined
    })
  }

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={700}
      style={{
        border: "2px solid steelblue",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseOver}
      onMouseUp={handleMouseUp}
    ></canvas>
  );
}

export default Draw;
