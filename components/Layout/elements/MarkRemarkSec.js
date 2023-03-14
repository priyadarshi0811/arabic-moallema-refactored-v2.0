import React from "react";

const MarkRemarkSec = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
      <div className="col-span-1 lg:text-center mt-3">
        <label className="">Marks</label>
        <div className="w-full">
        <input
          type="number"
          className="w-20 rounded-md lg:text-2xl text-lg"
          min="0"
          max="5"
          />
        <span className="lg:text-2xl text-lg"> /5</span>
          </div>
          
      </div>
      <div className="col-span-1 lg:text-center w-full mt-3">
        <label className="">Remark</label>
        <textarea  className="w-full h-20 rounded-md lg:text-lg" />
      </div>
    </div>
  );
};

export default MarkRemarkSec;
