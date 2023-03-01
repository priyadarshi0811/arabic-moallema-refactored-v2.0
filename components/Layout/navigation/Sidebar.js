import Link from "next/link";
import { useContext, useState } from "react";
import logo from "@/components/src/img/AMLogo.png";
import sidebarBgImg from "@/components/src/img/Frame73.png";
import { useRouter } from "next/router";
import avatar from "@/components/src/img/ArabicMollemaMascot-01.png";
import {
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";

// MUI Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import ClassIcon from "@mui/icons-material/Class";
import SchoolIcon from "@mui/icons-material/School";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AuthContext from "@/components/Context/store/auth-context";

const Sidebar = (props) => {
  let nav_data = nav_reference()[props.nav_index];

  const authCtx = useContext(AuthContext);
  const router = useRouter();

  const logoutHandler = (e) => {
    console.log("LoggOut");
    authCtx.logout();
    router.replace("/");
  };
  const [open, setOpen] = useState(true);

  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-72" : "w-24 "
        } bg-dark-black min-h-screen h-full  p-5  pt-8 relative duration-300`}
        style={{
          backgroundImage: `url(${sidebarBgImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "fixed",
          top: 0,
          position: " -webkit-sticky",
          // overflow: 'hidden'
        }}
      >
        <img
          src="https://static.thenounproject.com/png/1195182-200.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple  bg-white
           border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <img
            src={logo.src}
            className={`cursor-pointer duration-500 rounded-md ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-100 ${
              !open && "scale-0"
            }`}
          ></h1>
        </div>

        <ul className="pt-6">
          {open && (
            <Divider className="text-white border-white">
              <Chip label="Dashboard" className="bg-white text-dark-purple" />
            </Divider>
          )}
          {nav_data.map((nav_obj) => (
            <Link href={nav_obj.link}>
              <li
                // key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
              >
                {/* <img src={nav_obj.img} className="w-8 border rounded-md" />  */}
                <Tooltip title={nav_obj.linkname}>
                  <span
                    className="bg-white rounded-sm "
                    style={{ padding: "7px" }}
                  >
                    {nav_obj.img}
                  </span>
                </Tooltip>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-base`}
                >
                  {nav_obj.linkname}
                </span>
              </li>
            </Link>
          ))}
        </ul>

        <ul className="mt-20">
          {open && (
            <Divider className="text-white border-white">
              <Chip label="User" className="bg-white text-dark-purple" />
            </Divider>
          )}
          <Link href="/">
            <li
              // key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
            >
              {/* <img src={nav_obj.img} className="w-8 border rounded-md" />  */}
              <Tooltip title="My Profile">
                <Avatar alt="User" src={avatar} />
              </Tooltip>
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-base`}
              >
                My Profile
              </span>
            </li>
          </Link>
          <Link href="/">
            <li
              // key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
            >
              {/* <img src={nav_obj.img} className="w-8 border rounded-md" />  */}
              <Tooltip title="Log Out">
                <span
                  className="bg-white rounded-sm "
                  style={{ padding: "7px" }}
                >
                  <LogoutIcon className="text-dark-purple" />
                </span>
              </Tooltip>
              <span
                onClick={logoutHandler}
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-base`}
              >
                Log Out
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;

const ListItemObj = (props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText primary={props.linkname}></ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

function nav_reference() {
  let nav_reference_ovj;
  nav_reference_ovj = {
    0: [
      {
        linkname: "Batches",
        link: "/admin",
        img: <ClassIcon className="text-dark-purple" />,
      },
      {
        linkname: "Live Batches",
        link: "/admin/live-batches",
        img: <LiveTvIcon className="text-dark-purple" />,
      },
      {
        linkname: "Students",
        link: "/admin/students",
        img: <GroupsIcon className="text-dark-purple" />,
      },
      {
        linkname: "Teachers",
        link: "/admin/teachers",
        img: <SchoolIcon className="text-dark-purple" />,
      },
      {
        linkname: "Assignment",
        link: "/admin/assignments",
        img: <AssessmentIcon className="text-dark-purple" />,
      },
      {
        linkname: "Modules",
        link: "/admin/modules",
        img: <AssessmentIcon className="text-dark-purple" />,
      },
    ],
    1: [
      {
        linkname: "Batches",
        link: "/teacher",
        img: <DashboardIcon className="text-dark-purple" />,
      },
      {
        linkname: "Classes",
        link: "/work-in-progress",
        img: <ClassIcon className="text-dark-purple" />,
      },
    ],
    2: [
      {
        linkname: "Classes",
        link: "/work-in-progress",
        img: <DashboardIcon className="text-dark-purple" />,
      },
      {
        linkname: "Classes",
        link: "/work-in-progress",
        img: <ClassIcon className="text-dark-purple" />,
      },
    ],
  };
  return nav_reference_ovj;
}

// title1="TeacherDashboard"
// src1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAAD7+/t1dXWurq42NjZQUFC0tLTk5OR4eHiioqI9PT26urpiYmL39/eMjIycnJxsbGzY2NjHx8fs7OyEhIQICAhGRkYrKyve3t5PT08ODg7p6ek2refjAAADAElEQVR4nO3d63aaUBBAYfGCiEFBBU3T93/OtmgEG1mTmTMnibi/32UWOyJgIzmTCQAAAAAAAAAAAAAAeGhTE+8RsWR5dUpMit11yK6wjThVeRa5b5/adu3s5TLlJWRIuo/Yl/0K2bW/Du2YQ+CUNNrrOA/csySp2zl18Jx5nMBt8I4l63bQOnzQ9ocGJot20sJhUoTE8EM08Sz0P1Azj73yLEy8TzdBV4krz8LUN3DvslOuhYnvdfHmJXyr8rnCstv4/8J0qRlUFk1/N1xfxJt34Xaj3Ho1WLhSTtrcnNA934l5b+5SvfVssHCmnrXs7Umu3npY1XsF9Vt7FvYvy5V+60Hdp4k37SE6cS7cdO/Fk37rIdOwn5tr4aT3wcvv82Kv0HLs+xbmkQstN0u+hXMKLSgUUKhDoQmFAgp1KDShUEChDoUmFAoo1KHQhEIBhToUmlAooFCHQhMKBRTqUGhCoYBCHQpNKBRQqEOhCYUCCnUoNKFQ8FiF+u/Pen5H+J9l5MJ0NdNaLQYLF4ZpaeTCMK7f1aeQQgpNxl94bMcdvcY5PvlsfDD5g7KdVjpNK/wCJzufXWrOP/RpI//Tz9gJe60S9PT1u+b1Mu3VY9r1yXAnh3q9CHMsu7fNtDwGTlvXB99AAPgCHufS7tFFj3Ppb99Al+th8oOvh073NJcbSa/bXM97mtHfl47/swWfDz+NQiUKKbxbOP7/8x7/7y3G/7snCu+hUIdCEwoFFOpQaEKhgEIdCk0oFFCoQ6EJhQIKdSg0oVBAoQ6FJhQKKNSh0IRCAYU6FJpQKKBQh0ITCgUU6lBoQqGAQp3YhaVh88daK8jy/fgHWO+pt2ZXM841u55g3bXxr503/vUPb9ewbIrvWcMyj7iG5ROsQzr+tWSfYD3g8a/p/ATrcj/B2uoeB2rdzqmD50Q4RM+y0DPq+W9ZHAKnpO4nmZ59UOP709dBT4anztfBD7K8Osm7cU/RPXu9Mz46farymK9fZ2riPQIAAAAAAAAAAAAAADycP6y6R5594gAlAAAAAElFTkSuQmCC  "
// link1="/teacher"

// title2="Classes"
// src2=<DashboardIcon className="text-dark-purple" />
// link2="/work-in-progress"

// title3="Students Progress Reoprt"
// src3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjoItob1EG7NnRrNnZbvOaKNMrVvjBpm5HQ&usqp=CAU"
// link3="/work-in-progress"

// title4="Class Progress Reoprt"
// src4="data:image/png;base64,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  "
// link4="/work-in-progress"
