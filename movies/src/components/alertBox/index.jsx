import {Alert, IconButton, Collapse} from '@mui/material';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';


const AlertBox = () => {
const[open,SetOpen]=useState(true);

    return (
    <Collapse in={open}>   
    <Alert variant="filled" severity="success" action={<IconButton onClick={()=>{SetOpen(false)}}><CloseIcon></CloseIcon></IconButton>}>This App updates the movies from TMDB everytime the site is loaded</Alert>
    </Collapse>
    )
}

export default AlertBox;