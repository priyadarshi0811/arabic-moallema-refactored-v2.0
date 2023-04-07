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
  if (router.query.match_id) {
    id = router.query.match_id[1];
    module = router.query.match_id[0];
  }

  console.log(id);
  console.log(module);

  return <>{id && module && <MatchDndHome subModule={id} module={module} />}</>;
};

export default index;

export async function getServerSideProps({ query }) {
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

  return { props: { data: [] } };
}
