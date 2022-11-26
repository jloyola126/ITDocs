import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import Input from '@mui/material/Input';
import {toast} from 'react-toastify';
import {withRouter} from 'react-router-dom';
import history from '../../services/history';
import RowRadioButtonsGroup from '../RadioGroup';

function Login({openLoginModal,setOpenLoginModal,setLoggedIn,setRole}) {
  
  const notify = () => toast("Login Successful!");
 

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const closeLoginModal = () => {
    setOpenLoginModal(false);
  };
  const handleSubmit = () => {
    setLoggedIn(true);
    setOpenLoginModal(false);
    history.push("/dashboard");
    notify();
  };
  return (
    <Dialog open={openLoginModal}aria-labelledby="form=-dialog-title"style={{width:'100&',maxWidth:'450px',margin:'0px auto'}}>   
        <div style={{width:"100%",display:"flex",justifyContent:'flex-end'}}>
            <IconButton onClick={closeLoginModal}>
                <CloseIcon/>
            </IconButton>
        </div>
        <Typography variant='h5' style={{color:'black',textAlign:'center'}}>
            Sign In
        </Typography>

        <form onSubmit={handleSubmit} style={{padding:'40px'}}>
            <FormControl style={{width:'100%',padding:'10px',margin: '0px 8px'}}>
                <InputLabel>
                    Email
                </InputLabel>
                <Input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
            <FormControl style={{width:'100%',padding:'10px',margin: '0px 8px'}}>
                <InputLabel>
                    Password
                </InputLabel>
                <Input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </FormControl>
            <RowRadioButtonsGroup setRole={setRole}/>
            <Button
                    variant="contained" 
                    color="primary"
                    type="submit"
                    onClick ={handleSubmit}
                    style={{
                    justifyContent:'center',
                    margin: '0px 8px',
                    padding:'10px',
                    width: '100%',
                    textTransform:"none",
                    fontSize:"14px"}}>
                Sign In
            </Button>
        </form>
     </Dialog>
    
  )
};

export default withRouter(Login);