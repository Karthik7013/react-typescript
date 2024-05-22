import { Avatar, Box, CircularProgress, Divider, IconButton, LinearProgress, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import BASE_URL_ from '../../config';
import { dateFormatter } from '../Utils/utils';
const MyPosts = () => {
    let dispatch = useDispatch()
    let loading = useSelector((e: any) => e.loading);
    let [myPost, setMyPost] = useState<any>()

    useEffect(() => {

        const getMyPosts = async (userId: string, token: string) => {
            const headers = {
                'x-auth-token': token
            }
            dispatch({ type: 'LOADING', payload: true });
            let res = await axios.get(`${BASE_URL_}/admin/post/all/${userId}`, { headers });
            if (res.status === 200) {
                setMyPost(res.data)
            }
            dispatch({ type: 'LOADING', payload: false });

        }

        const token = localStorage.getItem('token');
        if (token) {
            const verifyToken = async (token: string) => {
                const headers = {
                    'x-auth-token': token
                }
                let res = await axios.get(`${BASE_URL_}/user/profile`, { headers })
                if (res.status === 200) {
                    getMyPosts(res.data.user._id, token)
                }
            }
            verifyToken(token)
        }

    }, [])

    


    return (
        <Box>
            <Typography variant="h6">MyPosts | Dashboard</Typography>
            <>
                {loading ? <><LinearProgress /><>loading...</></> : <List dense={true}>
                    <Stack divider={<Divider component="linearGradient" />}>
                        {myPost && myPost.map((post: any) => <ListItemButton key={post._id} disableRipple>
                            <ListItem
                                sx={{ px: 0 }}
                                secondaryAction={
                                    <Stack direction='row' spacing={2}>
                                        <IconButton edge="end" aria-label="delete">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon color='error' />
                                        </IconButton>
                                    </Stack>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar src='https://mui.com/static/images/avatar/3.jpg'>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={post.title}
                                    secondary={dateFormatter(post.createdAt
                                    )}
                                />
                            </ListItem>
                        </ListItemButton>)
                        }
                    </Stack>
                </List>}
            </>
        </Box>
    )
}

export default MyPosts