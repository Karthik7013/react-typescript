import { AppBar, Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <Box>
            <AppBar position='sticky' color='error' sx={{ p: 3 }}>Dashboard Header</AppBar>
            Dashboard Home
            <Outlet />
        </Box>
    )
}

export default Home