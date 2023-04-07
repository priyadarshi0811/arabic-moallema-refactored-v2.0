import SelectActivityHome from "@/components/Modules/models/SelectActivity/SelectActivityHome";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();

  let id;
  let module;
  let activityIndex;

  if (router.query.select_id) {
    id = router.query.select_id[1];
    module = router.query.select_id[0];
    activityIndex = router.query.select_id[2];
  }

  console.log(id);
  console.log(module);

  return (
    <div>
      {id && module && activityIndex && (
        <SelectActivityHome
          subModule={id}
          module={module}
          activityIndex={activityIndex}
        />
      )}
    </div>
  );
};

export default index;
