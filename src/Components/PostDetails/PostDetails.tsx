import { Avatar, Box, CardHeader, CardMedia, Chip, Container, Divider, Grid, Stack, Typography, Button, TextField, ListItem, ListItemAvatar, ListItemText, LinearProgress, Checkbox, Snackbar, Alert } from '@mui/material'
import { red } from '@mui/material/colors';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SendIcon from '@mui/icons-material/Send';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL_ } from '../../config';
import axios from 'axios';
import { dateFormatter, getToken } from '../../Utils/utils';
import { useNavigate } from 'react-router-dom';
import SimilarCard from '../PostCard/SimilarCard';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import Slide from '@mui/material/Slide';






const PostDetails = () => {


    type alertProps = {
        state: boolean,
        message: string,
        action: 'error' | 'success' | 'info' | 'warning' | 'error' | undefined
    }

    const [alert, setAlert] = useState<alertProps>({ state: false, message: '', action: 'error' });
    const navigate = useNavigate();
    const [postDetails, setPostDetails] = useState<any>();
    const params: any = useParams();
    const postID = atob(params.id);
    const [savePost, setSavedPost] = useState(false);

    useEffect(() => {
        const token = getToken();
        const headers = {
            'x-auth-token': token
        }
        if (token) {
            try {
                const getPostDetails = async () => {
                    const res = await axios.get(`${BASE_URL_}/admin/post/${postID}`, { headers });
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
    const handleSaveChange = async (id: string) => {
        const token = getToken();
        const headers = {
            'x-auth-token': token
        }
        setSavedPost((prev) => !prev)
        const res = await axios.post(`${BASE_URL_}/user/save/${id}`, {}, { headers });
        if (res.status === 200) {
            setAlert({ state: true, message: res.data.message, action: 'success' })
        }
    }
    useEffect(() => {
        console.log(postDetails)
    }, [postDetails])

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
                                <Checkbox checked={savePost} onChange={() => { handleSaveChange(postDetails._id) }} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkRoundedIcon color='primary' />}></Checkbox>
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
                            {[1, 2, 3].map((e) => <Grid key={e} item xs={12} md={4}>
                                <SimilarCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS648NVi2-QaglnIqsI2zMthGTQz8avHaol9ytKHOjFyA&s' content='lorem5000' title='Lizard' />
                            </Grid>)}
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
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={alert.state}
                autoHideDuration={2000}
                onClose={() => { setAlert((prev) => ({ ...prev, state: false, message: '',action:undefined })) }}
                TransitionComponent={Slide}
            ><Alert sx={{ width: '100%' }} variant='filled' severity={alert.action}>{alert.message}</Alert>
            </Snackbar>
        </Box>
    )
}

export default PostDetails;

// error success info warning







