import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BasicSelect =(props)=> {
  //   const value =  "Value"
  const [user, setUser] = React.useState('');


  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <div className="grid grid-cols-6 mt-2">
      <div className="col-span-2 mt-2">
        <label className=" mt-3 pt-2 pr-2">{props.lable}</label>
      </div>
      <div className="col-span-4">
      <Box sx={{ minWidth: 120 }} className="w-full ">
      <FormControl fullWidth>
        <Select
          id="demo-simple-select"
          size="small"
          value={user}
          onChange={handleChange}
        >
          <MenuItem value={1}>{props.type} 1</MenuItem>
          <MenuItem value={2}>{props.type} 2</MenuItem>
          <MenuItem value={3}>{props.type} 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </div>
    </div>
    
  );
}


export default BasicSelect
