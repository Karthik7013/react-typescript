import { BottomNavigation, BottomNavigationAction, Box, Grid, Paper, Toolbar } from '@mui/material'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { BASE_URL_ } from './config';
import { handleAlert, handleLoading, handlePosts } from './Redux/Actions/actions';
import SideBar from './Components/SideBar/SideBar';
import RecentPosts from './Components/RecentPosts/RecentPosts';
import ForYou from './Components/ForYou/ForYou';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
const App = () => {
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

    return (
        <Box>
            <Toolbar />
            <Grid container columns={18}>
                <Grid item md={3} sx={itemStyles}>
                    <SideBar />
                </Grid>
                <Grid sx={{ height: 'calc(100dvh - 64px)', overflowY: 'scroll' }} item xs={18} lg={12} >
                    <RecentPosts />
                    <ForYou />
                    <Toolbar />
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                        <BottomNavigation sx={{ display: { lg: 'none' } }}
                            showLabels
                        >
                            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                            <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
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