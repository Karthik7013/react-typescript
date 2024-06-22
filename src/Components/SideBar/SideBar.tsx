import { Avatar, Box, Button, Card, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Tooltip, Typography } from '@mui/material'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import { useSelector } from 'react-redux';
import { initialStateProps } from '../../Types/Types';

const SideBar = () => {
    const isLoggedIn = useSelector((e: initialStateProps) => e.auth.status);
    // const createPostButtonProps = {
    //     onClick: handleCreateModal
    // }
    const navItems = [
        {
            name: 'Home',
            icons: <HomeRoundedIcon />,
            path: ''
        },
        {
            name: 'Tending',
            icons: <WhatshotIcon />,
            path: ''
        },
        {
            name: 'Videos',
            icons: <MovieCreationRoundedIcon />,
            path: ''
        },
        {
            name: 'Music',
            icons: <MusicNoteRoundedIcon />,
            path: ''
        },
        {
            name: 'Friends',
            icons: <PeopleRoundedIcon />,
            path: ''
        },
        {
            name: 'Liked Posts',
            icons: <ThumbUpIcon />,
            path: ''
        }
    ]

    const createPostLinkProps = {
        href: '/signin'
    }
    return (
        <Box width='100%'>
            <Box>
                <Box p={2}>
                    <Tooltip title={"New Post"}>
                        <Button
                            {...createPostLinkProps}
                            // {...(isLoggedIn ? createPostButtonProps : createPostLinkProps)}
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
                        {navItems.map((item) => {
                            return <ListItem key={item.name} disablePadding >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.icons}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        })}
                    </List>
                </Box>
            </Box>
            <Divider variant='middle' />
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
        </Box>
    )
}

export default SideBar