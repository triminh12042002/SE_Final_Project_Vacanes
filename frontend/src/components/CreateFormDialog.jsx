import React, {useState, useEffect} from 'react'


import { TextField, Box, Grid, } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogContentText , DialogActions} from '@mui/material';

// import { styled } from "@material-ui/core/styles";
// import { compose, spacing, sizing } from "@material-ui/system";
import {Button} from "@mui/material";

// const Button = styled(MuiButton)(compose(spacing,sizing));
// const Button = MuiButton
const CreateFormDialog = ({open, handleClose,  handleCreate}) => {
    const [dayStart, setdayStart] = useState("");
    const [dayEnd, setdayEnd] = useState("");
  
    
    return (

        <Dialog fullWidth maxWidth='md' className="MyDialog" container={() => document.getElementById('homepage')} open={open} onClose={handleClose}>
            <DialogTitle>Reservation form</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="dayStart"
                        label="dayStart"
                        type="text"
                        fullWidth
                        variant='outlined'
                        onChange={e => setdayStart(e.target.value)}
                    />
                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="name"
                        label="dayEnd"
                        type="text"
                        fullWidth
                        variant='outlined'
                        onChange={e => setdayEnd(e.target.value)}
                    />
                    
                    
                    {/* <pre>
                        {JSON.stringify(inputListEnv, null,2)}
                    </pre> */}
                </DialogContentText>
                <DialogActions>
                    <Button variant="contained" color="secondary" onClick={e => handleCreate(dayStart, dayEnd)}>
                        Create
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}

export default CreateFormDialog;