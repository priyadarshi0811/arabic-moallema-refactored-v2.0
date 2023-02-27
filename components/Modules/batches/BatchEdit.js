import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { Button } from "@mui/material";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const BatchEdit = ({ actionBtn, link }) => {
  const handleChange = () => {};

  return (
    <div className="">
      {/* <form onSubmit={onclassCreateHandler}> */}
      <div className="overflow-hidden ">
        <div className="">
          <h1 className="text-2xl mt-0 text-dark-purple text-center pb-5">
            {actionBtn} 
          </h1>
          <div className="grid grid-cols-6 gap-6 ">
            <div className="col-span-6">
              <div className="grid grid-cols-8 gap-3">
                <div className="col-span-8 sm:col-span-4">
                  <label
                    htmlFor="batch-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Batch Name
                  </label>
                  <input
                    type="text"
                    value=""
                    onChange={handleChange}
                    name="batch-name"
                    id="first-name"
                    // ref={nameRef}
                    autoComplete="given-name"
                    required
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-8 sm:col-span-4">
                  <label
                    htmlFor="user-type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Type
                  </label>
                  <select
                    id="user-type"
                    name="user-type"
                    value=""
                    onChande={handleChange}
                    autoComplete="user-type"
                    required
                    className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>Adult</option>
                    <option>Kid</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-span-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-auto ">
                  <label
                    htmlFor="select-teacher"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Teacher
                  </label>

                  <select
                    required
                    name="select-teacher"
                    value=""
                    onChande={handleChange}
                    className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="email 1">User 1</option>
                    <option value="email 2">User 2</option>
                    <option value="email 3">User 3</option>
                  </select>
                </div>
                <div className="col-span-auto w-full">
                  <label
                    htmlFor="gmeet"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Add Google Meet
                  </label>
                  <input
                    type="text"
                    name="gmeet"
                    value=""
                    onChande={handleChange}
                    required
                    placeholder="G Meet Link"
                    className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-6 daily-on">
              <h4 className="my-2">Weekly on.</h4>
              <div className="grid grid-cols-8 gap-3 sm:grid-cols-7 lg:gap-5">
                {days.map((day) => (
                  <div className="col-span-2 pb-3 pl-1 border-2 bg-white border-gray-300 rounded-md shadow-sm appearance-none cursor-pointer sm:col-span-1">
                    <input
                      type="checkbox"
                      id={day}
                      value={day}
                      name={day}
                      //   onChange={handleChange}
                      //   checked={selectedDays.includes(day)}
                      className="block mt-1 border-solid rounded-full appearance-none day-card focus:outline-none after:border-none focus:border-none sm:text-sm"
                    />
                    <label
                      htmlFor={day}
                      className="block text-sm font-medium text-center text-gray-700 cursor-pointer"
                    >
                      {day}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-6">
              <div className="grid grid-cols-8 gap-3">
                <div className="col-span-8 sm:col-span-4 ">
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700"
                  >
                    At what time of day?
                  </label>
                  <input
                    type="time"
                    min="07:00"
                    max="20:00"
                    name="time"
                    id="time"
                    required
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-8 sm:col-span-4">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Starting Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    // min={getCurrentDate()}
                    required
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="items-center  py-3 text-right mt-5">
         
          <Button variant="contained" className=" w-full bg-dark-purple " onClick={()=>{history.back()}}>
          {actionBtn} 
          </Button>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default BatchEdit;
