import React from 'react';
import { Box } from '@mui/material';
import {List, ListItem,ListItemButton,ListItemIcon,ListItemText,Home,Settings,Group,Pages, ModeNight, Switch} from '@mui/icons-material'

const SideBar=()=>{
   return (
      <Box bgcolor="skyblue" flex={1} p={2} sx={{display:{xs:'none', sm:'block'}}}>
         <Box position="fixed">
            <List>
               <ListItem disablePadding>
                  <ListItemButton component="a" href='#home'>
                     <ListItemIcon>
                       <Home/>
                     </ListItemIcon>
                     <ListItemText primary="home" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href='#pages'>
                      <ListItemIcon>
                        <Pages/>
                      </ListItemIcon>
                      <ListItemText primary="pages" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href='#setting'>
                      <ListItemIcon>
                        <Settings/>
                      </ListItemIcon>
                      <ListItemText primary="setting" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href='#friends'>
                      <ListItemIcon>
                        <Group/>
                      </ListItemIcon>
                      <ListItemText primary="friends" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href='#home'>
                      <ListItemIcon>
                        <ModeNight/>
                      </ListItemIcon>
                      <Switch/>
                  </ListItemButton>
               </ListItem>
            </List>
         </Box>
      </Box>
   )
}

export default SideBar;