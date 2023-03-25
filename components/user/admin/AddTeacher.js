import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import MultipleSelectChip from "@/components/Layout/elements/MultiChipSelector";
import InputWithLable from "@/components/Layout/elements/InputWithLable";
import { Button, Box, Modal } from "@mui/material";
import RemoveUser from "@/components/Modules/batches/RemoveUser";
import { createStudentTeacher } from "@/backend/CreateUser/CreateStudentTeacherDB";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { updateStudentDetail } from "@/backend/Students/StudentDB";
import { updateTeacherDetail } from "@/backend/Teachers/TeacherDB";
import BatchContext from "@/components/Context/store/batch-context";
import Spinner from "@/components/Layout/spinner/Spinner";

// const names = ["Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddUser({
  link,
  user,
  title,
  setOpen,
  action,
  userType,
  profileData,
  batchesData,
}) {
  const theme = useTheme();

  //inputFields
  const [name, setName] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [teacherId, setTeacherId] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);
  const batchCtx = React.useContext(BatchContext);

  let isEdit;

  const showChip = () => {
    if (action == "edit") {
      isEdit = true;
    }
  };
  showChip();

  user = user.charAt(0).toUpperCase() + user.slice(1);

  React.useEffect(() => {
    if (userType === "showTeacher") {
      if (profileData && batchesData) {
        setName(profileData[0].name);
        setContact(profileData[0].contact);
        setEmail(profileData[0].email);
        setTeacherId(profileData[0].teacher_id);
      }
    }
  }, [profileData, batchesData]);

  const addTeacherHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("adding teacher");

    if (name && contact && email) {
      const password = uuidv4() + "@123AM"; // Generate a unique password for each user

      const data = await createStudentTeacher(email, password, "instructor");

      if (!data) {
        throw new Error(`Error creating user ${email}: ${error.message}`);
      }
      await axios
        .post("/api/send-email", {
          email,
          password,
          userPath: "instructor",
          name,
          contact,
        })
        .then((res) => console.log("res: ", res))
        .catch((err) => console.log("error: ", err));

      console.log(`User ${data.email} created successfully`);
      setIsLoading(false);
      setOpen(false);
      batchCtx.setSubmittedHandler(true);
    } else {
      setIsLoading(false);
      console.log("Please fill in all fields");
    }
  };

  const editTeachersDetail = async (e) => {
    e.preventDefault();
    console.log("update Teacher Detail");

    if (teacherId) {
      updateTeacherDetail(email, name, contact, teacherId);
      batchCtx.setSubmittedHandler(true);
    }
    // if (userType === "showTeacher") {
    //   let prevEmail;

    //   setEmail((prev) => {
    //     prevEmail = prev;
    //   });
    //   if (email != prevEmail) {
    //     console.log(email);

    //     console.log("email changed");
    //   } else {
    //     console.log("not changed");
    //   }
    // }
  };

  return (
    <div className=" p-5 rounded-md bg-white  pl-2">
      {isLoading && <Spinner title="Adding Teacher" />}

      <h1 className="text-2xl pl-2 pb-2">{title || user + " Details"}</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
        className=" border-t-2 border-gray-300 mt-1"
      >
        <InputWithLable
          value={name}
          defaultValue={name}
          setValue={setName}
          lable="Name"
          id="name"
          type="text"
        />
        <InputWithLable
          value={contact}
          defaultValue={contact}
          setValue={setContact}
          lable="Contact"
          id="contact"
          type="number"
        />
        {userType !== "showTeacher" && (
          <InputWithLable
            value={email}
            defaultValue={email}
            setValue={setEmail}
            lable="Email"
            id="email"
            type="email"
          />
        )}
      </Box>

      {!isEdit && userType !== "addTeacher" && (
        <div className="m-0 p-0 w-full">
          {batchesData && <MultipleSelectChip batchesData={batchesData} />}
        </div>
      )}

      <div className="items-center  py-3 text-right mt-2">
        <Button
          onClick={
            userType === "showTeacher" ? editTeachersDetail : addTeacherHandler
          }
          variant="contained"
          className="w-full bg-dark-purple my-3 mx-2"
          disableElevation
        >
          {title || "Edit " + user + " Details"}
        </Button>
      </div>
      {isEdit && (
        <div className="m-0 p-0 w-full">
          {batchesData && <MultipleSelectChip batchesData={batchesData} />}
          <div></div>
          <Button
            variant="contained"
            className="w-full bg-dark-purple my-3 mx-2"
            disableElevation
          >
            Edit Batch
          </Button>
        </div>
      )}

      <Modal
        // open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <RemoveUser
            user="Batch 1"
            isReplace={false}
            type="Batch"
            action="Remove"
          />
        </Box>
      </Modal>
    </div>
  );
}
