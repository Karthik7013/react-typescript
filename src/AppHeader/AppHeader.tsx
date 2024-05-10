import { AppBar, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AppHeader = () => {
    return (
        <AppBar position='sticky' sx={{ p: 2 }}>
            <Stack direction='row' justifyContent={'space-between'}>
                <Typography variant='h6'>LOAN INSURANCE</Typography>
                <Stack direction='row' gap={2}>
                    <Link to='/signin'>signin</Link>
                    <Link to='/signup'>signup</Link>
                    <Link to='/dashboard'>dashboard</Link>
                </Stack>
            </Stack>
        </AppBar>
    )
}

export default AppHeader