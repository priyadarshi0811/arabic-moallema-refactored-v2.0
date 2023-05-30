import React from 'react'
import Modal from "@mui/material/Modal";
import Confetti from "react-confetti";
import { Box, Button, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import CardM from "@mui/material/Card";
import RewordGIf from "@/components/src/gif/RewordGIf.gif";


import { useEffect } from 'react';
import Link from 'next/link';

const CompleateModal = (props) => {

    console.log("props =", props.open);

    // const [open, setOpen] = React.useState(false);
    // // setOpen();
    // const handleClose = () => setOpen(false);

    // useEffect(()=>{
    //     setOpen(props.type)
    // },[])

    // setOpen(props.type)
    const style = {
        position: "absolute",
        top: "48%",
        left: "58%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        height: "80%",
        bgcolor: "background.paper",
        border: "2px solid #000",
        borderRadius: 10,
        boxShadow: 24,
      };
    


  return (
    <div><div>
    {/* <Button onClick={handleOpen}>Open modal</Button> */}

    <Modal
      open={props.open}
      onClose={()=> props.setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{}} id="my-canvas">
        <CardM sx={style}>
          <CardActionArea className="h-full flex-1 ">
            <Confetti />
            <div className="h-10 w-full">
              <img src={RewordGIf.src} className="w-80 mx-auto" />
            </div>
            <CardContent className="mt-56 text-center">
              <Typography gutterBottom variant="h1" component="div">
              Congratulations 
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                You have Completed the "{props.moduleName}" Modules
              </Typography>
              {/* <Typography variant="body" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with
                over 6,000 species, ranging across all continents except
                Antarctica
              </Typography> */}
            </CardContent>
            <center>

            <Link href={props.nextModule}>
              
              <Button
                variant="contained"
                className="text-dark-purple bg-yellow-400"
              >
                Next Module
              </Button>
            </Link>
            </center>
          </CardActionArea>
        </CardM>
      </Box>
    </Modal>
  </div></div>
  )
}

export default CompleateModal