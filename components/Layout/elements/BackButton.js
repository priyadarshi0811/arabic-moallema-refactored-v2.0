import * as React from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button } from "@mui/material";
export default function BackButton(props) {
  const back = () => {
    history.back();
  };

  return (
    <>
    {props.isBtn == 'true' ? ( <Button variant="contained" className="p-0  bg-dark-purple" startIcon={<KeyboardBackspaceIcon />}>
        {props.btn} 
      </Button>) : (
      <IconButton
        className="mb-2 pb-2"
        aria-label="back"
        size="small"
        onClick={() => back()}
      >
        <KeyboardBackspaceIcon fontSize="small" />
      </IconButton>
      )}
    </>
  );
}
