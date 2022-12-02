import React,{useState} from 'react';
import {AppBar,Toolbar,styled,Typography,Box,InputBase,Avatar,Menu,MenuItem} from '@mui/material';
import {Star,Badge,Mail,Notifications} from '@mui/icons-material'

const StyledToolbar=styled(Toolbar)({
   display:'flex',
   justifyContent:'space-between',
})

const Search=styled('div')(({theme})=>({
   backgroundColor:'white',
   padding:'0 10px',
   borderRadius:theme.shape.borderRadius,
   width:'40%',
}))

const Icons=styled(Box)(({theme})=>({
   display:'none',
   gap:'20px',
   alignItems:'center',
   //If the size the upper (more than sm) then display flex, but if it is not, then display:none
   [theme.breakpoints.up('sm')]:{
      display:'flex',
   }
}))

const UserBox=(Box)(({theme})=>({
   display:'flex',
   gap:'10px',
   alignItems:'center',
   //If the current size is upper (bigger) than sm then display:none, but underneath sm, display:flex
   [theme.breakpoints.up('sm')]:{
      display:'none',
   }
}))
const Navbar=()=>{
   const [open,setOpen]=useState(false);
   return (
      <AppBar position="sticky">
         <StyledToolbar>
            <Typography variant="h6" sx={{display:{xs:'hidden',sm:'block'}}}>
               Logo
            </Typography>
            <Star sx={{display:{sx:'block',sm:'none'}}}/>
            <Search><InputBase placeholder="Search.."/></Search>
            <Icons>
               <Badge badgeContent={4} color="error">
                  <Mail />
               </Badge>
               <Badge badgeContent={2} color="error">
                  <Notifications/>
               </Badge>
               <Avatar onClick={e=>setOpen(true)} sx={{width:30,height:30}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7zPGej7zVolx5QlOS_25OCBZGHIlyysfeQ&usqp=CAU"/>
            </Icons>
            <UserBox onClick={e=>setOpen(true)}>
               <Avatar sx={{width:30,height:30}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7zPGej7zVolx5QlOS_25OCBZGHIlyysfeQ&usqp=CAU"/>
               <Typography variant="span">Mohammad</Typography>
            </UserBox>
         </StyledToolbar>
         <Menu
           id="demo-positioned-menu"
           onClick={e=>setOpen(false)}
           MenuListProps={{
             'aria-labelledby': 'fade-button',
           }}
           open={open}
           anchorOrigin={{
             vertical:'top',
             horizontal:'right',
           }}
           transformOrigin={{
             vertical:'top',
             horizontal:'right',
           }}
         >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </AppBar>
   )
}

export default Navbar;