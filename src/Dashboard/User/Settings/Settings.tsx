import { Box, Button, Card, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import PersonIcon from '@mui/icons-material/Person';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { BASE_URL_ } from '../../../config';
import axios from 'axios';
import { getToken } from '../../../Utils/utils';
const Settings = () => {
  const [updatePsw, setUpdatePsw] = useState({
    oldPsw: '',
    newPsw: '',
    cmfPsw: ''
  })
  // http://localhost:8000/api/v1/user/rest/password

  const updatePassword = async () => {
    const headers = {
      'x-auth-token': getToken()
    }
    const postdata = {
      oldPassword: updatePsw.oldPsw,
      newPassword: updatePsw.cmfPsw
    }
    try {
      const res = await axios.post(`${BASE_URL_}/user/rest/password`, postdata, { headers });
      if (res.status === 200) {
        alert('updated successfully !')
      }
    } catch (error) {
      console.log(error)
    }

  }

  const handleOnChange = (e: any) => {
    const { name, value } = e.target
    switch (name) {
      case 'old':
        setUpdatePsw({ ...updatePsw, oldPsw: value })
        return;
      case 'new':
        setUpdatePsw({ ...updatePsw, newPsw: value })
        return
      case 'cmf':
        setUpdatePsw({ ...updatePsw, cmfPsw: value })
        return
      default:
        break;
    }
  }


  return (
    <Box >
      <Card sx={{ p: 2, borderRadius: '1em', boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
        <Grid container spacing={5} padding={2}>
          <Grid item xs={12} md={7}>
            <Typography variant='h5' fontWeight={600}>Edit</Typography>
            <Card sx={{ p: 5, mt: 1, borderRadius: '0.6em', boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}>
              <Stack gap={3}>
                <TextField label="Name" InputProps={{
                  startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
                }}></TextField>
                <TextField label="Email" InputProps={{
                  startAdornment: <InputAdornment position="start"><EmailRoundedIcon /></InputAdornment>,
                }}></TextField>
                <TextField label="Phone" InputProps={{
                  startAdornment: <InputAdornment position="start"><PhoneAndroidRoundedIcon /></InputAdornment>,
                }}></TextField>
                <TextField label="Address" multiline rows={2} ></TextField>
                <TextField multiline label="About" rows={4}></TextField>
                <Button variant='contained'>update</Button>
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant='h5' fontWeight={600}>Change Password</Typography>
            <Card sx={{ p: 5, mt: 1, borderRadius: '0.6em', boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}>
              <Stack gap={3}>

                <TextField onChange={handleOnChange} name="old" type='password' label="Current Password" InputProps={{
                  startAdornment: <InputAdornment position="start"><HttpsRoundedIcon /></InputAdornment>,
                }}></TextField>

                <TextField onChange={handleOnChange} name="new" helperText={<Typography variant='caption' color={'error'}>Enter Strong Password</Typography>} error type='password' label="New Password" InputProps={{
                  startAdornment: <InputAdornment position="start"><PasswordRoundedIcon /></InputAdornment>,
                  endAdornment: <ErrorOutlineRoundedIcon color='error' />
                }}></TextField>

                <TextField required onChange={handleOnChange} name="cmf" color='success' type='password' label="Confirm Password" InputProps={{
                  startAdornment: <InputAdornment position="start"><PasswordRoundedIcon /></InputAdornment>,
                  endAdornment: <CheckCircleOutlineRoundedIcon color='success' />
                }}></TextField>

                <Button variant='contained' onClick={updatePassword}>Submit</Button>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}

export default Settings