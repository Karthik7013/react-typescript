import { Avatar, Box, Button, Card, CircularProgress, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, styled, Toolbar, Tooltip, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import PostCard from './Components/PostCard/PostCard';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import CreatePost from './Components/CreatePost/CreatePost';
import { BASE_URL_ } from './config';
import PostCardSkeleton from './Components/PostCard/PostCardSkeleton';

import { handleLoading, handlePosts } from './Redux/Actions/actions';
import { initialStateProps, post } from './Types/Types';
import SideBar from './Components/SideBar/SideBar';

const App = () => {
    const itemStyles = {
        display: {
            lg: 'flex',
            xs: 'none'
        },
        height: 'calc(100dvh - 64px)',
        overflowY: 'scroll'
    }



    const topRatedPosts = useSelector((e: initialStateProps) => e.posts);
    const dispatch = useDispatch();
    const loading = useSelector((e: initialStateProps) => e.loading);
    const [createPostModal, setCreatePostModal] = useState(false);

    const handleCreateModal = () => setCreatePostModal((prev) => !prev)

    // api call for get all posts
    useEffect(() => {
        const getPosts = async () => {
            try {
                dispatch(handleLoading(true))
                const res = await axios.get(`${BASE_URL_}/admin/post/all`);
                dispatch(handlePosts(res.data));
            } catch (error) {
                console.log(error)
            } finally {
                dispatch(handleLoading(false));
            }
        }
        getPosts();
    }, []);

    const UserAvatar = (props: any) => {
        const Ring = styled(Box)({
            boxSizing: 'border-box',
            borderRadius: '50%',
            padding: '2px',
            border: '2px solid'
        })
        return <Ring>
            <Avatar src={props.url} alt='t' sx={{ width: "56px", height: '56px' }}></Avatar>
        </Ring>
    }



    return (
        <Box>
            <Toolbar />
            <Grid container columns={18}>
                <Grid item md={3} sx={itemStyles}>
                    <SideBar />
                </Grid>
                <Grid sx={{ height: 'calc(100dvh - 64px)', overflowY: 'scroll' }} item xs={18} lg={12} >
                    <Box p={2} pb={0}>
                        <Typography gutterBottom variant='h6'>Recent Posts</Typography>
                        <Stack sx={{ overflowX: 'scroll' }} direction='row' spacing={2} alignItems='center'>
                            <UserAvatar url='https://mui.com/static/images/avatar/3.jpg' />
                            <UserAvatar url='https://mui.com/static/images/avatar/4.jpg' />
                            <UserAvatar url='https://mui.com/static/images/avatar/4.jpg' />
                            <UserAvatar url='https://mui.com/static/images/avatar/4.jpg' />
                            <UserAvatar url='https://mui.com/static/images/avatar/3.jpg' />
                            <UserAvatar url='https://mui.com/static/images/avatar/4.jpg' />
                            <UserAvatar url='https://mui.com/static/images/avatar/4.jpg' />
                            <UserAvatar url='https://mui.com/static/images/avatar/4.jpg' />
                        </Stack>
                    </Box>


                    <Grid container spacing={2} px={{ xs: 1, md: 2 }} py={2}>
                        <Grid item xs={12}>
                            <Typography variant='h6'>For You</Typography>
                        </Grid>

                        {loading && <>
                            {[1, 2, 3].map((e) => <Grid key={e} item xs={12}>
                                <PostCardSkeleton />
                            </Grid>
                            )}
                        </>
                        }

                        {topRatedPosts.map((post: post) => {
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
                        <Toolbar sx={{ width: '100%' }}>
                            <Box sx={{ margin: 'auto' }}>
                                <CircularProgress size={20} />
                            </Box>
                        </Toolbar>
                    </Grid>
                </Grid>
                <Grid item md={3} sx={itemStyles}>
                </Grid>
            </Grid>
            <CreatePost open={createPostModal} toggle={setCreatePostModal} />
        </Box>
    )
}

export default App