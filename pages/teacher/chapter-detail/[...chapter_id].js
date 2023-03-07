import ChapterDetailHome from "@/components/user/teacher/chapters/ChapterDetailHome";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();
  let chapterName;
  let batchName;
  if (router.query.chapter_id) {
    chapterName = router.query.chapter_id[0];
    batchName = router.query?.chapter_id[1];
  }
  console.log(chapterName);

  console.log("route: ", batchName);

  return (
    <>
      {chapterName && batchName && (
        <ChapterDetailHome chapterName={chapterName} batchName={batchName} />
      )}
    </>
  );
};

export default index;
