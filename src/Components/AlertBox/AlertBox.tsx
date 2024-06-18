import { Alert, Slide, Snackbar } from '@mui/material'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

type alertProps = {
  state: boolean,
  message: string,
  type: 'error' | 'info' | 'success' | 'warning' | undefined
}
const AlertBox = () => {
  const alertAlternateVar = useSelector((e)=> e);
  console.log(alertAlternateVar)

  const [alert, setAlert] = useState<alertProps>({
    state: false,
    message: '',
    type: undefined
  })

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={alert.state}
      autoHideDuration={2000}
      onClose={() => { setAlert((prev) => ({ ...prev, state: false, message: '', action: undefined })) }}
      TransitionComponent={Slide}
    ><Alert sx={{ width: '100%' }} variant='filled' severity={alert.type}>{alert.message}</Alert>
    </Snackbar>
  )
}

export default AlertBox