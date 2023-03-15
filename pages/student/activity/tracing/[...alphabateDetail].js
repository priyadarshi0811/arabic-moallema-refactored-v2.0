import ActivityDetail from "@/components/Modules/models/ActivityDetail";
// import LetterDetails from "@/components/layout/LetterDetails";
import { useRouter } from "next/router";
import React from "react";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import AlphabetSlider from "@/components/Modules/models/AlphabetSlider";
import logo from "@/components/src/img/AMLogo.png";

const index = () => {
  const router = useRouter();
  let id;
  if (router.query.alphabateDetail) {
    id = router.query.alphabateDetail[0];
  }

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
        {/* <AlphabetSlider id={id} type='tracing' /> */}
        <ActivityDetail id={id} type="LetterTracing" />

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
