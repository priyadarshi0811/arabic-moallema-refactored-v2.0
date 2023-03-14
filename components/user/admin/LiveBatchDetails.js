import React from "react";
import BatchDetailsMin from "@/components/Modules/batches/BatchDetaisMin";
import UserList from "@/components/Modules/batches/UserList";
import CardLayout from "@/components/Layout/card/CardLayout";

const LiveBatchDetails = ({
  detail,
  sheduleData,
  enrollStudents,
  batchName,
}) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="col-span-1">
          <BatchDetailsMin detail={detail} sheduleData={sheduleData} />
        </div>
        <div className="col-span-1">
          <UserList batchName={batchName} enrollStudents={enrollStudents} />
        </div>
      </div>

      <div className="my-10">
        {detail[0] && (
          <CardLayout
            title="Class 1"
            path="/"
            description={detail[0].g_meet}
            isBtn='true'
            svg=""
            btn="Join Class"
            onClick={""}
          />
        )}
      </div>
    </div>
  );
};

export default LiveBatchDetails;
