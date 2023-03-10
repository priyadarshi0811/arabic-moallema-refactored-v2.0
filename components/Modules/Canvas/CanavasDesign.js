import React, { useEffect, useRef, useState } from "react";

const CanvasDesign = (props) => {
  // useRef hooks for canvas
  const drawRef = useRef();
  const canvasRef = useRef();

  console.log(props.color);

  // useState to track whetther the mouse is down or not
  // and the position of the mouse
  const [mouseDown, setMouseDown] = useState(false);
  const [lastPosition, setLastPosition] = useState({
    start: 0,
    end: 0,
  });

  //when component mount(canvas is mounted in this case)
  //setting the drawRef
  //current is a property of ref
  if (canvasRef.current) {
    // console.log(drawRef.current);
    drawRef.current = canvasRef.current.getContext("2d");
    // console.log(drawRef.current);
  }

  // paint logic
  //References
  // https://www.w3schools.com/jsref/obj_mouseevent.asp
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

  const paint = (start, end) => {
    if (mouseDown) {
      drawRef.current.beginPath();
      drawRef.current.strokeStyle = props.color;
      drawRef.current.lineWidth = 5;
      drawRef.current.lineJoin = "round";
      drawRef.current.moveTo(lastPosition.start, lastPosition.end);
      drawRef.current.lineTo(start, end);
      drawRef.current.closePath();
      drawRef.current.stroke();

      setLastPosition({ start, end });
    }
  };

  //Mouse Events
  const onMouseMove = (e) => {
    paint(e.pageX, e.pageY);
  };

  const onMouseDown = (e) => {
    setLastPosition({
      start: e.pageX,
      end: e.pageY,
    });
    setMouseDown(true);
    // console.log(lastPosition);
  };

  const onMouseUp = (e) => {
    // console.log(mouseDown);
    setMouseDown(false);
  };

  const onMouseLeave = (e) => {
    // console.log(mouseDown);
    setMouseDown(false);
  };

  return (
    <>
      <div className="">
        <div className="items-center justify-center w-full rounded-lg shadow-lg border-1 h-80 position-absolute">
          <canvas
            width={1400}
            height={800}
            ref={canvasRef}
            onMouseMove={onMouseMove}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            centerPointX={0}
            centerPointY={0}
            
          ></canvas>
        </div>
      </div>
    </>
  );
};

export default CanvasDesign;
