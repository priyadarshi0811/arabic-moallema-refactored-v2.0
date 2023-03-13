import * as React from "react";
import Link from "next/link";
import CardLayout from "@/components/Layout/card/CardLayout";
import SelectDropdown from "@/components/Layout/elements/SelectDropdown";
import MUISlider from "@/components/Layout/slider/MUISlider";
import MUIMiniCard from "@/components/Layout/card/MUIMiniCard";
import { Chip, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";

const ClassDetais = () => {
  return (
    <div className="">
      <div className="px-3 lg:px-8 ">
        <div className="">
          {/* <div className="mb-10">
            <SelectDropdown lable="Select batch student" type="Student" />
          </div> */}
          <CardLayout
            firstComp=<div>
              <h1 className="text-2xl lg:text-3xl text-dark-purple">Fakhruddin Ezzey</h1>
            </div>
            secondComp=<div>
              <h1 className="mb-3">Batches attended 3/5</h1>
              <h1>Assignment completed 4/5</h1>
            </div>
          />
        </div>

        <h1 className="text-lg  mt-10">
          Completed Assignments
        </h1>
        <MUISlider
          card=<MUIMiniCard
            title="Assignment 1"
            disc="Marks: 3/5"
            isBtn="true"
            btnText="View"
            link="/teacher/student/assignment-details"
          />
        />

        <h1 className="text-lg  mt-10">
          Unchecked Assignments
        </h1>
        <MUISlider
          card=<MUIMiniCard
            title="Assignment 1"
            disc="Un-Checked"
            // isBtn=""
            // btnText="Check"
            // link=""
          />
        />
      </div>
    </div>
  );
};

export default ClassDetais;
