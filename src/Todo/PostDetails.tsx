import { Avatar, Box, CardHeader, CardMedia, Chip, Container, Divider, Grid, IconButton, Stack, Typography, Button, TextField, ListItem, ListItemAvatar, ListItemText, LinearProgress } from '@mui/material'
import { red } from '@mui/material/colors';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SendIcon from '@mui/icons-material/Send';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL_ } from '../config';
import axios from 'axios';
import { dateFormatter, getToken } from './Utils/utils';
import { useNavigate } from 'react-router-dom';
import SimilarCard from './PostCard/SimilarCard';


// =======
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { deepPurple } from "@mui/material/colors";
import FormControl from "@mui/material/FormControl";
import { menuClasses } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select, { selectClasses } from "@mui/material/Select";






const PostDetails = () => {
    let navigate = useNavigate();
    let [postDetails, setPostDetails] = useState<any>();
    let params = useParams();
    const postID = params.id;

    useEffect(() => {
        const token = getToken();
        const headers = {
            'x-auth-token': token
        }
        if (token) {
            try {
                const getPostDetails = async () => {
                    let res = await axios.get(`${BASE_URL_}/admin/post/${postID}`, { headers });
                    if (res.status === 200) {
                        setPostDetails(res.data?.post);
                    } else {
                        navigate('/signin');
                    }
                }
                getPostDetails()
            } catch (error) {
                navigate('/signin')
            }
        } else {
            navigate('/signin')
        }
    }, [postID, navigate])


    const UserComment = (props: any) => {
        return <ListItem alignItems="flex-start" sx={{ p: 0 }}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={props.image} />
            </ListItemAvatar>
            <ListItemText
                primary={props.name}
                secondary={
                    <React.Fragment>
                        <Typography noWrap variant='caption'>
                            {props.message}
                        </Typography>
                        <Typography variant='subtitle2'>{props.date}</Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    }

    return (
        <Box>
            {postDetails ?
                <Container maxWidth={'lg'}>
                    <Stack>
                        <CardHeader
                            sx={{ px: 0 }}
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="post">
                                    {postDetails.authorName[0]}
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <BookmarkBorderIcon />
                                </IconButton>
                            }
                            title={postDetails.authorName}
                            subheader={dateFormatter(postDetails.createdAt)}
                        />
                        <Divider />
                        <Stack spacing={1} mt={2}>
                            <Typography variant='h6'>{postDetails.title}</Typography>
                            <Typography variant='body2'>{postDetails.subtitle
                            }</Typography>
                            <Stack direction={'row'} spacing={1} mt={1}>
                                {postDetails.category.map((e: string) => <Chip size='small' label={e} key={e} />)}
                            </Stack>
                        </Stack>
                        <Box py={3}>
                            <CardMedia
                                component="img"
                                height={400}
                                sx={{ borderRadius: '0.8em' }}
                                image={postDetails.imgUrl}
                                alt={postDetails._id}
                            />
                        </Box>
                        <Box mb={3}>
                            <Typography variant='body1' >{postDetails.description}</Typography>
                        </Box>
                        <Divider />
                        <Grid my={2} container rowGap={2} columnSpacing={5}>
                            <Grid component={Stack} direction='row' justifyContent='space-between' alignItems='center' item xs={12}>
                                <Typography variant='h6'>Similar Posts</Typography> <Typography variant='caption' component={'a'} href='/'>more</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <SimilarCard />
                            </Grid>
                            <Grid item xs={12} md={4}>
                            <SimilarCard />
                            </Grid>
                            <Grid item xs={12} md={4}>
                            <SimilarCard />
                            </Grid>
                        </Grid>


                        <Divider />
                        <Stack my={2} spacing={2}>
                            <Typography variant='h6'>Comments</Typography>
                            <UserComment image={'https://mui.com/static/images/avatar/4.jpg'} name={'karthik'} message={'hellow world this is the message'} date={'Nov 26 1999'} />
                            <UserComment image={'https://mui.com/static/images/avatar/3.jpg'} name={'karthik'} message={'hellow world this is the message'} date={'Nov 26 1999'} />

                            <Box component={Stack} direction='row' spacing={2}>
                                <Avatar>{postDetails.authorName[0]}</Avatar>
                                <Typography variant='h6'>Add a comment</Typography>
                            </Box>
                            <Box>
                                <TextField
                                    placeholder='Comment'
                                    multiline
                                    rows={6}
                                    fullWidth></TextField>
                            </Box>
                            <Stack justifyContent='flex-end' direction='row' columnGap={3}>
                                <Button variant='outlined'>clear</Button>
                                <Button variant='contained' color='success' endIcon={<SendIcon />}>Submit</Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Container> : <LinearProgress />}
        </Box>
    )
}

export default PostDetails;









