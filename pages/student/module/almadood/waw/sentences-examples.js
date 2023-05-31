import SentenceMaking from "@/components/Modules/models/almadood/SentenceExampleAlmadood";
import React from "react";

const SentencesExamples = () => {
  return (
    <div>
      <SentenceMaking
        user="student"
        type="waw"
        nextM="waw/discription"
        preM="waw/words-examples"
      />
    </div>
  );
};

export default SentencesExamples;
