import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export default function PinnedSubheaderList() {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className=" border-b-2 p-3 border-dark-black">
        <h1 className="text-2xl">Enrolled Students</h1>        
      </div>
      <List
          sx={{
            width: "100%",
            minWidth: 360,
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: 200,
            "& ul": { padding: 0 },
          }}
          className="rounded-md"
          subheader={<li />}
        
        >
          
            <li >
              <ul>
                <ListSubheader>{`From Batch 1`}</ListSubheader>
                {[0, 1, 2, 3, 4].map((item) => (
                  <ListItem key={`Student-${item+1}`}>
                    <ListItemText primary={`Student${item+1}@gmail.com`} />
                  </ListItem>
                ))}
              </ul>
            </li>
        </List>
    </div>
  );
}
