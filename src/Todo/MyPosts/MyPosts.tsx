import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import BASE_URL_ from '../../config';

const MyPosts = () => {
    useEffect(() => {
        const getMyPosts = async (userId: string) => {
            let res = await axios.get(`${'http://localhost:8000'}/admin/post/all/${userId}`)
            console.log(res)
        }
        const token = localStorage.getItem('token');

        if (token) {
            const verifyToken = async (token: string) => {
                const headers = {
                    'x-auth-token': token
                }
                let res = await axios.get(`${BASE_URL_}/user/profile`, { headers })
                if (res.status === 200) {
                    console.log(res.data.user._id)
                    getMyPosts(res.data.user._id)
                }

            }
            verifyToken(token)

        }
    }, [])
    return (
        <Box>
            <Typography variant="h6">MyPosts | Dashboard</Typography>
            <>
                <List dense={true}>
                    <Stack divider={<Divider component="linearGradient" />}>
                        {[...new Array(5)].map(() => <ListItemButton disableRipple>
                            <ListItem
                                sx={{ px: 0 }}
                                secondaryAction={
                                    <Stack direction='row' spacing={2}>
                                        <IconButton edge="end" aria-label="delete">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </Stack>

                                }
                            >
                                <ListItemAvatar>
                                    <Avatar src='https://mui.com/static/images/avatar/3.jpg'>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Single-line item"
                                    secondary={'May 22 2024'}
                                />
                            </ListItem>
                        </ListItemButton>)
                        }


                    </Stack>

                </List>
            </>
        </Box>
    )
}

export default MyPosts