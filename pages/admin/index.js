import AuthContext from "@/components/Context/store/auth-context";
import AdminHomePage from "@/components/user/admin/AdminHomePage";
import React, { useContext } from "react";

const index = () => {
  const authCtx = useContext(AuthContext);
  console.log("LoggedIn: ", authCtx.isLoggedIn);
  return (
    <>
      {authCtx.isLoggedIn && <AdminHomePage />}
      {!authCtx.isLoggedIn && <p>Admin Not Logged In</p>}
    </>
  );
};

export default index;
