import AssessmentHomePage from "@/components/user/student/AssessmentHomePage";
import React, { useContext, useEffect } from "react";
import AuthContext from "@/components/Context/store/auth-context";
import { useRouter } from "next/router";

const index = () => {

  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const type = authCtx.userType;
  const loggedIn = authCtx.isLoggedIn;

  const typeStudent = authCtx.userType === "student" ? true : false;

  if (!typeStudent && loggedIn) {
    router.replace("/");
  }

  useEffect(() => {
    console.log("in");
    if (typeStudent && loggedIn) {
      if (!typeStudent && !loggedIn) {
        console.log("second in");
        router.replace("/");
      }
    }

    const localType = localStorage.getItem("type");

    if (localType !== "student") {
      console.log("second in");
      router.replace("/");
    }
  }, [loggedIn, typeStudent]);

  return (
    <div>
      <AssessmentHomePage />
    </div>
  );
};

export default index;
