import {  Box, Chip, Grid, Modal, Pagination, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
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

import CreatePost from './CreatePost/CreatePost';
const App = () => {
    const topRatedPosts = useSelector((e: any) => e.posts);
    console.log(topRatedPosts)
    const dispatch = useDispatch();
    const loading = useSelector((e: any) => e.loading);
    // const auth = useSelector((e: any) => e.auth);
    // const isLoggedIn = auth.status;
    // const user = auth.data;
    const [openModal, setOpenModal] = useState(!false)
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
    // const handleModal = () => setOpenModal(!openModal)

    useEffect(() => {
        setOpenModal(true)
        let authToken = localStorage.getItem('token');
        if (authToken)
            getProfile(authToken)
        else
            console.log('login again')
    }, [])


    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        p: 3,
        borderRadius: 3,
        transition: '0.1s ease-in'
    };





    const getPosts = async () => {
        let res = await axios.get('https://blog-post-api-dsam.onrender.com/api/v1/admin/post/all');
        dispatch({ type: 'FETCH_POST', payload: res.data })
    }
    useEffect(() => {
            getPosts()
    }, [])


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
                    <Grid container spacing={2} px={{ xs: 1, md: 2 }} py={2}>
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
                        {topRatedPosts.map((post: any) => {
                            return <Grid item key={post._id} xs={12} md={6} lg={4}>
                                <RecipeReviewCard
                                    id={post._id}
                                    image={post.imgUrl}
                                    title={post.title}
                                    content={post.description}
                                    subheader={post.createdAt} />
                            </Grid>
                        })}
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
            <Modal
                open={!openModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} width={{ xs: 300, md: 600 }}>
                    <CreatePost />
                </Box>
            </Modal>
        </Box>
    )
}

export default App