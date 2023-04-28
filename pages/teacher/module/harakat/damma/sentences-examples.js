import SentenceMaking from "@/components/Modules/models/module2/SentenceExample";
import React from "react";

const SentencesExamples = () => {
  return (
    <div>
      <SentenceMaking
        user="teacher"
        type="damma"
        module="harakat"
        nextM="madd"
      />
    </div>
  );
};

export default SentencesExamples;
