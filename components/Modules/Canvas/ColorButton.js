import { useState } from "react";
import styles from "./ColorOption.module.css";

const ColorButton = (props) => {
  // const [viewImg, setViewImg] = useState(false)
  const changeColor = () => {
    //console.log(getColor);
    props.change(props.color);
    // const {viewImg} = props.viewImg
  };
  return (
    <>
      <button
        style={{ backgroundColor: `${props.color}` }}
        className={styles.mainBtn}
        onClick={changeColor}
      >
        <img src={props.img} width={'20px'} alt="" />
      </button>
    </>
  );
};
export default ColorButton;
