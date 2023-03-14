import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Box, Modal, Button } from "@mui/material";
import RemoveUser from "@/components/Modules/batches/RemoveUser";
import { fetchBatchesData } from "@/backend/Announcement/AnnouncementDB";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const names = [
  "Batch 1",
  "Batch 2",
  "Batch 3",
  "Batch 4",
  "Batch 5",
  "Batch 6",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({ batchesData }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [allBatches, setAllBatches] = React.useState();
  const [selectedBatch, setSelectedBatch] = React.useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = (batchName) => {
    setOpen(true);
    setSelectedBatch(batchName);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  React.useEffect(() => {
    const fetchBatch = async () => {
      const data = await fetchBatchesData();
      setAllBatches(data);
    };
    fetchBatch();
  }, []);

  let filteredBatches;
  if (allBatches && batchesData) {
    filteredBatches = allBatches
      .filter((batch) => {
        return !batchesData.some(
          (data) => data.batch_name === batch.batch_name
        );
      })
      .concat(
        batchesData.filter((data) => {
          return !allBatches.some(
            (batch) => batch.batch_name === data.batch_name
          );
        })
      );
  }
  console.log(filteredBatches);

  const handleDelete = (value) => {
    console.log(value);
    console.info("You clicked the delete icon.");
    setPersonName((prevSelected) => prevSelected.filter((val) => val !== value));
  };
  console.log(personName);

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

  return (
    <div>
      <div className="grid grid-cols-5 ">
        <div className="col-span-1 mt-3 pl-2">
          <label className=" mt-3 pt-2 ">Select Batches</label>
        </div>
        <div className="col-span-4">
          {filteredBatches && (
            <FormControl sx={{ m: 1 }} className="w-full">
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                // size='small'
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {filteredBatches.map((batch) => (
                  <MenuItem
                    key={batch.batch_name}
                    value={batch.batch_name}
                    style={getStyles(batch.batch_name, personName, theme)}
                  >
                    {batch.batch_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </div>
      </div>

      <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
        <Select
          value={personName}
          onChange={handleChange}
          // displayEmpty
          inputProps={{ readOnly: true }}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  onClick={handleOpen}
                  onDelete={handleDelete}

                  className="bg-dark-purple text-white p-3"
                />
              ))}
            </Box>
          )}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className=" m-4">
        <h1 className="m-2 mb-4">Assigned Batches</h1>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {batchesData.map((batch) => (
            <Chip
              key={batch.batch_name}
              label={batch.batch_name}
              value={selectedBatch}
              onClick={() => handleOpen(batch.batch_name)}
              onDelete={handleDelete}
              className="bg-dark-purple text-white p-3"
            />
          ))}
        </Box>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <RemoveUser
            setOpen={setOpen}
            batchName={selectedBatch}
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
