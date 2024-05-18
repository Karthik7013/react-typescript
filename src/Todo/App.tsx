/* eslint-disable react-hooks/exhaustive-deps */
import { Box,  Chip, Grid, Modal, Pagination, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'


import RecipeReviewCard from './PostCard';


import ScienceIcon from '@mui/icons-material/Science';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector((e: any) => e.loading);
    const auth = useSelector((e: any) => e.auth);
    const isLoggedIn = auth.status;
    const user = auth.data;
    console.log(isLoggedIn, user);

    const getProfile = async (authToken: string) => {
        const headers = {
            'Authorization': 'Bearer YourAccessToken',
            'Content-Type': 'application/json',
            'x-auth-token': authToken
        };

        try {
            dispatch({ type: 'LOADING', payload: true })
            let res = await axios.get('https://blog-post-api-dsam.onrender.com/api/v1/user/profile', { headers })
            if (res.status === 200) {
                dispatch({ type: 'LOGIN', payload: res.data.user })
            } else {
                console.log('invalid/expired login')
            };
        } catch (error) {
            console.log(error)
        }
        finally {
            dispatch({ type: 'LOADING', payload: false })
        }
    }

    useEffect(() => {
        let authToken = localStorage.getItem('token');
        if (authToken)
            getProfile(authToken)
        else
            console.log('login again')
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
                        <Grid item xs={12} component={Stack} justifyContent='center' mt={2}>
                            <Pagination count={10} variant="outlined" shape="rounded" />
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
            <Modal
                open={loading}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default App