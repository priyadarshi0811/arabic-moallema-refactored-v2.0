import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
const CardLayout = ({
  title,
  firstComp,
  secondComp,
  fullComp,
  isFull,
  disc,
  isBtn,
  btn,
  path,
  onClick,
}) => {
  const btnIs = isBtn || false;
  const fullIs = isFull || false;
  return (
    <div>
      {fullIs && (<div className="w-full grid grid-cols-4 rounded-lg overflow-hidden shadow-lg  items-center justify-center bg-slate-50 ">
        <div className="flex m-10  col-span-4">
          {fullComp}
        </div>
      </div>)}

      {!fullIs && (<div className="w-full grid grid-cols-4 rounded-lg overflow-hidden shadow-lg  items-center justify-center bg-slate-50 ">
        <div className="flex m-10 items-center justify-start col-span-2">
          {firstComp}
          <div className="font-bold text-xl ">{title}</div>
          <p className=" text-base text-gray-400">{disc}</p>
        </div>
        <div className=" mx-10 my-5 col-span-2">
          {secondComp}
          <div className="flex items-center justify-end ">
            {btnIs && (
              <Link href={path} className='w-full' >
              <Button
                variant="contained"
                className=" w-full bg-dark-purple "
                onClick={() => {
                  history.back();
                }}
              >
                {btn}
              </Button>
              </Link>
            )}
          </div>
        </div>
      </div>)}

      
    </div>
  );
};

export default CardLayout;
