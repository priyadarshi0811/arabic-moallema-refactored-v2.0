import * as React from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
export default function BackButton() {
  const back = () => {
    history.back();
  };

  return (
    <IconButton className="mb-1" aria-label="back" size="small" onClick={() => back()}>
      <KeyboardBackspaceIcon fontSize="small" />
    </IconButton>
  );
}
