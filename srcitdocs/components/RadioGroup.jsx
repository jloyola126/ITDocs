import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup({setRole}) {
  return (
    <FormControl>
      <FormLabel style={{width:'100%',padding:'10px',margin: '0px 8px'}} id="demo-row-radio-buttons-group-label">Role</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
      <FormControlLabel style={{width:'100%',padding:'5px',margin: '0px 8px'}} onChange={(e) => setRole(e.target.value)}value="associate" label="Associate" control={<Radio />} />
      <FormControlLabel style={{width:'100%',padding:'5px',margin: '0px 8px'}} onChange={(e) => setRole(e.target.value)}value="admin" label="Admin" control={<Radio />} />
      </RadioGroup>
    </FormControl>
  );
}