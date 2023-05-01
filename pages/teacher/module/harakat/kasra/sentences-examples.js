import SentenceMaking from "@/components/Modules/models/module2/SentenceExample";
import React from "react";

const SentencesExamples = () => {
  return (
    <div>
      <SentenceMaking user="teacher" type="kasra"  module="harakat" nextM='damma/discription' preM="kasra/words-examples" />
    </div>
  );
};

export default SentencesExamples;
