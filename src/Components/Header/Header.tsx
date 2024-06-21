import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SideDrawer from '../SideDrawer/SideDrawer';
import { Avatar, LinearProgress, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Switch, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import logo from "../../assets/logo.png"
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { initialStateProps } from '../../Types/Types';

export default function Header() {
    const loading = useSelector((e: initialStateProps) => e.loading);
    const auth = useSelector((e: initialStateProps) => e.auth);
    const isLoggedIn = auth.status;
    const user = auth.data;
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const toggleDrawer = (newOpen: boolean) => () => {
        setDrawerOpen(newOpen)
    };

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <List dense>
                <ListItem dense>
                    <ListItemButton dense onClick={() => { navigate('/dashboard') }}>
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        <ListItemText><Typography>Dashboard</Typography></ListItemText>
                    </ListItemButton>

                </ListItem>
                <ListItem dense>
                    <ListItemButton dense onClick={() => {
                        localStorage.removeItem('token');
                        window.location.reload()
                    }}>
                        <ListItemIcon><LogoutIcon /></ListItemIcon>
                        <ListItemText><Typography>Logout</Typography></ListItemText>
                    </ListItemButton>

                </ListItem>
            </List>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem dense href='/messages'>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem dense href='/notifications'>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem dense onClick={() => { navigate('/dashboard') }}>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <DashboardIcon />
                </IconButton>
                <p>Dashboard</p>
            </MenuItem>
            <MenuItem dense
                onClick={() => {
                    localStorage.removeItem('token');
                    window.location.reload()
                }}>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <LogoutIcon />
                </IconButton>
                <p>Logout</p>
            </MenuItem>
        </Menu>
    );


    // const handleDarkMode = async () => {

    //     const token = localStorage.getItem('token');
    //     const headers = {
    //         "x-auth-token": token
    //     }
    //     dispatch({ type: "SET_THEME" })
    //     if (token) {
    //         await axios.put(`${BASE_URL_}/user/profile/dark`, {}, { headers });
    //     } else {
    //         console.log('failed to toggle')
    //     }
    // }

    return (
        <Box >
            <AppBar>
                <Toolbar>
                    <IconButton
                        sx={{ display: { xs: 'block', sm: 'none', mr: 2 } }}
                        onClick={toggleDrawer(true)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <a href='/' >
                        <Avatar alt="Remy Sharp" src={logo} sx={{ display: { xs: 'none', sm: 'block' } }} />
                    </a>
                    <Typography variant='h6' fontWeight={600} sx={{
                        ml: 2, display: {
                            xs: "none", md: 'block'
                        }
                    }}>Blogger Blog</Typography>
                    <Box sx={{ flexGrow: 1 }} />

                    {isLoggedIn ?
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" href='/messages' aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                href='/notifications'
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="small"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <Avatar sx={{ width: 38, height: 38, textTransform: 'capitalize' }} >{user?.userName[0]}</Avatar>
                            </IconButton>
                            <Switch color='default' />

                        </Box> :
                        <Stack direction='row' spacing={2}>
                            <a href="/signin">
                                <IconButton >
                                    <Avatar>
                                        <AccountCircleIcon />
                                    </Avatar>
                                </IconButton>
                            </a>
                        </Stack>
                    }
                    {isLoggedIn && <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="small"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <Avatar sx={{ width: 34, height: 34, textTransform: 'capitalize' }}>
                                <Typography>{user?.userName[0]}</Typography>
                            </Avatar>
                        </IconButton>
                    </Box>}
                </Toolbar>
                {loading && <LinearProgress sx={{ position: 'absolute', bottom: 0, width: '100%' }} color='primary' />}
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            <SideDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        </Box>
    );
}