import { Avatar, Box, Button, Chip, Divider, Grid, IconButton, LinearProgress, Modal, Pagination, Stack, styled, Tooltip, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import PostCard from './Components/PostCard/PostCard';
import ScienceIcon from '@mui/icons-material/Science';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import CreatePost from './Components/CreatePost/CreatePost';
import { BASE_URL_ } from './config';
import PostCardSkeleton from './Components/PostCard/PostCardSkeleton';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const App = () => {
    const topRatedPosts = useSelector((e: any) => e.posts);
    const dispatch = useDispatch();
    const loading = useSelector((e: any) => e.loading);
    const [createPostModal, setCreatePostModal] = useState(false);

    const handleCreateModal = () => setCreatePostModal((prev) => !prev)

    // api call for get all posts
    useEffect(() => {
        const getPosts = async () => {
            let res = await axios.get(`${BASE_URL_}/admin/post/all`);
            dispatch({ type: 'FETCH_POST', payload: res.data });
        };
        getPosts();
    }, [dispatch]);



    const UserAvatar = (props: any) => {
        const Ring = styled(Box)({
            boxSizing: 'border-box',
            borderRadius: '50%',
            padding: '2px',
            border: '2px solid'
        })
        return <Ring>
            <Avatar src={props.url} alt='t' sx={{ width: "38px", height: '38px' }}>A</Avatar>
        </Ring>
    }
    const PlusBtn = styled(IconButton)({

    })

    return (
        <Box >
            <Grid container>
                <Grid item md={2} sx={{
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
                        <Grid item xs={12}
                            sx={{
                                display: {
                                    md: 'block',
                                    xs: 'none'
                                }
                            }}
                        >
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
                            <Typography variant='h6'>Top rated Posts</Typography>
                        </Grid>
                        {!topRatedPosts.length && <>
                            {[1, 2, 3].map((e) => {
                                return <Grid key={e} item xs={12}>
                                    <PostCardSkeleton />
                                </Grid>
                            })}
                        </>
                        }

                        {topRatedPosts.map((post: any) => {
                            return <Grid item key={post._id} xs={12}>
                                <PostCard
                                    author={post.authorName}
                                    id={post._id}
                                    image={post.imgUrl}
                                    title={post.title}
                                    content={post.description}
                                    subheader={post.createdAt}
                                />
                            </Grid>
                        })}

                        {Boolean(topRatedPosts.length) && <Grid item xs={12} component={Stack} justifyContent='center' mt={2}>
                            <Pagination count={10} variant="outlined" shape="rounded" />
                        </Grid>
                        }
                    </Grid>
                </Grid>
                <Grid item md={2} sx={{
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
                                <Button variant='contained' onClick={handleCreateModal}>
                                    <AddRoundedIcon color='inherit' />
                                </Button>
                            </Tooltip>
                            <UserAvatar url='https://mui.com/static/images/avatar/3.jpg' />
                            <UserAvatar url='https://mui.com/static/images/avatar/4.jpg' />
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
            <CreatePost open={createPostModal} toggle={setCreatePostModal} />
        </Box>
    )
}

export default App