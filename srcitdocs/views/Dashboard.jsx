import React from 'react';
import { Grid } from '@mui/material';
import Associate from '../Pages/Associate';
import Admin from '../Pages/Admin';
import {withRouter} from 'react-router-dom';
function Dashboard({role}) {
  return (
    <Grid justifyContent="center" alignItems="center">
      {role === "associate" && <Associate />}
      {role === "admin" && <Admin />}
    </Grid>
  )
}

export default withRouter(Dashboard);