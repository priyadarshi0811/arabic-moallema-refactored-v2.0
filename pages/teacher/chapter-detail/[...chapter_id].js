import AuthContext from "@/components/Context/store/auth-context";
import ChapterDetailHome from "@/components/user/teacher/chapters/ChapterDetailHome";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const index = () => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  let chapterName;
  let batchName;
  if (router.query.chapter_id) {
    chapterName = router.query.chapter_id[0];
    batchName = router.query?.chapter_id[1];
  }
  console.log(chapterName);
  console.log("route: ", batchName);

    /**************Restricting Teachers Route************************* */
    const loggedIn = authCtx.isLoggedIn;
    const typeTeacher = authCtx.userType === "instructor" ? true : false;
    if (!typeTeacher && loggedIn) {
      router.replace("/");
    }
  
    useEffect(() => {
      console.log("in");
      if (typeTeacher && loggedIn) {
        if (!typeTeacher && !loggedIn) {
          console.log("second in");
          router.replace("/");
        }
      }
      const localType = localStorage.getItem("type");
      if (localType !== "instructor") {
        console.log("second in");
        router.replace("/");
      }
    }, [loggedIn, typeTeacher]);
  
    /**************Restricting Teachers Route************************* */

  return (
    <>
      {chapterName && batchName && (
        <ChapterDetailHome chapterName={chapterName} batchName={batchName} />
      )}
    </>
  );
};

export default index;
