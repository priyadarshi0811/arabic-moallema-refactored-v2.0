import AuthContext from "@/components/Context/store/auth-context";
import LiveClassHome from "@/components/user/admin/LiveClasses/LiveClassHome";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const liveClasses = () => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  /**************Restricting Admin Route************************* */
  const loggedIn = authCtx.isLoggedIn;
  const typeAdmin = authCtx.userType === "admin" ? true : false;

  if (!typeAdmin && loggedIn) {
    router.replace("/");
  }

  useEffect(() => {
    console.log("in");
    if (typeAdmin && loggedIn) {
      if (!typeAdmin && !loggedIn) {
        console.log("second in");
        router.replace("/");
      }
    }
    const localType = localStorage.getItem("type");
    if (localType !== "admin") {
      console.log("second in");
      router.replace("/");
    }
  }, [loggedIn, typeAdmin]);

  /**************Restricting Admin Route************************* */

  return <LiveClassHome />;
};

export default liveClasses;
