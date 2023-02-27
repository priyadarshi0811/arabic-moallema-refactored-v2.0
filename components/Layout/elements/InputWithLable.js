import { TextField } from "@mui/material";
import React from "react";

const InputWithLable = ({ lable, id, type }) => {
  return (
    <div className="grid grid-cols-5 ">
      <div className="col-span-1 mt-3">
        <label className=" mt-3 pt-2">{lable}</label>
      </div>
      <div className="col-span-4">
        <TextField
          id={id || ""}
          variant="outlined"
          type={type}
          className="pt-2 m-0 w-full"
        />
      </div>
    </div>
  );
};

export default InputWithLable;
