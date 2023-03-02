import * as React from "react";
import Link from "next/link";
import CardLayout from "@/components/Layout/card/CardLayout";
import MUISlider from "@/components/Layout/slider/MUISlider";
import MUIMiniCard from "@/components/Layout/card/MUIMiniCard";
import { Chip, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";

const ClassDetais = () => {
  return (
    <div className="">
      <div className="">
        <div className="px-12 w-full">
          <CardLayout
            firstComp=<div>
              <h1 className="text-3xl text-dark-purple">Arabic from Roots</h1>
            </div>
            secondComp=<div>
              Chapter completed: 3 of 15
              <Box sx={{ width: "100%" }}>
                <LinearProgress
                  className="h-2 rounded-md text-dark-purple"
                  variant="determinate"
                  value="20"
                />
              </Box>
            </div>
          />
        </div>

        <h1 className="text-lg ml-14 mt-10">Completed Classes</h1>
        <MUISlider
          card=<MUIMiniCard
            title="Class 1"
            disc="15/02/23"
            isBtn="true"
            btnText="View"
            link="/teacher/class/chapter-details"
          />
        />

        <h1 className="text-lg ml-14 mt-10">Incomplete Classes</h1>
        <MUISlider
          card=<MUIMiniCard
            title="Class 2"
            isChip="true"
            chipLable="Upcomming"
          />
        />
      </div>
    </div>
  );
};

export default ClassDetais;
