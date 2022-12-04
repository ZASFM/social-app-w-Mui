import React from 'react';
import { Box,Typography,Avatar,AvatarGroup,ImageList,ImageListItem } from '@mui/material';

const RightBar=()=>{
   return (
      <Box flex={2} p={2} sx={{display:{xs:'none', sm:'block'}}}>
         <Box position="fixed">
            <Typography variant='h6' fontWeight={300}>
               Online friends
            </Typography>
            <AvatarGroup total={4}>
               <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
               <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
               <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
               <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
            <ImageList cols={2} rowHeight={100} gap={5}>
            <ImageListItem>
               <img
               src={`${1}?w=164&h=164&fit=crop&auto=format`}
               srcSet={`${1}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
               alt="Your friend"
               loading="lazy"
               />
            </ImageListItem>
            <ImageListItem>
               <img
               src={`${2}?w=164&h=164&fit=crop&auto=format`}
               srcSet={`${2}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
               alt="Your friend"
               loading="lazy"
               />
            </ImageListItem>            <ImageListItem>
               <img
               src={`${3}?w=164&h=164&fit=crop&auto=format`}
               srcSet={`${3}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
               alt="Your friend"
               loading="lazy"
               />
            </ImageListItem>            <ImageListItem>
               <img
               src={`${4}?w=164&h=164&fit=crop&auto=format`}
               srcSet={`${4}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
               alt="Your friend"
               loading="lazy"
               />
            </ImageListItem>
            </ImageList>
         </Box>
      </Box>
   )
}

export default RightBar;