import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
const CardLayout = ({ title, path, description, btn, onClick }) => {
  return (
    <div className="w-full grid grid-cols-4 rounded-lg overflow-hidden shadow-lg  items-center justify-center bg-slate-50 pt-6">
      
      <div className="px-20 py-5  col-span-3">
        <div className="font-bold text-xl mb-2 -mt-4">{title}</div>
        <p className=" text-base text-gray-400">{description}</p>
      </div>
      <div className="flex items-center justify-center mt-4 mb-10 col-span-1">
        <div>
          {/* <Link
            href={path}
            onClick={onClick}
            className=" bg-dark-purple hover:bg-light-gray text-white font-bold py-2 px-4 rounded "
          >
            {btn}
          </Link> */}
          <Button variant="contained" className=" w-full bg-dark-purple " onClick={()=>{history.back()}}>
          {btn}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
