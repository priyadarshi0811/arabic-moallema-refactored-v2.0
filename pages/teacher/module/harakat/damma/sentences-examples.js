import SentenceMaking from "@/components/Modules/models/module2/SentenceExample";
import React from "react";

const SentencesExamples = () => {
  return (
    <div>
      <SentenceMaking user="teacher" type="damma" nextM='madd/discription' preM="damma/words-examples" />
    </div>
  );
};

export default SentencesExamples;
