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

const LiveClassHome = () => {
  const [liveClass, setLiveClass] = React.useState([]);
  const [filteredBatch, setFilteredBatch] = React.useState([]);
  const [error, setError] = React.useState();

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
  const handleSelectedItem = (batchData) => {
    console.log("batchData", batchData);
    let selectedBatch = liveClass.filter(
      (batch) => batch.batch_id === batchData
    );
    if (batchData) {
      selectedBatch.length === 0 ? setError(true) : setError(false);
    }
    setFilteredBatch(selectedBatch);
  };

  const dataToDisplay = filteredBatch.length === 0 ? liveClass : filteredBatch;

  console.log("okl");

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
        <div className="flex-1 h-screen p-7  ">
          <div className="m-0 p-10 w-full h-fit">
            <div className="grid grid-cols-5 w-full mx-auto my-5 gap-10">
              <div className="col-span-1">
                <h1 className=" my-auto text-2xl mt-3 ">
                  <BackButton /> Live Batches
                </h1>
              </div>
              <div className="col-span-2">
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
          </div>
          {error && (
            <p className="text-red-500 justify-center items-center flex text-xl font-bold">
              No Live Class for the selected Batch
            </p>
          )}
          <div className="m-0 p-10 w-full h-fit">
            <div className="grid grid-cols-3 w-full mx-auto my-10 gap-10">
              {!error &&
                dataToDisplay &&
                dataToDisplay.map((classData) => (
                  <CardList
                    title={classData.batch_id}
                    subTitle={classData.chapter_name}
                    link={`/admin/live-batches/livebatchdetail/${classData.batch_id}`}
                  />
                ))}
            </div>
            {/* title="Chapter 2"
    disc="from Batch 2"
    isBtn="true"
    btnText="open"
    link="/admin/live-batches/live-batch-details" */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClassHome;
