import { useState } from "react";
import CanvasButton from "./CanvasButton";
import ColorButton from "./ColorButton";
import styles from "./ColorOption.module.css";
import { Button, ButtonGroup } from "@mui/material";

const ColorOptions = (props) => {
  const changeColorSec = (colorData) => {
    //console.log(getColor);
    props.finalColor(colorData);
  };

  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        sx={{ margin: 3 }}
      >
        <ColorButton
          color={"black"}
          change={changeColorSec}
          img={"https://cdn-icons-png.flaticon.com/512/15/15166.png"}
        />
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
      </ButtonGroup>
      {/* <div className="bg-white shadow-xl rounded-md flex justify-center items-center">
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
      </div> */}
    </>
  );
};

export default ColorOptions;
