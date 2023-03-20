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
  const id = router.query.alphabateDetail;

  const authCtx = useContext(AuthContext);
  
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
  //accessing id
  // console.log(id);
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
        
        <AlphabetSlider user="teacher" id={id} type= "alphabets" />

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
