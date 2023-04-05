import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";

const GeneralCard = ({ disc, title, btnText, link, btnProp }) => {
  
  return (
    <div>
      <div className="items-center w-full  overflow-hidden rounded shadow-lg min:h-fit justify-cente min:w-fit h-full">
        <div className="grid content-between grid-cols-1  font-bold text-center bg-dark-purple text-white min-h-64  ">
         
            <h2 className="text-5xl py-5 font-sans">{title}</h2>
            </div>
          <div className="bg-slate-50 h-fit">
          <div>
            <h2 className="py-2 text-sm text-dark-purple">{disc}</h2>
          </div>
          {link ? (
            <div>
              <Link
                href={link}
                className="px-10 py-1 m-2 text-white rounded-md bg-dark-purple"
              >
                {btnText}
              </Link>
            </div>
          ): null}
          {btnText ? (
            <div>
              <Button className="bg-teal-300">{btnText}{btnProp}</Button>
            </div>
          ): null}
        </div>
        
      </div>
    </div>
  );
};

export default GeneralCard;
