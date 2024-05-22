import { Avatar, Box, Chip, CircularProgress, Divider, Grid, IconButton, LinearProgress, Modal, Pagination, Stack, Tooltip, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import RecipeReviewCard from './PostCard/PostCard';
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
import BASE_URL_ from '../config';
import PostCardSkeleton from './PostCard/PostCardSkeleton';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const App = () => {
    const topRatedPosts = useSelector((e: any) => e.posts);
    const dispatch = useDispatch();
    const loading = useSelector((e: any) => e.loading);
    const [createPostModal, setCreatePostModal] = useState(false);

    useEffect(() => {
        const getProfile = async (authToken: string) => {
            const headers = {
                'Authorization': 'Bearer YourAccessToken',
                'Content-Type': 'application/json',
                'x-auth-token': authToken
            };

            try {
                dispatch({ type: 'LOADING', payload: true })
                let res = await axios.get(`${BASE_URL_}/user/profile`, { headers })
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
        let authToken = localStorage.getItem('token');
        if (authToken)
            getProfile(authToken)
        else
            console.log('login again')
    }, [dispatch])




    const handleCreateModal = () => {
        setCreatePostModal((prev) => !prev)
    }


    useEffect(() => {
        const getPosts = async () => {
            let res = await axios.get(`${BASE_URL_}/admin/post/all`);
            dispatch({ type: 'FETCH_POST', payload: res.data });
        };
        getPosts();
    }, [dispatch]);


    return (
        <Box >
            <Grid container>
                <Grid item xs={0} md={2} sx={{
                    display: {
                        md: 'block',
                        xs: 'none'
                    },
                    position: 'sticky',
                    top: 0
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
                        {!Boolean(topRatedPosts.length) && <>
                            <Grid item xs={12} md={6} lg={4}>
                                <PostCardSkeleton />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <PostCardSkeleton />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <PostCardSkeleton />
                            </Grid>
                        </>
                        }

                        {topRatedPosts.map((post: any) => {
                            return <Grid item key={post._id} xs={12} md={6} lg={4}>
                                <RecipeReviewCard
                                    author={post.authorName}
                                    id={post._id}
                                    image={post.imgUrl}
                                    title={post.title}
                                    content={post.description}
                                    subheader={post.createdAt} />
                            </Grid>
                        })}
                        {Boolean(topRatedPosts.length) && <Grid item xs={12} component={Stack} justifyContent='center' mt={2}>
                            <Pagination count={10} variant="outlined" shape="rounded" />
                        </Grid>
                        }
                    </Grid>
                </Grid>
                <Grid item xs={0} md={2} sx={{
                    display: {
                        md: 'block',
                        xs: 'none'
                    },
                    px: 1,
                    position: 'sticky'
                }}>
                    <Stack spacing={2} mt={1}>
                        <Stack direction='row'
                            alignItems='center' justifyContent='space-between'>
                            <Typography noWrap variant='h6'>My Posts</Typography>
                            <Box component='a' href='/' display='flex' alignItems='center' gap={1}>
                                <Typography variant='body2'>see all</Typography>
                                <ArrowForwardRoundedIcon fontSize='small' />
                            </Box>
                        </Stack>
                        <Divider />
                        <Stack direction='row' spacing={1} alignItems='center'>
                            <Tooltip title="New Post">
                                <IconButton onClick={handleCreateModal}
                                    sx={{
                                        color: 'snow',
                                        bgcolor: '#373737',
                                        transition: 'background-color 0.3s',
                                        '&:hover': {
                                            bgcolor: '#bdbdbd',
                                        },
                                        width: '45px',
                                        height: '45px'

                                    }}
                                >
                                    <AddRoundedIcon color='inherit' />
                                </IconButton>
                            </Tooltip>
                            <Box boxSizing={'border-box'} border='3px solid #373737' borderRadius='50%' padding='2px'>
                                <Avatar src="https://mui.com/static/images/avatar/3.jpg" alt='t' sx={{ width: "38px", height: '38px' }}>A</Avatar>
                            </Box>
                            <Box boxSizing={'border-box'} border='3px solid #373737' borderRadius='50%' padding='2px'>
                                <Avatar src="https://mui.com/static/images/avatar/4.jpg" sx={{ width: "38px", height: '38px' }}>A</Avatar>
                            </Box>
                        </Stack>
                    </Stack>


                    <Stack mt={2}>
                        <Stack direction='row'
                            alignItems='center' justifyContent='space-between'>
                            <Typography noWrap variant='h6'>Category</Typography>
                        </Stack>
                        <Divider />
                        <Stack direction='row' gap={1} alignItems='center' flexWrap={'wrap'}>
                           
                       
                        </Stack>
                    </Stack>


                </Grid>
            </Grid>
            <Modal
                open={loading}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <LinearProgress />
                </Box>
            </Modal>
            <CreatePost open={createPostModal} toggle={setCreatePostModal}/>
        </Box>
    )
}

export default App