import React, {useState, useEffect} from 'react'
import { TextField, Box, Grid, } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogContentText , DialogActions} from '@mui/material';

// import { styled } from "@material-ui/core/styles";
// import { compose, spacing, sizing } from "@material-ui/system";
import {Button} from "@mui/material";



// const Button = styled(MuiButton)(compose(spacing,sizing));
// const Button = MuiButton
const CreateAccommodationFrom = ({open, handleClose,  handleCreate}) => {
    const [title, settitle] = useState("");
    const [location, setlocation] = useState("");
    const [imageUrlList, setimageUrlList] = useState("");
  
    
    return (

        <Dialog fullWidth maxWidth='md' className="MyDialog" container={() => document.getElementById('homepage')} open={open} onClose={handleClose}>
            <DialogTitle>Reservation form</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="title"
                        label="title"
                        type="text"
                        fullWidth
                        variant='outlined'
                        onChange={e => settitle(e.target.value)}
                    />
                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="location"
                        label="location"
                        type="text"
                        fullWidth
                        variant='outlined'
                        onChange={e => setlocation(e.target.value)}
                    />
                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="imageUrlList"
                        label="imageUrlList"
                        type="text"
                        fullWidth
                        variant='outlined'
                        onChange={e => setimageUrlList(e.target.value)}
                    />
                    
                    
                    {/* <pre>
                        {JSON.stringify(inputListEnv, null,2)}
                    </pre> */}
                </DialogContentText>
                <DialogActions>
                    <Button variant="contained" color="secondary" onClick={e => handleCreate(title, location, imageUrlList)}>
                        Create
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}

export default CreateAccommodationFrom;