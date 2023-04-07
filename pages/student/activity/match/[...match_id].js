import AuthContext from "@/components/Context/store/auth-context";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import MatchDndHome from "@/components/Modules/models/MatchDnd/MatchDndHome";
import { resetServerContext } from "react-beautiful-dnd";
const index = () => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  let id;
  let module;
  let activityIndex;
  if (router.query.match_id) {
    id = router.query.match_id[1];
    module = router.query.match_id[0];
    activityIndex = router.query.match_id[2];
  }

  console.log(id);
  console.log(module);

  return (
    <>
      {id && module && activityIndex && (
        <MatchDndHome
          subModule={id}
          module={module}
          activityIndex={activityIndex}
        />
      )}
    </>
  );
};

export default index;

export async function getServerSideProps({ query }) {
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

  return { props: { data: [] } };
}
