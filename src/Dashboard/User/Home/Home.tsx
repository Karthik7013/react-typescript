import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MarkunreadMailboxRoundedIcon from '@mui/icons-material/MarkunreadMailboxRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { Drawer, Grid, LinearProgress } from '@mui/material';
// import Logo from "../../../assets/logo.png";
const items = [<HomeRoundedIcon />, <MarkunreadMailboxRoundedIcon />, <BookmarksRoundedIcon />, <AccountCircleRoundedIcon />, <SettingsRoundedIcon />]
// const drawerWidth = 240;
import { initialStateProps } from '../../../Types/Types';
import { useSelector } from 'react-redux';

// const openedMixin = (theme: Theme): CSSObject => ({
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//     }),
//     overflowX: 'hidden',
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: `calc(${theme.spacing(7)} + 1px)`,
//     [theme.breakpoints.up('sm')]: {
//         width: `calc(${theme.spacing(8)} + 1px)`,
//     },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),

//     ...theme.mixins.toolbar,
// }));

const AppBar = styled(MuiAppBar)({

});

// const Drawer2 = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         width: drawerWidth,
//         flexShrink: 0,
//         whiteSpace: 'nowrap',
//         boxSizing: 'border-box',
//         ...(open && {
//             ...openedMixin(theme),
//             '& .MuiDrawer-paper': openedMixin(theme),
//         }),
//         ...(!open && {
//             ...closedMixin(theme),
//             '& .MuiDrawer-paper': closedMixin(theme),
//         }),
//     }),
// );

export default function Home() {

    const loading = useSelector((state: initialStateProps) => state.loading)

    // const [open, setOpen] = React.useState(false);

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    const adminNavItems = [
        {
            icon: 'home',
            title: 'home',
            path: '/dashboard'
        },
        {
            icon: 'post',
            title: 'Post',
            path: 'post'
        },
        {
            icon: 'Saved',
            title: 'Saved',
            path: 'save'
        },
        {
            icon: 'face',
            title: 'Profile',
            path: 'profile'
        },
        {
            icon: 'settings',
            title: 'Settings',
            path: 'settings'
        }
    ]

    const [modal, setModal] = React.useState(false)

    const toggleDrawer = () => () => {
        setModal((prev) => !prev)
    }

    const DrawerList = (
        <Box sx={{ width: 250 }}>
            <Toolbar />
            <List>
                {adminNavItems.map((item, index) => (
                    <Box key={item.title}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Link to={item.path}>
                                    <ListItemIcon sx={{ minWidth: 38 }}>
                                        {items[index]}
                                    </ListItemIcon>
                                </Link>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>

                    </Box>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return <>
        <AppBar>
            <Toolbar>
                <IconButton sx={{ display: { md: 'none' } }} onClick={toggleDrawer()}>
                    <MenuIcon />
                </IconButton>Dashboard
            </Toolbar>{loading && <LinearProgress />}

        </AppBar>
        <Drawer open={modal} onClose={toggleDrawer()}>
            {DrawerList}
        </Drawer>

        <Box>
            <Grid container columns={20} >
                <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' }, minHeight: '100dvh', overflowY: 'scroll' }}>
                    <List>
                        <Toolbar />
                        {adminNavItems.map((item, index) => (
                            <Box key={item.title}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <Link to={item.path}>
                                            <ListItemIcon sx={{ minWidth: 38 }}>
                                                {items[index]}
                                            </ListItemIcon>
                                        </Link>
                                        <ListItemText primary={item.title} />
                                    </ListItemButton>
                                </ListItem>

                            </Box>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={20} md={17} p={2} sx={{ maxHeight: '100dvh', overflowY: 'scroll' }}>
                    <Toolbar />
                    <Outlet />
                </Grid>
            </Grid>
        </Box>
    </>
}