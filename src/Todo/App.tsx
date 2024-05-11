import { Box, Button, Chip, Container, Grid, Link, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from './Header'
import TemporaryDrawer from './SideDrawer'
import RecipeReviewCard from './PostCard';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PostDetails from './PostDetails';
import ScienceIcon from '@mui/icons-material/Science';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import axios from 'axios'
const App = () => {

    const getProfile = async (authToken: string) => {
        const headers = {
            'Authorization': 'Bearer YourAccessToken',
            'Content-Type': 'application/json',
            'x-auth-token': authToken
        };
        try {
            let res = await axios.get('https://blog-post-api-dsam.onrender.com/api/v1/user/profile', { headers })
            if (res.status === 200) {
                console.log(res.data);
            } else {
                console.log('invalid/expired login')
            };
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        let authToken = localStorage.getItem('token');
        if (authToken) {
            getProfile(authToken)
        } else {
            console.log('login again')
        }
    }, [])







    const Temp = () => {
        return <RecipeReviewCard image='https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg' content='This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.' title='Shrimp and Chorizo Paella' subheader='September 14, 2016' />
    }
    return (
        <Box sx={{ maxHeight: '100dvh' }}>
            <Grid container >
                <Grid item xs={0} md={2} sx={{
                    display: {
                        md: 'block',
                        xs: 'none'
                    }
                }}>
                    left
                </Grid>
                <Grid item xs={12} md={8} >
                    <Grid container spacing={2} px={{ xs: 2, md: 0 }} py={2}>
                        <Grid item xs={12}>
                            <Stack direction={'row'} spacing={2} flexWrap="wrap">
                                <Chip clickable label='Scientific' icon={<ScienceIcon fontSize='small' />} />
                                <Chip clickable label='Information' icon={<LightbulbCircleIcon fontSize='small' />} />
                                <Chip clickable label='Food' icon={<FastfoodIcon fontSize='small' />} />
                                <Chip clickable label='Travel' icon={<LocalAirportIcon fontSize='small' />} />
                                <Chip clickable label='Movie' icon={<TheaterComedyIcon fontSize='small' />} />
                                <Chip clickable label='News' icon={<NewspaperIcon fontSize='small' />} />
                                <Chip clickable label='Music' icon={<AudiotrackIcon fontSize='small' />} />
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color='GrayText' fontWeight={600} variant='h6'>Top rated Posts</Typography>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} component={Stack} justifyContent='center'>
                            <Button size='small' disableFocusRipple disableRipple variant='text' endIcon={<ArrowDropDownIcon />}>show more</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={0} md={2} sx={{
                    display: {
                        md: 'block',
                        xs: 'none'
                    }
                }}>right</Grid>
            </Grid>

        </Box>
    )
}

export default App