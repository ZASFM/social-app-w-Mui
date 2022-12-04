import React from 'react';
import { Box,Typography,Avatar,AvatarGroup,ImageList,ImageListItem,Divider,ListItem,List,ListItemAvatar,ListItemText } from '@mui/material';

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
            <Typography variant='h6' fontWeight={300}>
               Latest conversations
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
         </Box>
      </Box>
   )
}

export default RightBar;