import { useState } from "react";
import styles from "./ColorOption.module.css";
import { Button } from "@mui/material";

const ColorButton = (props) => {
  // const [viewImg, setViewImg] = useState(false)
  const changeColor = () => {
    //console.log(getColor);
    props.change(props.color);
    // const {viewImg} = props.viewImg
  };
  return (
    <>
      
      <Button
        style={{ backgroundColor: `${props.color}`, color:`${props.color}`, margin:2, borderWidth:2, borderColor:"gray", boxShadow:5}}
        onClick={changeColor}
      >
        p
      </Button>
    </>
  );
};
export default ColorButton;
