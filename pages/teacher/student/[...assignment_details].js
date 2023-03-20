import React, { useContext, useEffect } from "react";
import StudentAssignmentDetail from "@/components/user/teacher/StudentAssignmentDetail";
import { useRouter } from "next/router";
import AuthContext from "@/components/Context/store/auth-context";

const AssignmentDetails = () => {

  const authCtx = useContext(AuthContext);
  const router = useRouter();
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


  return <>
  <StudentAssignmentDetail/>
   </>
  
};

export default AssignmentDetails;
