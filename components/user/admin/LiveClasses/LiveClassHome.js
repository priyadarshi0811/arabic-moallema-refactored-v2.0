import Sidebar from "@/components/Layout/navigation/Sidebar";
import React, { useContext } from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";
import SelectDropdown from "@/components/Layout/elements/SelectDropdown";
import Divider from "@mui/material/Divider";
import BackButton from "@/components/Layout/elements/BackButton";
import CardList from "@/components/user/admin/CardList";
import { fetchLiveClassData } from "@/backend/LiveClass/LiveClassDB";
import { fetchBatchesData } from "@/backend/Announcement/AnnouncementDB";
import AuthContext from "@/components/Context/store/auth-context";
import { fetchBatcheIdBasedOnBatchName } from "@/backend/Batches/BatchesDB";
import { useEffect } from "react";
import WarningCard from "@/components/Layout/card/WarningCard";

const LiveClassHome = () => {
  const [liveClass, setLiveClass] = React.useState([]);
  const [filteredBatch, setFilteredBatch] = React.useState([]);
  const [error, setError] = React.useState();
  const [warning, setWarning] = React.useState(false);

  const authCtx = useContext(AuthContext);

  React.useEffect(() => {
    const fetchLive = async () => {
      const data = await fetchLiveClassData();
      setLiveClass(data);
    };
    fetchLive();
  }, []);

  React.useEffect(() => {
    const fetchBatches = async () => {
      const data = await fetchBatchesData();
      authCtx.setBatchesData(data);
    };
    fetchBatches();
  }, []);

  //get the filtered value
  const handleSelectedItem = async (batchData) => {
    let batchId;

    const idData = await fetchBatcheIdBasedOnBatchName(batchData);
    if (idData[0]) {
      batchId = idData[0].batch_id;
    }

    let selectedBatch = liveClass.filter((batch) => batch.batch_id === batchId);
    if (batchData) {
      selectedBatch.length === 0 ? setError(true) : setError(false);
    }
    setFilteredBatch(selectedBatch);
  };

  const dataToDisplay = filteredBatch.length === 0 ? liveClass : filteredBatch;
  console.log(dataToDisplay);

  useEffect(() => {
    if (dataToDisplay && dataToDisplay.length > 0) {
      setWarning(false);
    } else {
      setWarning(true);
    }
  }, [dataToDisplay]);

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${grayBgImg.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "100%",
        backgroundPosition: "center top",
        widows: "100vw",
        minHeight: "100vh",
      }}
    >
      <div className="flex min-h-screen h-full">
        <Sidebar nav_index={0} />
        <div className="flex-1  p-7  ">
          <div className="m-0 p-10 w-full h-fit">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full mx-auto my-5 gap-10">
              <div className="col-span-1">
                <h1 className=" my-auto text-2xl mt-3 ">
                  <BackButton /> Live Batches
                </h1>
              </div>
              <div className="col-span-1">
                <div className="px-5 w-full">
                  <SelectDropdown
                    handleSelectedItem={handleSelectedItem}
                    allItems={authCtx.batchesList}
                    type="Batch"
                    lable="Select Batch"
                  />
                </div>
              </div>
            </div>
            <Divider variant="middle" />
            {warning && <WarningCard title="No live classes going on" />}
          </div>
          {error && (
            <p className="text-red-500 justify-center items-center flex text-xl font-bold">
              No Live Class for the selected Batch
            </p>
          )}
          <div className="m-0 p-10 w-full h-fit">
            <div className="grid grid-cols-2 lg:grid-cols-3 w-full mx-auto my-10 gap-10">
              {!error &&
                dataToDisplay &&
                dataToDisplay.map((classData) => (
                  <div>
                    <CardList
                      title={authCtx.batchesList
                        .filter(
                          (batch) => batch.batch_id === classData.batch_id
                        )
                        .map((item) => item.batch_name)}
                      subTitle={classData.chapter_name}
                      link={`/admin/live-batches/livebatchdetail/${classData.batch_id}`}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClassHome;
