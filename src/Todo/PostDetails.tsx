import { Avatar, Box, CardHeader, CardMedia, Chip, Container, Divider, Grid, IconButton, Stack, Typography, Button, TextField, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

import { red } from '@mui/material/colors';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SendIcon from '@mui/icons-material/Send';
import ScienceIcon from '@mui/icons-material/Science';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import RecipeReviewCard from './PostCard';
import React from 'react';
const PostDetails = () => {
    const Wrapper = () => {
        return <RecipeReviewCard image='https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg' content='This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.' id='' title='Shrimp and Chorizo Paella' subheader='September 14, 2016' />

    }
    return (
        <Box>
            <Container maxWidth={'lg'}>
                <Box>
                    <Stack>
                        <CardHeader
                            sx={{ px: 0 }}
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    M
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <BookmarkBorderIcon />
                                </IconButton>
                            }
                            title={'Maximillian'}
                            subheader={"10 june 2016"}
                        />
                        <Divider />
                        <Stack spacing={1}>
                            <Typography variant='h6' fontWeight={600} color="GrayText">Digital Minimalism: Navigatng the Digital Age With Intension</Typography>
                            <Stack direction={'row'} spacing={1}>
                                <Chip size='small' label='Scientific' icon={<ScienceIcon fontSize='small' />} />
                                <Chip size='small' label='Information' icon={<LightbulbCircleIcon fontSize='small' />} />
                                <Chip size='small' label='Food' icon={<FastfoodIcon fontSize='small' />} />
                                <Chip size='small' label='Travel' icon={<LocalAirportIcon fontSize='small' />} />
                            </Stack>
                        </Stack>
                        <Box py={5}>
                            <CardMedia
                                component="img"
                                height={400}
                                sx={{ borderRadius: '0.8em' }}
                                image={"https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                                alt="Paella dish"
                            />
                        </Box>

                        <Box mb={3} fontWeight={500} color='GrayText'>
                            <Typography variant='body1' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, minus. Unde dolorem eveniet explicabo vel, hic eius in blanditiis, porro, provident cumque dolore! Reprehenderit magnam pariatur architecto eaque perspiciatis! Eius soluta minus earum dicta temporibus quod quis omnis, pariatur consequuntur quibusdam neque quisquam, impedit dolorum, rem possimus eligendi ipsam necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis beatae molestias esse vero porro voluptas assumenda id consequatur deserunt. Cumque, est. Impedit magnam non at reiciendis repudiandae incidunt perspiciatis tempore! Dolore soluta esse dolorum officia id accusantium recusandae sint sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum nisi vitae! Voluptates modi sint corporis est, enim voluptatem tenetur numquam commodi doloremque veritatis dicta itaque quo voluptatum quisquam ab nemo quam, maxime repellat iste corrupti officiis iusto facere ipsam. Distinctio assumenda quae laborum minima asperiores, doloribus delectus recusandae, iure reiciendis accusantium optio veritatis, deserunt nisi numquam! Eum, et officia.</Typography>
                        </Box>
                        <Divider />
                        <Grid my={2} container>
                            <Grid item xs={12}>
                                <Typography variant='h6' fontWeight={600} color="GrayText">Similar Posts</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Wrapper />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Wrapper />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Wrapper />
                            </Grid>
                        </Grid>


                        <Divider />
                        <Stack my={2} spacing={2}>
                            <Typography variant='h6' color="GrayText">Comments</Typography>
                            <ListItem alignItems="flex-start" sx={{ p: 0 }}>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/4.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Arun Sing"
                                    secondary={
                                        <React.Fragment>
                                            <Typography noWrap variant='caption'>
                                                I'll be in your neighborhood doing errands this
                                            </Typography>
                                            <Typography variant='subtitle2'>sep 10 2024</Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start" sx={{ p: 0 }}>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/3.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Arun Sing"
                                    secondary={
                                        <React.Fragment>
                                            <Typography noWrap variant='caption'>
                                                I'll be in your neighborhood doing errands this
                                            </Typography>
                                            <Typography variant='subtitle2'>sep 10 2024</Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>

                            <Box component={Stack} direction='row' spacing={2}>
                                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                                <Typography variant='h6' color="GrayText" fontWeight={500}>Add a comment</Typography>
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
                </Box>
            </Container>
        </Box>
    )
}

export default PostDetails;




