import React from "react";
import Link from "next/link";

const GeneralCard = ({ disc, title, btnText, link, type }) => {
  
  return (
    <div>
      <div className="items-center w-full p-5 overflow-hidden rounded shadow-lg min:h-fit justify-cente min:w-fit bg-slate-50">
        <div className="grid content-between grid-cols-1 gap-4 font-bold text-center text-dark-purple">
          <div>
            <h2 className="text-2xl ">{title}</h2>
          </div>
          <div>
            <h2 className="py-2 text-lg">{disc}</h2>
          </div>
          {type !== "upcoming" && (
            <div>
              <Link
                href={link}
                className="px-10 py-1 m-2 text-white rounded-md bg-dark-purple"
              >
                {btnText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneralCard;
