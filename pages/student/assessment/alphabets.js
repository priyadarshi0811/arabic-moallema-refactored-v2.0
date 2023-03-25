import React, { useContext, useEffect, useState } from "react";
import grayBgImg from "@/components/src/img/grayBgImg.png";
import Sidebar from "@/components/Layout/navigation/Sidebar";
import CreateBatch from "@/components/user/admin/CreateBatch";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import BackButton from "@/components/Layout/elements/BackButton";
import Button from "@mui/material/Button";
import CardList from "@/components/user/admin/CardList";
import Link from "next/link";
import MUIMiniCard from "@/components/Layout/card/MUIMiniCard";
import AuthContext from "@/components/Context/store/auth-context";
import { fetchSubmittedAssignmentBasedOnStudent } from "@/backend/Assignment/FetchAssignmentDB";
import { useRouter } from "next/router";
import { fetchStudentIdBasedOnEmail } from "@/backend/Students/StudentDB";
import { fetchBatcheIdBasedOnBatchName } from "@/backend/Batches/BatchesDB";

const Alphabates = [
  { letter: "خ", title: "Khaa" },
  { letter: "ح", title: "Haa" },
  { letter: "ج", title: "Jeem" },
  { letter: "ث", title: "Thaa" },
  { letter: "ت", title: "Ta" },
  { letter: "ب", title: "Baa" },
  { letter: "ا", title: "Alif" },
  { letter: "ص", title: "Saad" },
  { letter: "ش", title: "Sheen" },
  { letter: "س", title: "Seen" },
  { letter: "ز", title: "Zai" },
  { letter: "ر", title: "Raa" },
  { letter: "ذ", title: "Dhaal" },
  { letter: "د", title: "Daal" },
  { letter: "ق", title: "Qaaf" },
  { letter: "ف", title: "Faa" },
  { letter: "غ", title: "Ghayn" },
  { letter: "ع", title: "Ayn" },
  { letter: "ظ", title: "Dhaa" },
  { letter: "ط", title: "Taa" },
  { letter: "ض", title: "Daad" },
  { letter: "ي", title: "Yaa" },
  { letter: "و", title: "Waaw" },
  { letter: "ه", title: "Ha" },
  { letter: "ن", title: "Noon" },
  { letter: "م", title: "Meem" },
  { letter: "ل", title: "Laam" },
  { letter: "ك", title: "Kaaf" },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const index = () => {
  const [filteredAssignment, setFilteredAssignment] = useState([]);
  const [error, setError] = useState();
  const [studentIdNew, setStudntIdNew] = useState();
  const [batchId, setBatchId] = useState();

  const authCtx = useContext(AuthContext);
  const studentId = authCtx.userEmail;

  const router = useRouter();
  const type = authCtx.userType;

  const loggedIn = authCtx.isLoggedIn;

  const typeStudent = authCtx.userType === "student" ? true : false;

  if (!typeStudent && loggedIn) {
    router.replace("/");
  }

  useEffect(() => {
    console.log("in");
    if (typeStudent && loggedIn) {
      if (!typeStudent && !loggedIn) {
        console.log("second in");
        router.replace("/");
      }
    }

    const localType = localStorage.getItem("type");

    if (localType !== "student") {
      console.log("second in");
      router.replace("/");
    }
  }, [loggedIn, typeStudent]);

  console.log(studentId);

  useEffect(() => {
    const fetchStudentBatch = async () => {
      if (studentIdNew && batchId) {
        const data = await fetchSubmittedAssignmentBasedOnStudent(
          studentIdNew,
          batchId
        );
        if (studentId) {
          data.length === 0 ? setError(true) : setError(false);
        }
        setFilteredAssignment(data);
      }
    };
    fetchStudentBatch();
  }, [studentIdNew, batchId]);

  useEffect(() => {
    const getId = async () => {
      if (studentId) {
        const data = await fetchStudentIdBasedOnEmail(studentId);
        if (data[0]) {
          setStudntIdNew(data[0].student_id);
        }
      }
    };
    getId();
  }, [studentId]);

  useEffect(() => {
    const getId = async () => {
      const batch = localStorage.getItem("batchName");
      const data = await fetchBatcheIdBasedOnBatchName(batch);
      if (data[0]) {
        setBatchId(data[0].batch_id);
      }
    };
    getId();
  }, []);

  console.log("batch: ", batchId);
  console.log("student: ", studentIdNew);

  console.log(filteredAssignment);

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
        <Sidebar nav_index={2} />
        <div className="flex-1  p-7  ">
          <div className="m-0 p-10 w-full h-fit">
            <div className="grid grid-cols-5 w-full mx-auto my-5 gap-10">
              <div className="col-span-1">
                <h1 className=" my-auto text-2xl mt-3 ">
                  <BackButton /> Assignmets
                </h1>
              </div>
              <div className="col-span-2">
                <div className="px-2 w-full ">
                  {/* <SelectDropdown value="class" lable="Select Batch" /> */}
                </div>
              </div>
            </div>
            <Divider variant="middle" />
          </div>
          <div className="grid grid-cols-4 gap-6">
            {filteredAssignment &&
              filteredAssignment.map((assignment) => (
                <div className="mx-auto  w-fit h-fit">
                  <MUIMiniCard
                    minTitle="Assigment for "
                    title={assignment.sub_module}
                    isBtn={assignment.is_assesed ? true : false}
                    isChip={!assignment.is_assesed && true}
                    chipLable="Not Graded"
                    btnText="View"
                    link={`/student/assessment/${assignment.sub_module}`}
                  />
                </div>
              ))}

            <div className="m-0 p-10 w-fit h-fit"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
