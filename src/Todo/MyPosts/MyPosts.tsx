import { Avatar, Box, Divider, IconButton, LinearProgress, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import BASE_URL_ from '../../config';
import { dateFormatter } from '../Utils/utils';
const MyPosts = () => {
    let userId = useSelector((e:any)=> e.auth.data?._id);
    let dispatch = useDispatch()
    let loading = useSelector((e: any) => e.loading);
    let [myPost, setMyPost] = useState<any>();

    const deletePost = async (id: string) => {
        const token = localStorage.getItem('token');
        if (token) {
            const headers = {
                'x-auth-token': token
            }
            let res = await axios.delete(`${BASE_URL_}/admin/deletepost/${id}`, { headers });
            if (res.status === 200) {
                setMyPost(myPost.filter((e: any) => e._id !== id))
            }
        }
    }

    useEffect(() => {
        const getMyPosts = async (token: string) => {
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
            getMyPosts(token)
        }

    }, [dispatch, userId])




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
                                        <IconButton edge="end" aria-label="delete" onClick={() => { deletePost(post._id) }}>
                                            <DeleteIcon color='error' />
                                        </IconButton>
                                    </Stack>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar variant='rounded' src={post.imgUrl}>
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