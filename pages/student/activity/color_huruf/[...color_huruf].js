import ActivityDetail from "@/components/Modules/models/ActivityDetail";
// import LetterDetails from "@/components/layout/LetterDetails";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import AlphabetSlider from "@/components/Modules/models/AlphabetSlider";
import logo from "@/components/src/img/AMLogo.png";
import AuthContext from "@/components/Context/store/auth-context";
import CanvasForWords from "@/components/Modules/Canvas/CanvasForWords";

const index = () => {
  const router = useRouter();

  let subModule;
  let module;
  let activityIndex;

  if (router.query.color_huruf) {
    module = router.query.color_huruf[0];
    subModule = router.query.color_huruf[1];
    activityIndex = router.query.color_huruf[2];
  }

  console.log(subModule);
  console.log(module);

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
        {subModule && module && activityIndex && (
          <CanvasForWords
            user="student"
            subModule={subModule}
            module={module}
            activityIndex={activityIndex}
          />
        )}
      </div>
    </>
  );
};

export default index;
