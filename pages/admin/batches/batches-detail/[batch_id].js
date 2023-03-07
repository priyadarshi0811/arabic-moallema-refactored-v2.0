import BatchDetailHome from "@/components/Modules/batches/BatchDetailHome";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();

  let batchName;
  if (router.query.batch_id) {
    batchName = router.query.batch_id;
  }

  return <>{batchName && <BatchDetailHome batchName={batchName} />}</>;
};

export default index;
