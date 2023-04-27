import TestKnowledge from "@/components/Modules/models/TestKnowledgeActivity.js/TestKnowledgeActivityHome";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();

  let subModule;
  let module;
  let activityIndex;

  if (router.query.test_knowledge) {
    module = router.query.test_knowledge[0];
    subModule = router.query.test_knowledge[1];
    activityIndex = router.query.test_knowledge[2];
  }

  return (
    <div>
      {subModule && module && activityIndex && (
        <TestKnowledge
          user="teacher"
          subModule={subModule}
          module={module}
          activityIndex={activityIndex}
        />
      )}
    </div>
  );
};

export default index;
