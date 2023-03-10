import { logger } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import styles from "./ColorOption.module.css";

const CanvasButton = (props) => {
  const [toDrow, setToDraw] = useState('')
  const [toErase, setToErase] = useState('')
  const action = props.action
  const changeColor = () => {
    //console.log(getColor);
    props.change(props.color);
    const {viewImg} = props.viewImg

    const startDrawing = ({ nativeEvent }) => {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
      setIsDrawing(true);
      nativeEvent.preventDefault();
    };
  
    const draw = ({ nativeEvent }) => {
      if (!isDrawing) {
        return;
      }
  
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
      nativeEvent.preventDefault();
    };
    
    const stopDrawing = () => {
      contextRef.current.closePath();
      setIsDrawing(false);
    };
  
    const setToDraw = () => {
      contextRef.current.globalCompositeOperation = "source-over";
    };
  
    const setToErase = () => {
      contextRef.current.globalCompositeOperation = "destination-out";
    };

    console.log(setToDraw)
  };
  return (
    <>
      <button
        style={{ backgroundColor: `${props.color}` }}
        className="p-1 m-1 border-2"
        onClick={setToDraw}
        
      >
        
          <img src={props.imgSrc} alt="" className="" on style={{width: "30px", height:"30px"}} />
        
      </button>
      <button
        style={{ backgroundColor: `${props.color}` }}
        className="p-1 m-1 border-2"
        onClick={setToErase}
      >
        
          <img src={props.imgSrc} alt="" className="" on style={{width: "30px", height:"30px"}} />
        
      </button>
    </>
  );
};
export default CanvasButton;



