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
import {
  fetchBatcheIdBasedOnBatchName,
  fetchIndividualBatch,
} from "@/backend/Batches/BatchesDB";
import LoadingSpinner from "@/components/Layout/spinner/LoadingSpinner";
import WarningCard from "@/components/Layout/card/WarningCard";

const ClassDetais = ({ batchName, user }) => {
  const [completedChapters, setcompletedChapters] = React.useState([]);
  const [completedChaptersData, setcompletedChaptersData] = React.useState([]);

  const [upcomingChapters, setupcomingChapters] = React.useState([]);
  const [batchId, setBatchId] = React.useState();

  const [loading, setLoading] = React.useState(false);

  const authCtx = React.useContext(AuthContext);
  const email = authCtx.userEmail;

  let totalCompleted;

  React.useEffect(() => {
    const setBatchIdData = async () => {
      const idData = await fetchBatcheIdBasedOnBatchName(batchName);
      if (idData[0]) {
        setBatchId(idData[0].batch_id);
        console.log(idData[0].batch_id);
      }
    };
    setBatchIdData();
  }, [batchName]);
  console.log(batchId);

  React.useEffect(() => {
    setLoading(true);

    const batchChapterDetail = async () => {
      const chapterData = await fetchChapters();
      if (batchId) {
        const data2 = await fetchIndividualBatch(batchId);

        if (data2 && data2[0].chapter_completed) {
          setcompletedChapters(data2[0].chapter_completed);

          const nextChapter = chapterData.filter(
            (value) => !data2[0].chapter_completed.includes(value.chapter_id)
          );
          setupcomingChapters(nextChapter);
          data2[0].chapter_completed.map((item) => totalCompleted++);
        } else {
          setupcomingChapters(chapterData);
        }
        setLoading(false);
      }
    };
    batchChapterDetail();
  }, [batchId]);

  React.useEffect(() => {
    const teacherBatches = async () => {
      const data = await fetchTeacherBatches(email);
      authCtx.setBatchesData(data);
    };
    teacherBatches();
  }, [email]);

  React.useEffect(() => {
    if (completedChapters && batchId) {
      const getData = async () => {
        const chapterData = await fetchChapters();

        let completedChapterDataNew = chapterData
          .filter((item1) =>
            completedChapters.some((item2) => item1.chapter_id === item2)
          )
          .map((item) => item.chapter_name);

        setcompletedChaptersData(completedChapterDataNew);
      };
      getData();
    }
  }, [completedChapters]);

  return (
    <div className="">
      <div className="px-3 lg:px-8 w-full">
        <div className=" w-full">
          <CardLayout
            firstComp=<div>
              <h1 className="text-2xl lg:text-3xl text-dark-purple">
                {batchName}
              </h1>
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
        <h1 className="text-lg  mt-10">Completed Chapters</h1>
        {!loading && completedChapters.length === 0 && (
          <WarningCard title={`No chapter completed`} />
        )}

        <div className="mt-4  relative">{loading && <LoadingSpinner />}</div>
        {user !== "student" && (
          <MUISlider
            card={
              !loading &&
              completedChaptersData &&
              completedChaptersData.map((chapter) => (
                <div className="px-2">
                  <MUIMiniCard
                    title={chapter}
                    disc="15/02/23"
                    isBtn={true}
                    btnText="View"
                    link={`/teacher/chapter-detail/${chapter}/${batchName}`}
                  />
                </div>
              ))
            }
          />
        )}
        {user === "student" && (
          <MUISlider
            card={
              !loading &&
              completedChaptersData &&
              completedChaptersData.map((chapter) => (
                <div className="px-2">
                  <MUIMiniCard
                    title={chapter}
                    disc="15/02/23"
                    isBtn={true}
                    btnText="View"
                    link={`/student/chapter-detail/${chapter}/${batchName}`}
                  />
                </div>
              ))
            }
          />
        )}
        <h1 className="text-lg  mt-10">Upcoming Chapters</h1>
        <div className="mt-4  relative">{loading && <LoadingSpinner />}</div>
        <MUISlider
          card={
            !loading &&
            upcomingChapters &&
            upcomingChapters.map((chapter, index) => (
              <div className="px-2">
                <MUIMiniCard
                  title={chapter.chapter_name}
                  disc="15/02/23"
                  isChip="true"
                  chipLable={index === 0 ? "In-Progress" : "Upcomming"}
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
