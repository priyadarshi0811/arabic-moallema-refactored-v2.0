import * as React from "react";
import Link from "next/link";
import CardLayout from "@/components/Layout/card/CardLayout";
import MUISlider from "@/components/Layout/slider/MUISlider";
import MUIMiniCard from "@/components/Layout/card/MUIMiniCard";
import { Chip, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import AuthContext from "@/components/Context/store/auth-context";
import { fetchChapters } from "@/backend/Chapters/GetChaptersDB";
import { fetchTeacherBatches } from "@/backend/Batches/BatchesForTeachersStudentsDB";
import { fetchIndividualBatch } from "@/backend/Batches/BatchesDB";
import LoadingSpinner from "@/components/Layout/spinner/LoadingSpinner";

const ClassDetais = ({ batchName }) => {
  const [completedChapters, setcompletedChapters] = React.useState([]);
  const [upcomingChapters, setupcomingChapters] = React.useState([]);

  const [loading, setLoading] = React.useState(false);

  const authCtx = React.useContext(AuthContext);
  const email = authCtx.userEmail;

  let totalCompleted;

  React.useEffect(() => {
    setLoading(true);

    const batchChapterDetail = async () => {
      const chapterData = await fetchChapters();
      const data2 = await fetchIndividualBatch(batchName);

      if (data2[0].chapter_completed) {
        setcompletedChapters(data2[0].chapter_completed);

        const nextChapter = chapterData.filter(
          (value) => !data2[0].chapter_completed.includes(value.chapter_name)
        );
        setupcomingChapters(nextChapter);
        data2[0].chapter_completed.map((item) => totalCompleted++);
      } else {
        setupcomingChapters(chapterData);
      }
      setLoading(false);
    };
    batchChapterDetail();
  }, []);

  React.useEffect(() => {
    const teacherBatches = async () => {
      const data = await fetchTeacherBatches(email);
      authCtx.setBatchesData(data);
    };
    teacherBatches();
  }, [email]);

  console.log(authCtx.batchesList);
  console.log(completedChapters);

  return (
    <div className="">
      <div className="">
        <div className="px-12 w-full">
          <CardLayout
            firstComp=<div>
              <h1 className="text-3xl text-dark-purple">{batchName}</h1>
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
        <h1 className="text-lg ml-14 mt-10">Completed Chapters</h1>
        {!loading && completedChapters.length === 0 && (
          <p className=" text-red-400 text-xl mt-10 ml-10">
            No chapter completed
          </p>
        )}
        <div className="mt-4 ml-4 relative">
          {loading && <LoadingSpinner />}
        </div>
        <MUISlider
          card={
            !loading &&
            completedChapters &&
            completedChapters.map((chapter) => (
              <div className="pl-4">
                <MUIMiniCard
                  title={chapter}
                  disc="15/02/23"
                  isBtn="true"
                  btnText="View"
                  link={`/teacher/chapter-detail/${chapter}/${batchName}`}
                />
              </div>
            ))
          }
        />

        <h1 className="text-lg ml-14 mt-10">Upcoming Chapters</h1>
        <div className="mt-4 ml-4 relative">
          {loading && <LoadingSpinner />}
        </div>
        <MUISlider
          card={
            !loading &&
            upcomingChapters &&
            upcomingChapters.map((chapter) => (
              <div className="pl-4">
                <MUIMiniCard
                  title={chapter.chapter_name}
                  disc="15/02/23"
                  isChip="true"
                  chipLable="Upcomming"
                />
              </div>
            ))
          }
        />
      </div>
    </div>
  );
};

export default ClassDetais;
