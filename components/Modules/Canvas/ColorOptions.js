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
      <div className={styles.colorLayout}>
        <div className={styles.text}>
          <h3>Select Color</h3>
        </div>
        <ColorButton
          color={"red"}
          change={changeColorSec}
          img={
            "https://cdn-icons-png.flaticon.com/512/15/15166.png"
          }
        />
        <ColorButton
          color={"green"}
          change={changeColorSec}
          img={
            "https://cdn-icons-png.flaticon.com/512/15/15166.png"
          }
        />
        <ColorButton
          color={"blue"}
          change={changeColorSec}
          img={
            "https://cdn-icons-png.flaticon.com/512/15/15166.png"
          }
        />
        <ColorButton
          color={"black"}
          change={changeColorSec}
          img={
            "https://cdn-icons-png.flaticon.com/512/15/15166.png"
          }
        />
        <ColorButton
          color={"grey"}
          change={changeColorSec}
          img={
            "https://cdn-icons-png.flaticon.com/512/15/15166.png"
          }
        />
        <ColorButton
          color={"orange"}
          change={changeColorSec}
          img={
            "https://cdn-icons-png.flaticon.com/512/15/15166.png"
          }
        />
        {/* <ColorButton
          color={"white"}
          change={changeColorSec}
          img={"https://cdn-icons-png.flaticon.com/512/1827/1827954.png"}
        /> */}
        {/* <ColorButton color={"pink"} change={changeColorSec}  />
        <CanvasButton color={"white"}  imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHydCKAhPub6naDOzOPbhBiFj2R9BWptEnMlXLzM&s"} action="setToDraw"  />
        <CanvasButton color={"white"}  imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUi5JWEv8IX_9yrhhDPbxA3jlhBKvzgioqR0ml6b9&s"} action="setToErase"  /> */}
      </div>
    </>
  );
};

export default ColorOptions;
