import { Fab, Tooltip,AddIcon, Avatar, Modal, Box, styled, Typography,TextField,Stack,EmojiEmotions,Image,VideoCameraBack,PersonAdd, ButtonGroup,DateRange,Button } from "@mui/material";
import React,{useState} from "react";

const StyledModal=styled(Modal)(({theme})=>({
   display:'flex',
   alignItem:'center',
   justifyContent:'center',
}))

const UserBox=styled(Box)(({theme})=>({
   display:'flex',
   alignItem:'center',
   gap:'10px',
   marginBottom:'25px',
}))

const Add=()=>{
   const [open,setOpen]=useState(false);
   return (
      <div>
         <Tooltip onClick={e=>setOpen(true)} title="Delete" sx={{position:'fixed',bottom:20,left:{xs:'calc(50%-25px)',md:30}}}>
            <Fab color="primary" aria-label="add">
               <AddIcon />
            </Fab>
         </Tooltip>
         <StyledModal

            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
         >
            <Box width={400} height={280} bgcolor='white' p={3} borderRadius={5}>
               <Typography variant="h4" color="grey" textAlign="center">
                  Create your post
                  <UserBox>
                     <Avatar
                        img="/images/s"
                        sx={{width:30,height:30}}
                     />
                     <Typography>Mohammad Shafi</Typography>
                  </UserBox>
                  <TextField
                     sx={{width:'100%'}}
                     multiline
                     rows={4}
                     id="filled-hidden-label-normal"
                     placeholder="Type here"
                     variant="filled"
                  />
               </Typography>
               <Stack direction="row" gap={1} mt={2} mb={3}>
                  <EmojiEmotions color="primary"/>
                  <Image color="secondary"/>
                  <VideoCameraBack color="success"/>
                  <PersonAdd color="error"/>
               </Stack>
               <ButtonGroup
                  fullWidth
                  variant="contained"
                  
               >
                  <Button>Add</Button>
                  <Button>
                     <DateRange/>
                  </Button>
               </ButtonGroup>
            </Box>
         </StyledModal>
      </div>
   )
}

export default Add;