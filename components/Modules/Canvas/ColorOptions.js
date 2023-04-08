import { useState } from "react";
import CanvasButton from "./CanvasButton";
import ColorButton from "./ColorButton";
import styles from "./ColorOption.module.css";

const ColorOptions = (props) => {
  const changeColorSec = (colorData) => {
    //console.log(getColor);
    props.finalColor(colorData);
  };

  return (
    <>
      <div className="bg-white shadow-xl rounded-md flex justify-center items-center">
        <div className={styles.text}>
          <h3>Select Color</h3>
        </div>
        <ColorButton
          color={"red"}
          change={changeColorSec}
          img={"https://cdn-icons-png.flaticon.com/512/15/15166.png"}
        />
        <ColorButton
          color={"green"}
          change={changeColorSec}
          img={"https://cdn-icons-png.flaticon.com/512/15/15166.png"}
        />
        <ColorButton
          color={"blue"}
          change={changeColorSec}
          img={"https://cdn-icons-png.flaticon.com/512/15/15166.png"}
        />
      </div>
    </>
  );
};

export default ColorOptions;
