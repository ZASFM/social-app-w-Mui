import React from 'react';
import SideBar from './components/Sidebar';
import RightBar from './components/Rightbar';
import Feed from './components/Feed';
import {Box,Stack} from '@mui/material'

const App=()=>{
  return(
    <Box>
      {/*nav*/}
       <Stack direction="row" justifyContent="space-between" spacing={2}>
          <SideBar/>
          <Feed/>
          <RightBar/>
       </Stack>
    </Box>
  )
}

export default App;
