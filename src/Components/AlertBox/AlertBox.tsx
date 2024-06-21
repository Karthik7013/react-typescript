import { Alert, Slide, Snackbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { initialStateProps } from '../../Types/Types';
import { handleAlert } from '../../Redux/Actions/actions';


const AlertBox = () => {
  const dispatch = useDispatch();
  const alert = useSelector((e:initialStateProps) => e.alert);

  const handleClose = ()=>{
    dispatch(handleAlert({state:false}))
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={alert.state}
      autoHideDuration={2000}
      onClose={handleClose}
      TransitionComponent={Slide}
    ><Alert sx={{ width: '100%' }} variant='filled' severity={alert.type}>{alert.message}</Alert>
    </Snackbar>
  )
}

export default AlertBox