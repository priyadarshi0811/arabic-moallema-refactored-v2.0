import MUIMiniCard from "@/components/Layout/card/MUIMiniCard";
import React from "react";

const CardList = ({ title, subTitle, link, disc }) => {
  return (
    <div>
      <div className="col-span-auto">
        <MUIMiniCard
          title={title}
          disc={subTitle}
          isBtn="true"
          btnText="open"
          link={link}
        />
      </div>
    </div>
  );
};

export default CardList;
