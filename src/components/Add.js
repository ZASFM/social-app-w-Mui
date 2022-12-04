import { Fab, Tooltip,AddIcon, Button, Modal, Box } from "@mui/material";
import React,{useState} from "react";

const Add=()=>{
   const [open,setOpen]=useState(false);
   return (
      <div>
         <Tooltip onClick={e=>setOpen(true)} title="Delete" sx={{position:'fixed',bottom:20,left:{xs:'calc(50%-25px)',md:30}}}>
            <Fab color="primary" aria-label="add">
               <AddIcon />
            </Fab>
         </Tooltip>
         <Modal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
         >
            <Box>
               Hello
            </Box>
         </Modal>
      </div>
   )
}

export default Add;