import { BottomNavigation, BottomNavigationAction, Box, Grid, Paper, Toolbar } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { BASE_URL_ } from './config';
import { handleAddPostModal, handleAlert, handleLoading, handlePosts } from './Redux/Actions/actions';

// import RecentPosts from './Components/RecentPosts/RecentPosts';
import ForYou from './Components/ForYou/ForYou';
import ArchiveIcon from '@mui/icons-material/Archive';
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SideBar from "./Components/SideBar/SideBar";

const App = () => {
    const [tab, setTab] = useState('trend');
    const itemStyles = {
        display: {
            lg: 'flex',
            xs: 'none'
        },
        height: 'calc(100dvh - 64px)',
        overflowY: 'scroll'
    }

    const dispatch = useDispatch();

    // api call for get all posts
    useEffect(() => {
        const getPosts = async () => {
            try {
                dispatch(handleLoading(true))
                const res = await axios.get(`${BASE_URL_}/admin/post/all`);
                dispatch(handlePosts(res.data));

            } catch (error) {
                dispatch(handleAlert({ type: 'error', message: 'Internal Error', state: true }))
            } finally {
                dispatch(handleLoading(false));
            }
        }
        getPosts();
    }, []);

    const handleTabChange = (event: any, newValue: string) => {
        setTab(newValue);
        console.log(newValue)
        newValue === 'post' && dispatch(handleAddPostModal())
    }

    return (
        <Box>
            <Toolbar />
            <Grid container columns={18}>
                <Grid item md={3} sx={itemStyles}>
                    <SideBar />
                </Grid>
                <Grid sx={{ height: 'calc(100dvh - 64px)', overflowY: 'scroll' }} item xs={18} lg={12} >
                    {/* <RecentPosts /> */}
                    <ForYou />
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

                        <BottomNavigation
                            sx={{ display: { lg: 'none' } }}
                            value={tab}
                            onChange={handleTabChange}
                            showLabels
                        >
                            <BottomNavigationAction
                                value="trend"
                                label="Trending"
                                icon={<WhatshotRoundedIcon />}
                            />
                            <BottomNavigationAction
                                value="post"
                                label="New Post"
                                icon={<PostAddIcon />}
                            />
                            <BottomNavigationAction
                                value="save"
                                label="Saved"
                                icon={<ArchiveIcon />}
                            />
                        </BottomNavigation>

                    </Paper>
                </Grid>
                <Grid item md={3} sx={itemStyles}>
                </Grid>
            </Grid>
        </Box>
    )
}

export default App