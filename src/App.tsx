import { Avatar, Box, Button, Card, CircularProgress, Divider, Grid, IconButton, LinearProgress, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, Pagination, Stack, styled, Toolbar, Tooltip, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import PostCard from './Components/PostCard/PostCard';
// import ScienceIcon from '@mui/icons-material/Science';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
// import LocalAirportIcon from '@mui/icons-material/LocalAirport';
// import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
// import NewspaperIcon from '@mui/icons-material/Newspaper';
// import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import CreatePost from './Components/CreatePost/CreatePost';
import { BASE_URL_ } from './config';
import PostCardSkeleton from './Components/PostCard/PostCardSkeleton';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
// import InboxIcon from '@mui/icons-material/Inbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import WhatshotIcon from '@mui/icons-material/Whatshot';
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import { handleAlert, handleLoading, handlePosts } from './Redux/Actions/actions';
import { initialStateProps } from './Types/Types';
import AlertBox from './Components/AlertBox/AlertBox';

const App = () => {
    type posts = {
        title: string,
        subtitle: string,
    }
    const isLoggedIn = useSelector((e: initialStateProps) => e.auth.status);


    const topRatedPosts = useSelector((e: { posts: posts[] }) => e.posts);
    const dispatch = useDispatch();
    const loading = useSelector((e: { loading: boolean }) => e.loading);
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
            <Avatar src={props.url} alt='t' sx={{ width: "38px", height: '38px' }}></Avatar>
        </Ring>
    }

    const handlePagination = (e: any, value: number) => {
        dispatch({ type: 'PAGE_CHANGE', payload: value })
    }

    const createPostButtonProps = {
        onClick: handleCreateModal
    }

    const createPostLinkProps = {
        href: '/signin'
    }

    return (
        <Box>
            <Toolbar />
            <Grid container columns={18}>
                <Grid item md={3} sx={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    display: {
                        md: 'flex',
                        xs: 'none'
                    },
                    height: 'calc(100dvh - 64px)',
                    overflowY: 'scroll'
                }}>
                    <Box>
                        <Box p={2}>
                            <Tooltip title={"New Post"}>
                                <Button
                                    {...(isLoggedIn ? createPostButtonProps : createPostLinkProps)}
                                    fullWidth
                                    sx={{ borderRadius: 999 }}
                                    startIcon={<AddRoundedIcon
                                        sx={{ width: '32px', height: '32px' }}
                                        color='inherit' />}
                                    variant='contained'
                                >
                                    <Typography variant='subtitle2' noWrap fontWeight={600}>Create Post</Typography>
                                </Button>

                            </Tooltip>
                        </Box>
                        <Divider variant='middle' />
                        <Box>
                            <List >
                                <ListItem disablePadding >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <HomeRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Home" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <WhatshotIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Trending" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <MovieCreationRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Videos" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <MusicNoteRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Music" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <PeopleRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Friends" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ThumbUpIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Liked Posts" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                        <Divider variant='middle' />
                    </Box>
                    <Box p={2}>
                        <Card sx={{ width: '100%', borderRadius: '14px' }}>
                            <Stack alignItems='center' p={1} direction='row' gap={1} px={2}>
                                <Avatar>
                                    K
                                </Avatar>
                                <Box flex={1} component={Stack}>
                                    <Typography variant='body1'>User</Typography>
                                    <Typography variant='caption'>
                                        Basic Plan</Typography>
                                </Box>
                                <IconButton>
                                    <SettingsRoundedIcon fontSize='small' />
                                </IconButton>
                            </Stack>
                        </Card>
                    </Box>
                </Grid>
                <Grid sx={{ height: 'calc(100dvh - 64px)', overflowY: 'scroll' }} item xs={18} md={12} >
                    <Box p={2} pb={0}>
                        <Typography gutterBottom variant='h6'>Recent Posts</Typography>
                        <Stack direction='row' spacing={2} alignItems='center'>
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
                            <Typography variant='h6'>Top rated Posts</Typography>
                        </Grid>

                        {loading && <>
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
                        <Toolbar sx={{width:'100%'}}>
                            <Box sx={{margin:'auto'}}>
                                <CircularProgress size={20} />
                            </Box>

                        </Toolbar>



                    </Grid>
                </Grid>
                <Grid item md={3} sx={{
                    display: {
                        md: 'block',
                        xs: 'none'
                    },
                    px: 1,
                    height: 'calc(100dvh - 64px)',
                    overflowY: 'scroll'
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
                            <UserAvatar url='https://mui.com/static/images/avatar/3.jpg' />
                            <UserAvatar url='https://mui.com/static/images/avatar/4.jpg' />
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <CreatePost open={createPostModal} toggle={setCreatePostModal} />
        </Box>
    )
}

export default App