import SentenceMaking from "@/components/Modules/models/almadood/SentenceExampleAlmadood";
import React from "react";

const SentencesExamples = () => {
  return (
    <div>
      <SentenceMaking
        user="student"
        type="alif"
        nextM="alif/discription"
        preM="alif/words-examples"
      />
    </div>
  );
};

export default SentencesExamples;
