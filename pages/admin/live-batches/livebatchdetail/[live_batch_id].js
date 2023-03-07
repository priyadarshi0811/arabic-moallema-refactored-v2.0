import LiveBatchDetail from "@/components/user/admin/LiveClasses/LiveBatchDetail";
import { useRouter } from "next/router";
import React from "react";

const liveClasses = () => {
  const router = useRouter();

  let id;
  if (router.query.live_batch_id) {
    id = router.query.live_batch_id;
    console.log(id);
  }

  return <>{id && <LiveBatchDetail batchName={id} />}</>;
};

export default liveClasses;
