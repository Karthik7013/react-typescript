import React from 'react'
import { Snackbar, Alert } from '@mui/material';
import { useState } from 'react';

type props = {
    message:string,
    open:boolean,
    variant: 'error' | 'info' | 'success' | 'warning'
}


const CustomAlert = (props:props) => {
    const [err, setErr] = useState(false);
    // const handleClose = () => setErr(false);
    return (
        <Snackbar 
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={props.open}
            autoHideDuration={2000}
            // onClose={handleClose}
        >
            <Alert variant='filled' severity={props.variant}>{props.message}</Alert>
        </Snackbar>
    )
}

export default CustomAlert