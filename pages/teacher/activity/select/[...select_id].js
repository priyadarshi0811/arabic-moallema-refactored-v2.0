import SelectActivityHome from "@/components/Modules/models/SelectActivity/SelectActivityHome";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();

  let id;
  let module;
  if (router.query.select_id) {
    id = router.query.select_id[1];
    module = router.query.select_id[0];
  }

  console.log(id);
  console.log(module);

  return (
    <div>
      {id && module && <SelectActivityHome subModule={id} module={module} />}
    </div>
  );
};

export default index;
