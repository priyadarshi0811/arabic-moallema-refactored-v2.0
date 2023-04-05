import React from "react";
import { useRouter } from "next/router";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import HarakatSlider from "@/components/Modules/models/HarakatSlider";
import fatahah from"@/components/src/img/arabic_fatha.png"

const Card =(props)=>{
  return(
    <div className="bg-white text-dark-purple">
      <h1>{props.title}</h1>
      <img src={fatahah.src} alt="" />
    </div>
  );
};

const AarkatAlphabateDetail = () => {
  return (
    <div>
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
        <h1>Hellow</h1>
        {/* <Card title="Title" /> */}
        <HarakatSlider />
      </div>
    </div>
  );
};

export default AarkatAlphabateDetail;
