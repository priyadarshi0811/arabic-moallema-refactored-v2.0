import React, { useContext } from "react";
import AuthContext from "@/components/Context/store/auth-context";

import TeacherHomeTeachersPage from "@/components/user/teacher/TeacherHomeTeachersPage";

const index = () => {
  const authCtx = useContext(AuthContext);
  const email = authCtx.userEmail;
  return <>{email && <TeacherHomeTeachersPage email={email} />}</>;
};

export default index;
