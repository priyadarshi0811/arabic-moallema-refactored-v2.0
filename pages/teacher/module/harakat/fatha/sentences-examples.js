import SentenceMaking from "@/components/Modules/models/module2/SentenceExample";
import React from "react";

const SentencesExamples = () => {
  return (
    <div>
      <SentenceMaking user="teacher" type="fatha" module="harakat" nextM='kasra/discription' preM="fatha/words-examples" />
    </div>
  );
};

export default SentencesExamples;
