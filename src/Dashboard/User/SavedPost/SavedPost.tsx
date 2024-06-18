import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL_ } from '../../../config';
import { getToken } from '../../../Utils/utils';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const SavedPost = () => {
    const [savedPosts,setSavedPosts] = useState([])


    const getSavedPosts = async () => {
        const headers = {
            'x-auth-token': getToken()
        }
        const res = await axios.get(`${BASE_URL_}/user/all/savedpost`, {
            headers
        });
        if(res.status === 200){
            setSavedPosts(res.data)
        }
    }
    useEffect(() => {
        getSavedPosts()
    }, [])
//     useEffect(()=>{
// console.log(savedPosts)
//     },[savedPosts])

    return (
        <Box>
            <Typography variant="h6">Saved Posts | Dashboard</Typography>
            <>
                <List dense={true}>
                    <Stack divider={<Divider component="linearGradient" />}>
                    {
                        savedPosts.map((post:any,_)=>{
                          return  <ListItemButton key={_} disableRipple>
                            <ListItem
                                sx={{ px: 0 }}
                                secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon color='error' />
                                        </IconButton>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar variant='rounded' src={post.imgUrl}>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<Link to={`/postdetails/${btoa(post._id)}`}>{post.title}</Link>}
                                    secondary={'saved date'}
                                />
                            </ListItem>
                           
                        </ListItemButton>
                        })
                    }
                   

                   
                        
                    </Stack>
                </List>
            </>
        </Box>
    )
}

export default SavedPost;