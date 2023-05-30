import SentenceMaking from "@/components/Modules/models/almadood/SentenceExampleAlmadood";
import React from "react";

const SentencesExamples = () => {
  return (
    <div>
      <SentenceMaking
        user="teacher"
        type="yaa"
        nextM="yaa/discription"
        preM="yaa/words-examples"
      />
    </div>
  );
};

export default SentencesExamples;
