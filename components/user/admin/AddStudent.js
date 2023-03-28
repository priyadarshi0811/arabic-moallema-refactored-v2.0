import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import Link from "next/link";

import MultipleSelectChip from "@/components/Layout/elements/MultiChipSelector";
import { Checkbox, Divider, FormControlLabel, Grid } from "@mui/material";
import InputWithLable from "@/components/Layout/elements/InputWithLable";
import { createStudentTeacher } from "@/backend/CreateUser/CreateStudentTeacherDB";
import { fetchBatchesData } from "@/backend/Announcement/AnnouncementDB";
import AuthContext from "@/components/Context/store/auth-context";
import { addStudentToBatch } from "@/backend/Batches/AddStudentToBatchDB";
import { fetchStudentBasedonEmail } from "@/backend/UserProfile/StudentTeacherProfileDB";
import {
  updateStudentDetail,
  updateStudentEmail,
} from "@/backend/Students/StudentDB";
import BatchContext from "@/components/Context/store/batch-context";
import Spinner from "@/components/Layout/spinner/Spinner";
import { fetchBatcheIdBasedOnBatchName } from "@/backend/Batches/BatchesDB";
import { updateTeacherEmailFromAuth } from "@/backend/Teachers/UpdateTeacherEmail";
import supabaseAdmin from "@/backend/DeleteUser/SupabaseAdmin";

export default function AddUser({
  link,
  user,
  title,
  setOpen,
  userType,
  profileData,
  batchesData,
  batchName,
}) {
  const theme = useTheme();

  //inputFields
  const [name, setName] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [studentId, setStudentId] = React.useState("");
  const [newEmail, setNewEmail] = React.useState("");

  const [batch, setBatch] = React.useState(batchName);
  const [batchId, setBatchId] = React.useState();

  const [edit, setEdit] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);

  //get batches
  const auth = React.useContext(AuthContext);
  const batchCtx = React.useContext(BatchContext);

  //getting the bacthId
  React.useEffect(() => {
    const fetchBatchId = async () => {
      console.log("in");
      const data = await fetchBatcheIdBasedOnBatchName(batch);
      if (data[0]) {
        setBatchId(data[0].batch_id);
      }
    };
    fetchBatchId();
  }, [batch]);

  console.log(batchId);

  React.useEffect(() => {
    const fetchBatches = async () => {
      const data = await fetchBatchesData();
      auth.setBatchesData(data);
    };
    fetchBatches();
  }, []);

  user = user.charAt(0).toUpperCase() + user.slice(1);

  if (userType === "EditStudent") {
    React.useEffect(() => {
      setEdit(true);
      if (profileData && batchesData) {
        setName(profileData[0].name);
        setContact(profileData[0].contact);
        setEmail(profileData[0].email);
        setNewEmail(profileData[0].email);

        setStudentId(profileData[0].student_id);
      }
    }, [edit, profileData, batchesData]);
  }

  let studentProfile;
  if (profileData) {
    studentProfile = profileData;
  }

  //add a student to DB and Batch
  const addStudentHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("adding student");

    if (name && contact && email && batchId) {
      const password = uuidv4() + "@123AM"; // Generate a unique password for each user
      console.log("batch id: ", batchId);

      const data = await createStudentTeacher(email, password, "student");

      if (!data) {
        throw new Error(`Error creating user ${email}: ${error.message}`);
      }
      await axios
        .post("/api/send-email", {
          email,
          password,
          userPath: "student",
          name,
          contact,
          batchId,
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

  const editStudentDetail = async (e) => {
    e.preventDefault();
    if (studentId && batchId) {
      console.log("updateStudentSetail");
      updateStudentDetail(email, name, contact, batchId, studentId);
      batchCtx.setSubmittedHandler(true);
    }
  };

  const EditEmailHandler = async (e) => {
    e.preventDefault();
    console.log("update student Email");
    console.log(studentId);

    console.log(email);
    console.log(newEmail);

    if (newEmail) {
      updateStudentEmail(newEmail, studentId);
    }

    const { data, error } = await supabaseAdmin.auth.admin.listUsers();
    const userList = data.users;

    const updateUser = userList.filter((user) => user.email === email);

    const userId = updateUser[0].id;

    if (userId && newEmail) {
      updateTeacherEmailFromAuth(userId, newEmail);
    }

    if (email && newEmail) {
      await axios
        .post("/api/update-email", {
          newEmail,
          email,
          user: "student",
        })
        .then((res) => console.log("res: ", res))
        .catch((err) => console.log("error: ", err));

      // setIsLoading(false);
      // setOpen(false);
      // batchCtx.setSubmittedHandler(true);
    } else {
      // setIsLoading(false);
      console.log("Please fill in all fields");
    }
    if (email && newEmail) {
      await axios
        .post("/api/updated-email-message", {
          newEmail,
          email,
          user: "student",
        })
        .then((res) => console.log("res: ", res))
        .catch((err) => console.log("error: ", err));

      // setIsLoading(false);
      // setOpen(false);
      // batchCtx.setSubmittedHandler(true);
    } else {
      // setIsLoading(false);
      console.log("Please fill in all fields");
    }

    window.location.href = `/admin/students/studentprofile/${newEmail}`;
  };

  return (
    <>
      <div className=" p-5 rounded-md bg-white  pl-2">
        {isLoading && <Spinner title="Adding Student" />}
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
          {userType !== "EditStudent" && (
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

        <FormControl sx={{ m: 1, width: "250", minWidth: "100%" }}>
          <div className="grid grid-cols-5 ">
            <div className="col-span-1 mt-3">
              <label className=" mt-3">Batch</label>
            </div>
            <div className="col-span-4">
              <Select
                labelId="demo-controlled-open-select-label"
                className="w-full"
                size="small"
                id="demo-controlled-open-select"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
              >
                {auth.batchesList.map((batch) => (
                  <MenuItem value={batch.batch_name}>
                    {batch.batch_name}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
        </FormControl>

        <div className="items-center  py-3 text-right mt-2">
          <Button
            onClick={
              userType === "EditStudent" ? editStudentDetail : addStudentHandler
            }
            variant="contained"
            className="w-full bg-dark-purple my-3 mx-2"
            disableElevation
          >
            {title || "Edit " + user + " Details"}
          </Button>
        </div>
      </div>
      {userType == "EditStudent" && (
        <div className=" mt-5 p-5 rounded-md bg-white  pl-2">
          {isLoading && <Spinner title="Adding Student" />}
          <h1 className="text-2xl pl-2 pb-2">Change Email Address</h1>

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
              value={newEmail}
              defaultValue={newEmail}
              setValue={setNewEmail}
              lable="Email"
              id="email"
              type="email"
            />
          </Box>

          <div className="items-center  py-3 text-right mt-2">
            <Button
              onClick={EditEmailHandler}
              variant="contained"
              className="w-full bg-dark-purple my-3 mx-2"
              disableElevation
            >
              Edit Email
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
