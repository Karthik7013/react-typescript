import { Avatar, Box, Card, CardHeader, CardMedia, Chip, Divider, IconButton, Stack, Typography } from '@mui/material'
import React from 'react';
import { red } from '@mui/material/colors';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { ExpandCircleDownOutlined } from '@mui/icons-material';
import ScienceIcon from '@mui/icons-material/Science';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
const PostDetails = () => {
    return (
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
                <Stack sx={{ py: 2 }} spacing={1}>
                    <Typography variant='h6' fontWeight={600} color="GrayText">Digital Minimalism: Navigatng the Digital Age With Intension</Typography>
                    <Stack direction={'row'} spacing={1}>
                        <Chip size='small' label='Scientific' icon={<ScienceIcon fontSize='small' />} />
                        <Chip size='small' label='Information' icon={<LightbulbCircleIcon fontSize='small' />} />
                        <Chip size='small' label='Food' icon={<FastfoodIcon fontSize='small' />} />
                        <Chip size='small' label='Travel' icon={<LocalAirportIcon fontSize='small' />} />
                    </Stack>
                </Stack>
                <CardMedia
                    component="img"
                    height={400}
                    sx={{ borderRadius: '1em' }}
                    // height="100"
                    image={"https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    alt="Paella dish"
                />
                <Box py={2} fontWeight={500} color='GrayText'><Typography variant='body1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, minus. Unde dolorem eveniet explicabo vel, hic eius in blanditiis, porro, provident cumque dolore! Reprehenderit magnam pariatur architecto eaque perspiciatis! Eius soluta minus earum dicta temporibus quod quis omnis, pariatur consequuntur quibusdam neque quisquam, impedit dolorum, rem possimus eligendi ipsam necessitatibus.</Typography></Box>
            </Stack>
        </Box>
    )
}

export default PostDetails