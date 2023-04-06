import MatchDndHome from "@/components/Modules/models/MatchDnd/MatchDndHome";
import React, { useState } from "react";
import { resetServerContext } from "react-beautiful-dnd";

const index = () => {
  return (
    <>
      <MatchDndHome />
    </>
  );
};

export default index;

export async function getServerSideProps({ query }) {
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

  return { props: { data: [] } };
}
