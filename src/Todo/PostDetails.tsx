import { Avatar, Box, Card, CardHeader, CardMedia, Chip, Container, Divider, IconButton, Stack, Typography } from '@mui/material'
import React from 'react';
import { red } from '@mui/material/colors';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { ExpandCircleDownOutlined } from '@mui/icons-material';
import ScienceIcon from '@mui/icons-material/Science';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import Header from './Header';
const PostDetails = () => {
    return (
        <Box bgcolor=''>
            <Container maxWidth={'lg'} sx={{ py: 4 }} >
                <Box>

                    <Stack>
                        <CardHeader
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

                        <Box fontWeight={500} color='GrayText'><Typography variant='body1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, minus. Unde dolorem eveniet explicabo vel, hic eius in blanditiis, porro, provident cumque dolore! Reprehenderit magnam pariatur architecto eaque perspiciatis! Eius soluta minus earum dicta temporibus quod quis omnis, pariatur consequuntur quibusdam neque quisquam, impedit dolorum, rem possimus eligendi ipsam necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis beatae molestias esse vero porro voluptas assumenda id consequatur deserunt. Cumque, est. Impedit magnam non at reiciendis repudiandae incidunt perspiciatis tempore! Dolore soluta esse dolorum officia id accusantium recusandae sint sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum nisi vitae! Voluptates modi sint corporis est, enim voluptatem tenetur numquam commodi doloremque veritatis dicta itaque quo voluptatum quisquam ab nemo quam, maxime repellat iste corrupti officiis iusto facere ipsam. Distinctio assumenda quae laborum minima asperiores, doloribus delectus recusandae, iure reiciendis accusantium optio veritatis, deserunt nisi numquam! Eum, et officia.</Typography></Box>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default PostDetails;




