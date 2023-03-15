import React from "react";
// import { GetServerSideProps } from "next";
import { resetServerContext } from "react-beautiful-dnd";
// import { DndWrapper } from "../../components/DndWrapper";
import colorBgImg from "@/components/src/img/colorBgImg.png";
import logo from "@/components/src/img/AMLogo.png";
import DND from "@/components/Modules/models/DND";
import Activity from "@/components/Modules/models/DNDActivity/Activity";
import BackButton from "@/components/Layout/elements/BackButton";


const index = ({ data }) => {

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
       <div className=" w-full p-5 ">
       <h1 className=" my-auto  pt-10 text-3xl  text-white mx-3 ml-5 ">
          <span className="bg-white rounded-full p-0 h-fit">
            <BackButton />
          </span>{" "}
          Drag and Drop
        </h1>
          {/* <img src={logo.src} className="h-14" alt="" />{" "}
          <h1 className="ml-10 pt-5 text-white">Activity 2: Drag And Drops</h1>           */}
        </div>  
        <div className="mx-10 rounded-md">
        {/* <DND /> */}
        <Activity />
        </div>
        
      </div>
     
    </>
  );
};



export default index;

export async function getServerSideProps({query}){

  resetServerContext()   // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

  return {props: { data : []}}

}

