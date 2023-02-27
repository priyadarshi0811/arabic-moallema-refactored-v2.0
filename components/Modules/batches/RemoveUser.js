import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

const EditTeacher = ({ user, isReplace, action, type, option }) => {
  const handleChange = () => {
    // remove user
  };

  const replace = isReplace || false;

  return (
    <div className="">
      {/* <form onSubmit={onclassCreateHandler}> */}
      <div className="overflow-hidden ">
        <div className=" ">
          <h1 className="text-2xl mb-2 mt-0 text-dark-purple text-center">
            {action} {type}{" "}
          </h1>
          <Stack sx={{ width: "100%" }} spacing={2} className="my-10">
            {replace && (
              <Alert severity="warning">
                {user} is Currently taking 3 Batches and 10 Assingnments
              </Alert>
            )}
            <Alert severity="error">
              Do you realy want to {action} {user} from the database?
            </Alert>
            <Alert severity="success">
              The {user} has been {action}d Successfully
            </Alert>
          </Stack>

          <div className="grid grid-cols-6 gap-6 ">
            <div className="col-span-6">
              <div className="grid grid-cols-8 gap-3">
                <div className="col-span-8 sm:col-span-3 mb-3">
                  <label
                    htmlFor="user-type"
                    className="block text-sm mt-1 py-1  font-medium text-gray-700"
                  >
                    Current {type}:
                  </label>
                </div>
                <div className="col-span-8 sm:col-span-5">
                  <label
                    htmlFor="user-type"
                    className="block text-sm  font-medium text-gray-700 border-2 py-1 px-3 rounded-md"
                  >
                    {user}
                  </label>
                </div>
              </div>

              {replace && (
                <div className="grid grid-cols-8 gap-3 mt-3">
                  <div className="col-span-8 sm:col-span-3">
                    <label
                      htmlFor="user-type"
                      className="block text-sm font-medium  text-gray-700"
                    >
                      Reassign these batches and assignments to:
                    </label>
                  </div>
                  <div className="col-span-8 sm:col-span-5">
                    <select
                      id="user-type"
                      name="user-type"
                      value=""
                      onChande={handleChange}
                      autoComplete="user-type"
                      required
                      className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>Teacher 1</option>
                      <option>Teacher 2</option>
                      <option>Teacher 3</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="items-center  py-3 text-right mt-5">
          
          <Button variant="contained" className=" w-full bg-dark-purple  ">
            {action} {type}
          </Button>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default EditTeacher;
