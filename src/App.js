import React from "react";

import "./styles.css";
import { useRef } from "react";

export default function App() {
  const canvasRef = useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // ctx.moveTo(0, 0);
    // ctx.lineTo(200, 100);
    // ctx.stroke();

    // Animation 1

    const circle = {
      x: 200,
      y: 200,
      size: 30,
      dx: 5,
      dy: 4
    };

    function drawCircle() {
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
      ctx.fillStyle = "purple";
      ctx.fill();
    }

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawCircle();

      // change position
      circle.x += circle.dx;
      circle.y += circle.dy;

      // Detect side walls
      if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
        circle.dx *= -1;
      }

      // Detect top and bottom walls
      if (
        circle.y + circle.size > canvas.height ||
        circle.y - circle.size < 0
      ) {
        circle.dy *= -1;
      }

      requestAnimationFrame(update);
    }

    update();

    // Animation 2 - Character
  }, []);

  return (
    <div>
      {/* <h1>HTML5 Canvas + React.js</h1> */}
      <canvas
        ref={canvasRef}
        id="canvas"
        width="600"
        height="400"
        // width="200"
        // height="100"
        // style={{ border: "1px solid #d3d3d3" }}
      ></canvas>
    </div>
  );
}
