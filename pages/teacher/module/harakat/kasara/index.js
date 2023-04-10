import React from "react";

import HarakatDetails from "@/components/Modules/models/module2/Harakat";

const index = () => {
  return (
    <HarakatDetails
      user="teacher"
      harakatType="kasara"
      nextUrl="kasara/how-to-read-1"
    />
  );
};

export default index;
