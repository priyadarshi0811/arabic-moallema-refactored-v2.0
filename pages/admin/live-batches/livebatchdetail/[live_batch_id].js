import AuthContext from "@/components/Context/store/auth-context";
import LiveBatchDetail from "@/components/user/admin/LiveClasses/LiveBatchDetail";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const liveClasses = () => {
  const router = useRouter();

  let id;
  if (router.query.live_batch_id) {
    id = router.query.live_batch_id;
    console.log(id);
  }

  const authCtx = useContext(AuthContext);

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

  return <>{id && <LiveBatchDetail batchName={id} />}</>;
};

export default liveClasses;
