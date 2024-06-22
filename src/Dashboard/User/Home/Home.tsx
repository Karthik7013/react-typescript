import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
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
import { Avatar, Button, Drawer, Grid } from '@mui/material';
import Logo from "../../../assets/logo.png";
const items = [<HomeRoundedIcon />, <MarkunreadMailboxRoundedIcon />, <BookmarksRoundedIcon />, <AccountCircleRoundedIcon />, <SettingsRoundedIcon />]
const drawerWidth = 240;
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar)({

});

const Drawer2 = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Home() {

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };





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
        console.log(modal)
        setModal((prev) => !prev)
    }

    const DrawerList = (
        <Box sx={{ width: 250 }}>
            <Toolbar></Toolbar>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );





    return <>
        <AppBar color='warning'>
            <Toolbar>
                <IconButton sx={{ display: { md: 'none' } }} onClick={toggleDrawer()}>
                    <MenuIcon />
                </IconButton>Dashboard
            </Toolbar>
        </AppBar>
        <Drawer open={modal} onClose={toggleDrawer()}>
            {DrawerList}
        </Drawer>

        <Box sx={{ height: '100dvh' }}>
            <Toolbar />
            <Grid container columns={20}>
                <Grid item xs={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <List>
                        {adminNavItems.map((item, index) => (
                            <Box key={item.title}>

                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon sx={{ minWidth: 38 }}

                                        >
                                            {items[index]}
                                        </ListItemIcon>
                                        <ListItemText primary={item.title} />
                                    </ListItemButton>
                                </ListItem>

                            </Box>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={17} p={2}>content</Grid>
            </Grid>
        </Box>


    </>

    // return (
    //     <Box sx={{ display: 'flex' }}>
    //         <AppBar position="fixed">
    //             <Toolbar>
    //                 <IconButton
    //                     color="inherit"
    //                     aria-label="open drawer"
    //                     onClick={handleDrawerOpen}
    //                     edge="start"
    //                     sx={{
    //                         marginRight: 5,
    //                         ...(open && { display: 'none' }),
    //                     }}
    //                 >
    //                     <MenuIcon />
    //                 </IconButton>
    //                 <Typography variant="h6" noWrap component="div">
    //                     Hello User!
    //                 </Typography>
    //             </Toolbar>
    //         </AppBar>
    //         <Drawer2 variant="permanent" open={open}>
    //             <DrawerHeader>
    //                 <Avatar component={Link} to='/' variant="square" src={Logo} sx={{ width: '32px', height: '32px', margin: 'auto' }}></Avatar>
    //             </DrawerHeader>
    //             <Divider />
    //             <List>
    //                 {adminNavItems.map((item, index) => (
    //                     <Box key={item.title}>
    //                         <Link to={item.path}>
    //                             <ListItem disablePadding sx={{ display: 'block' }}>
    //                                 <ListItemButton
    //                                     sx={{
    //                                         minHeight: 48,
    //                                         justifyContent: open ? 'initial' : 'center',
    //                                         px: 2.5,
    //                                     }}
    //                                 >
    //                                     <ListItemIcon
    //                                         sx={{
    //                                             minWidth: 0,
    //                                             mr: open ? 3 : 'auto',
    //                                             justifyContent: 'center',
    //                                         }}
    //                                     >
    //                                         {items[index]}
    //                                     </ListItemIcon>
    //                                     <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
    //                                 </ListItemButton>
    //                             </ListItem>
    //                         </Link>
    //                     </Box>
    //                 ))}
    //             </List>
    //         </Drawer2>
    //         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    //             <DrawerHeader />
    //             <Outlet />
    //         </Box>
    //     </Box>
    // );
}