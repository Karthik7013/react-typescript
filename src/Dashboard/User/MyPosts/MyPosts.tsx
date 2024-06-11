import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, LinearProgress, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL_ } from '../../../config';
import { dateFormatter } from '../../../Utils/utils';
import { Link } from 'react-router-dom';
const MyPosts = () => {
    const [alertBox, setAlertBox] = useState(false)
    const userId = useSelector((e: any) => e.auth.data?._id);
    const dispatch = useDispatch()
    const loading = useSelector((e: any) => e.loading);
    const [myPost, setMyPost] = useState<any>();

    const deletePost = async (id: string) => {
        const token = localStorage.getItem('token');
        if (token) {
            const headers = {
                'x-auth-token': token
            }
            const res = await axios.delete(`${BASE_URL_}/admin/deletepost/${id}`, { headers });
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
            const res = await axios.get(`${BASE_URL_}/admin/post/all/${userId}`, { headers });
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
                    <Stack divider={<Divider />}>
                        {myPost && myPost.map((post: any) => <ListItemButton key={post._id} disableRipple>
                            <ListItem
                                sx={{ px: 0 }}
                                secondaryAction={
                                    <Stack direction='row' spacing={2}>
                                        <IconButton edge="end" aria-label="delete">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete" onClick={() => { setAlertBox(true) }}>
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
                                    primary={<Link to={`/postdetails/${btoa(post._id)}`}>{post.title}</Link>}
                                    secondary={dateFormatter(post.createdAt
                                    )}
                                />
                            </ListItem>
                            <Dialog
                                sx={{ borderRadius: 5, padding: 3 }}
                                open={alertBox}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"This Action is Permanent"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        are you sure to delete the post permanently.This Action cannot be revert back
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus onClick={() => { setAlertBox(false) }}>Cancel</Button>
                                    <Button
                                        onClick={() => { deletePost(post._id); setAlertBox(false) }}
                                        color='error' variant='contained' >
                                        Delete
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </ListItemButton>)
                        }
                    </Stack>
                </List>}
            </>

        </Box>
    )
}

export default MyPosts