import { Box, Button, Card, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Settings = () => {
  return (
    <Box >
      <Card sx={{ p: 2, borderRadius: '1em', boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
        <Grid container spacing={5} padding={2}>
          <Grid item xs={12} md={7}>
            <Typography variant='h5' fontWeight={600}>Edit</Typography>
            <Card sx={{ p: 5, mt: 1, borderRadius: '0.6em',boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}}>
              <Stack gap={3}>
                <TextField label="Name"></TextField>
                <TextField label="Email"></TextField>
                <TextField label="Phone"></TextField>
                <TextField label="Address" multiline rows={2}></TextField>
                <TextField multiline label="About" rows={4}></TextField>
                <Button variant='contained'>update</Button>
              </Stack>
            </Card>

          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant='h5' fontWeight={600}>Change Password</Typography>
            <Card sx={{ p: 5, mt: 1, borderRadius: '0.6em',boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}}>
              <Stack gap={3}>
                <TextField label="Current Password"></TextField>
                <TextField label="New Password"></TextField>
                <TextField label="Confirm Password"></TextField>
                <Button variant='contained'>Submit</Button>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Card>

    </Box>
  )
}

export default Settings