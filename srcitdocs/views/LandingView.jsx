import React,{useState} from 'react';
import {Button,Typography} from '@mui/material';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import noteGif from '../components/notetaking.gif';

function LandingView({setLoggedIn,setRole}) {
  const [openLoginModal,setOpenLoginModal] = useState(false);
  const [openRegisterModal,setOpenRegisterModal] = useState(false);
  const openModal = () =>{
    setOpenLoginModal(true);
  };
  const openRegister = () =>{
    setOpenRegisterModal(true);
  };
  return (
    <>
    <div style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
      <div style={{padding:'10px',fontSize:'80px',fontWeight:'600',color:'#fdfdfe',textShadow:'0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,0px 0px 20px #b393d3',width:"100%"}}>IT Docs: A Hub for All IT Documentation Control</div>
      <img style={{borderRadius:'200px'}} src={noteGif} alt="note-gif"/>
      <div style={{width:"100%",height:"100vh"}}>
          <Button variant="contained" style={{fontSize:'25px',margin:'5px'}} onClick={openModal}>Log In</Button>
          <Button variant="contained" style={{fontSize:'25px',margin:'5px'}} onClick={openRegister}>Register</Button>
          <Login openLoginModal = {openLoginModal} setOpenLoginModal={setOpenLoginModal} setLoggedIn = {setLoggedIn} setRole={setRole}/>
          <Register openRegisterModal = {openRegisterModal} setOpenRegisterModal={setOpenRegisterModal} setLoggedIn = {setLoggedIn}/>
          <Typography></Typography>
      </div>
    </div>
    </>
  )
}

export default LandingView;