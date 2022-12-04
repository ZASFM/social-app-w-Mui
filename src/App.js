import React from 'react';
import SideBar from './components/Sidebar';
import RightBar from './components/Rightbar';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import {Box,Stack,ThemeProvider} from '@mui/material'
import theme from './components/theme';
import Add from './components/Add';

const App=()=>{
  return(
    <ThemeProvider theme={theme}>
    <Box>
      <Navbar/>
       <Stack direction="row" justifyContent="space-between" spacing={2}>
          <SideBar/>
          <Feed/>
          <RightBar/>
       </Stack>
       <Add/>
    </Box>
    </ThemeProvider>
  )
}

export default App;
