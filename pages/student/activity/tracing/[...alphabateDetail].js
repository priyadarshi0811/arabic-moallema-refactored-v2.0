import ActivityDetail from "@/components/Modules/models/ActivityDetail";
// import LetterDetails from "@/components/layout/LetterDetails";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import AlphabetSlider from "@/components/Modules/models/AlphabetSlider";
import logo from "@/components/src/img/AMLogo.png";
import AuthContext from "@/components/Context/store/auth-context";

const index = () => {
  const router = useRouter();
  let id;
  if (router.query.alphabateDetail) {
    id = router.query.alphabateDetail[0];
  }

  const authCtx = useContext(AuthContext);

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
    <>
      <div
        className=""
        style={{
          backgroundImage: `url(${colorBgImg.src})`,
          backgroundAttachment: "fixed",
          backgroundSize: "100%",
          backgroundPosition: "center top",
          widows: "100vw",
          minHeight: "100vh",
        }}
      >
        {/* <AlphabetSlider id={id} type='tracing' /> */}
        <ActivityDetail user="student" id={id} type="LetterTracing" />

        {/* <div className="p-5 grid grid-cols-12 gap-5">
          <div className="col-span-1">

          </div>
          <div className="col-span-11">
          {id && <ActivityDetail id={id} />}
          </div>
        
        </div> */}
      </div>
    </>
  );
};

export default index;
