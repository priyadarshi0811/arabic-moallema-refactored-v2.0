import ActivityDetail from "@/components/Modules/models/ActivityDetail";
// import LetterDetails from "@/components/layout/LetterDetails";
import { useRouter } from "next/router";
import React from "react";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import AlphabetSlider from "@/components/Modules/models/AlphabetSlider";
import logo from "@/components/src/img/AMLogo.png";
import { useContext } from "react";
import AuthContext from "@/components/Context/store/auth-context";
import { useEffect } from "react";

const index = () => {
  const router = useRouter();
  const id = router.query.alphabateDetail;

  const authCtx = useContext(AuthContext);

  /**************Restricting Students Route************************* */
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

  /**************Restricting Students Route************************* */

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
        <AlphabetSlider
          user="student"
          id={id}
          type="alphabets"
          module="alphabets"
        />
      </div>
    </>
  );
};

export default index;
