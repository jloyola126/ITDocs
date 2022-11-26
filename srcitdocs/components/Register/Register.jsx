import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import { TextField } from '@mui/material';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register({setLoggedIn,openRegisterModal,setOpenRegisterModal}) {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = () => toast("Registration Successful");

  const handleSubmit = (e) =>{
    e.preventDefault();
    setOpenRegisterModal(false);
    notify();
  };
  
  return (
    <Dialog
        open={openRegisterModal}
        aria-labelledby="form=-dialog-title"style={{minWidth:'300px',margin:'0px auto'}}>
        
        <div style={{width:"100%",display:"flex",justifyContent:'flex-end',minWidth:'300px'}}>
            <IconButton onClick={() => setOpenRegisterModal(false)}>
                <CloseIcon/>
            </IconButton>
        </div>
        <Typography variant='h5' style={{color:'black',textAlign:'center'}}>
            Register
        </Typography>
        <form style={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:'center',padding:'50px'}}
        onSubmit={handleSubmit}
        >
            <TextField
                label="First Name"
                variant="filled"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
            <TextField
                label="Last Name"
                variant="filled"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}/>
            <TextField
                label="Email"
                variant="filled"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            <TextField
                label="Password"
                variant="filled"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            <div style={{padding:'20px'}}>
                <Button style={{margin:'5px'}}variant='contained' onClick={() => setOpenRegisterModal(false)}>Close </Button>
                <Button style={{margin:'5px'}} type='submit' variant='contained' color="primary">Submit</Button>
            </div>     
        </form>
    </Dialog>
  )
};

export default Register;