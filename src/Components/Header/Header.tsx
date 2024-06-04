import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SideDrawer from '../SideDrawer/SideDrawer';
import { Avatar, Stack, Switch, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import logo from "../../assets/logo.png"
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Header() {
    const dispatch = useDispatch();
    const holdDark = useSelector((e: any) => e.auth.data);

    const auth = useSelector((e: any) => e.auth);

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
            <MenuItem onClick={() => { navigate('/dashboard') }}>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <DashboardIcon />
                </IconButton>
                <p>Dashboard</p>
            </MenuItem>
            <MenuItem
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
            <MenuItem href='/messages'>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem href='/notifications'>
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
            <MenuItem onClick={() => { navigate('/dashboard') }}>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <DashboardIcon />
                </IconButton>
                <p>Dashboard</p>
            </MenuItem>
            <MenuItem
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


    const handleDarkMode = async () => {

        const token = localStorage.getItem('token');
        const headers = {
            "x-auth-token": token
        }
        if (token) {
            let res = await axios.put('https://blog-post-api-dsam.onrender.com/api/v1/user/profile/dark', {}, { headers });
            if (res.status === 200) {
                dispatch({ type: "SET_THEME" })
            }
        } else {
            console.log('failed to toggle')
        }
    }




    return (
        <Box sx={{ position: 'sticky', top: 0, zIndex: 999 }}>
            <AppBar position="relative">
                <Toolbar>
                    {<IconButton
                        sx={{ display: { xs: 'block', sm: 'none', mr: 2 } }}
                        onClick={toggleDrawer(true)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>}
                    <a href='/' >
                        <Avatar alt="Remy Sharp" src={logo} sx={{ display: { xs: 'none', sm: 'block' } }} />
                    </a>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>

                    {isLoggedIn ? <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
                            <Avatar sx={{ width: 38, height: 38 }} > {user.userName[0]}</Avatar>
                        </IconButton>
                        <Switch color='default' checked={holdDark?.dark} onChange={handleDarkMode} />
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
                            <Avatar sx={{ width: 34, height: 34 }}>{user.userName[0]}</Avatar>
                        </IconButton>
                    </Box>}

                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            <SideDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        </Box>
    );
}